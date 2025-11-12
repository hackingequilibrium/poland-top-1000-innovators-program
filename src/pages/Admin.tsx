import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import polsvLogo from "@/assets/polsv-logo.png";
import type { User, Session } from "@supabase/supabase-js";
import { z } from "zod";

interface Submission {
  id: string;
  workshop: string;
  track: string;
  stanford: boolean;
  berkeley: boolean;
  name: string;
  email: string;
  linkedin: string;
  created_at: string;
}

const Admin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [newAdminEmail, setNewAdminEmail] = useState("");
  const [newAdminPassword, setNewAdminPassword] = useState("");
  const [creatingAdmin, setCreatingAdmin] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!session?.user) {
          setLoading(false);
          navigate("/auth");
          return;
        }
        
        setSession(session);
        setUser(session.user);
        
        // Check admin role
        const { data: roleData } = await supabase
          .from('user_roles')
          .select('role')
          .eq('user_id', session.user.id)
          .eq('role', 'admin')
          .maybeSingle();
        
        setIsAdmin(!!roleData);
        setLoading(false);
        
        if (!roleData) {
          toast.error("You don't have admin access");
        }
      } catch (error) {
        console.error('Auth check error:', error);
        setLoading(false);
      }
    };

    checkAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (!session?.user) {
          navigate("/auth");
        } else {
          checkAuth();
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (isAdmin && user) {
      fetchSubmissions();
    }
  }, [isAdmin, user]);

  const fetchSubmissions = async () => {
    try {
      const { data, error } = await supabase
        .from('session_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching submissions:', error);
        toast.error("Failed to load submissions");
      } else {
        setSubmissions(data || []);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      toast.error("An unexpected error occurred");
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast.success("Signed out successfully");
    navigate("/auth");
  };

  const adminSchema = z.object({
    email: z.string().trim().email({ message: "Please enter a valid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  });

  const handleCreateAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      adminSchema.parse({ email: newAdminEmail, password: newAdminPassword });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
        return;
      }
    }

    setCreatingAdmin(true);

    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        toast.error("You must be logged in to create admins");
        return;
      }

      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-admin-user`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: newAdminEmail.trim(),
          password: newAdminPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create admin user');
      }

      toast.success("Admin user created successfully!");
      setNewAdminEmail("");
      setNewAdminPassword("");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to create admin user");
    } finally {
      setCreatingAdmin(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0F1435] flex items-center justify-center">
        <p className="text-white font-inter">Loading...</p>
      </div>
    );
  }

  if (!user || !isAdmin) {
    return (
      <div className="min-h-screen bg-[#0F1435] flex items-center justify-center p-4">
        <Card className="rounded-none max-w-md w-full">
          <CardContent className="pt-6 space-y-4">
            <p className="font-inter text-[#797B8E] text-center">
              You need admin access to view this page
            </p>
            <div className="space-y-2">
              <Button
                onClick={() => window.location.href = "/auth"}
                className="w-full bg-[#C70828] hover:bg-[#A80E34] rounded-none"
              >
                Go to Login
              </Button>
              <Button
                onClick={() => window.location.href = "/"}
                variant="outline"
                className="w-full rounded-none"
              >
                Return to Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F1435] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <img src={polsvLogo} alt="PolSV Logo" className="h-16 w-auto" />
            <h1 className="font-inter font-extrabold text-2xl text-white uppercase">
              Admin Panel
            </h1>
          </div>
          <Button
            onClick={handleSignOut}
            className="bg-white text-[#0F1435] hover:bg-gray-100 rounded-none font-inter font-semibold"
          >
            Sign Out
          </Button>
        </div>

        <Tabs defaultValue="submissions" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-[#0C0F24] rounded-none">
            <TabsTrigger value="submissions" className="rounded-none data-[state=active]:bg-[#C70828] data-[state=active]:text-white">
              Session Submissions
            </TabsTrigger>
            <TabsTrigger value="admins" className="rounded-none data-[state=active]:bg-[#C70828] data-[state=active]:text-white">
              User Management
            </TabsTrigger>
          </TabsList>

          <TabsContent value="submissions">
            {submissions.length === 0 ? (
              <Card className="rounded-none">
                <CardContent className="py-12 text-center">
                  <p className="font-inter text-[#797B8E]">No submissions yet</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-6">
                {submissions.map((submission) => (
                  <Card key={submission.id} className="rounded-none">
                    <CardHeader>
                      <CardTitle className="font-inter font-bold text-lg text-[#0F1435]">
                        {submission.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 font-inter text-sm">
                      <p><strong>Email:</strong> {submission.email}</p>
                      <p><strong>LinkedIn:</strong> <a href={submission.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#C70828] hover:underline">{submission.linkedin}</a></p>
                      <p><strong>Workshop:</strong> {submission.workshop === 'industry' ? 'Workshop 1 - Building Industry Partnerships' : 'Workshop 2 – Advancing Academic Collaboration'}</p>
                      <p><strong>Track:</strong> {submission.track === 'life-sciences' ? 'Life Sciences' : submission.track === 'deeptech' ? 'DeepTech' : 'Energy & Sustainability'}</p>
                      <p><strong>Locations:</strong> {[submission.stanford && 'Stanford', submission.berkeley && 'Berkeley'].filter(Boolean).join(', ')}</p>
                      <p className="text-[#797B8E] text-xs"><strong>Submitted:</strong> {new Date(submission.created_at).toLocaleString()}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="admins">
            <Card className="rounded-none">
              <CardHeader>
                <CardTitle className="font-inter font-bold text-xl text-[#0F1435]">
                  Create New Admin User
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCreateAdmin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="adminEmail">Email</Label>
                    <Input
                      id="adminEmail"
                      type="email"
                      placeholder="Enter admin email"
                      value={newAdminEmail}
                      onChange={(e) => setNewAdminEmail(e.target.value)}
                      className="rounded-none"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="adminPassword">Password</Label>
                    <Input
                      id="adminPassword"
                      type="password"
                      placeholder="Enter password (min 8 characters)"
                      value={newAdminPassword}
                      onChange={(e) => setNewAdminPassword(e.target.value)}
                      className="rounded-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={creatingAdmin}
                    className="w-full bg-[#C70828] hover:bg-[#A80E34] text-white font-inter font-semibold text-sm uppercase rounded-none"
                  >
                    {creatingAdmin ? "Creating..." : "Create Admin User"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
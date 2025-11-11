import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import polsvLogo from "@/assets/polsv-logo.png";
import type { User, Session } from "@supabase/supabase-js";

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

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        // Check admin role when session changes
        if (session?.user) {
          setTimeout(() => {
            checkAdminRole(session.user.id);
          }, 0);
        } else {
          setIsAdmin(false);
          setLoading(false);
        }
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        checkAdminRole(session.user.id);
      } else {
        setLoading(false);
        navigate("/auth");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const checkAdminRole = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', userId)
        .eq('role', 'admin')
        .maybeSingle();

      if (error) {
        console.error('Error checking admin role:', error);
        toast.error("Failed to verify admin access");
        setIsAdmin(false);
      } else {
        setIsAdmin(!!data);
        if (!data) {
          toast.error("You don't have admin access");
        }
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      setIsAdmin(false);
    } finally {
      setLoading(false);
    }
  };

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

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0F1435] flex items-center justify-center">
        <p className="text-white font-inter">Loading...</p>
      </div>
    );
  }

  if (!user || !isAdmin) {
    return (
      <div className="min-h-screen bg-[#0F1435] flex items-center justify-center">
        <Card className="rounded-none">
          <CardContent className="pt-6">
            <p className="font-inter text-[#797B8E] mb-4">
              You need admin access to view this page
            </p>
            <Button
              onClick={() => navigate("/auth")}
              className="bg-[#C70828] hover:bg-[#A80E34] rounded-none"
            >
              Go to Login
            </Button>
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
              Admin Panel - Session Submissions
            </h1>
          </div>
          <Button
            onClick={handleSignOut}
            className="bg-white text-[#0F1435] hover:bg-gray-100 rounded-none font-inter font-semibold"
          >
            Sign Out
          </Button>
        </div>

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
      </div>
    </div>
  );
};

export default Admin;
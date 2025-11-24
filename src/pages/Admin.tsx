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

interface ExpertRecommendation {
  id: string;
  submitter_name: string;
  submitter_email: string;
  expert_full_name: string;
  expert_email: string | null;
  expert_phone: string | null;
  expert_linkedin: string | null;
  expert_sector: string;
  warm_intro: boolean;
  created_at: string;
}

interface RSVPSubmission {
  id: string;
  name: string;
  email: string;
  attendance: string;
  interested_sectors: string[];
  created_at: string;
}

interface GuestRSVPSubmission {
  id: string;
  name: string;
  surname: string;
  organization: string | null;
  role: string | null;
  email: string;
  linkedin: string | null;
  attendance: string;
  interested_sectors: string[];
  created_at: string;
}

interface AdminUser {
  user_id: string;
  email: string;
  full_name: string | null;
  created_at: string;
}

const Admin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [expertRecommendations, setExpertRecommendations] = useState<ExpertRecommendation[]>([]);
  const [rsvpSubmissions, setRsvpSubmissions] = useState<RSVPSubmission[]>([]);
  const [guestRsvpSubmissions, setGuestRsvpSubmissions] = useState<GuestRSVPSubmission[]>([]);
  const [adminUsers, setAdminUsers] = useState<AdminUser[]>([]);
  const [newAdminEmail, setNewAdminEmail] = useState("");
  const [newAdminPassword, setNewAdminPassword] = useState("");
  const [creatingAdmin, setCreatingAdmin] = useState(false);
  const [showCreateAdmin, setShowCreateAdmin] = useState(false);

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
      fetchExpertRecommendations();
      fetchRSVPSubmissions();
      fetchGuestRSVPSubmissions();
      fetchAdminUsers();
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

  const handleDeleteSubmission = async (id: string) => {
    if (!confirm('Are you sure you want to delete this submission?')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('session_submissions')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting submission:', error);
        toast.error("Failed to delete submission");
      } else {
        toast.success("Submission deleted successfully");
        fetchSubmissions();
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error("Failed to delete submission");
    }
  };

  const handleExportSubmissions = () => {
    if (submissions.length === 0) {
      toast.error("No submissions to export");
      return;
    }

    const csvContent = [
      ['Name', 'Email', 'LinkedIn', 'Workshop', 'Track', 'Stanford', 'Berkeley', 'Submitted At'].join(','),
      ...submissions.map(s => [
        `"${s.name}"`,
        `"${s.email}"`,
        `"${s.linkedin}"`,
        `"${s.workshop === 'industry' ? 'Workshop 1 - Building Industry Partnerships' : 'Workshop 2 – Advancing Academic Collaboration'}"`,
        `"${s.track === 'life-sciences' ? 'Life Sciences' : s.track === 'deeptech' ? 'DeepTech' : 'Energy & Sustainability'}"`,
        s.stanford ? 'Yes' : 'No',
        s.berkeley ? 'Yes' : 'No',
        `"${new Date(s.created_at).toLocaleString()}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `session-submissions-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success("Submissions exported successfully");
  };

  const fetchExpertRecommendations = async () => {
    try {
      const { data, error } = await supabase
        .from('expert_recommendations')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching expert recommendations:', error);
        toast.error("Failed to load expert recommendations");
      } else {
        setExpertRecommendations(data || []);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      toast.error("An unexpected error occurred");
    }
  };

  const fetchRSVPSubmissions = async () => {
    try {
      const { data, error } = await supabase
        .from('rsvp_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching RSVP submissions:', error);
        toast.error("Failed to load RSVP submissions");
      } else {
        setRsvpSubmissions(data || []);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      toast.error("An unexpected error occurred");
    }
  };

  const handleExportRSVPs = () => {
    if (rsvpSubmissions.length === 0) {
      toast.error("No RSVP submissions to export");
      return;
    }

    const csvContent = [
      ['Name', 'Email', 'Attendance', 'Interested Sectors', 'Submitted At'].join(','),
      ...rsvpSubmissions.map(r => [
        `"${r.name}"`,
        `"${r.email}"`,
        `"${r.attendance}"`,
        `"${r.interested_sectors.join('; ')}"`,
        `"${new Date(r.created_at).toLocaleString()}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `rsvp-submissions-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success("RSVP submissions exported successfully");
  };

  const fetchGuestRSVPSubmissions = async () => {
    try {
      const { data, error } = await supabase
        .from('guest_rsvp_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching guest RSVP submissions:', error);
        toast.error("Failed to load guest RSVP submissions");
      } else {
        setGuestRsvpSubmissions(data || []);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      toast.error("An unexpected error occurred");
    }
  };

  const handleExportGuestRSVPs = () => {
    if (guestRsvpSubmissions.length === 0) {
      toast.error("No guest RSVP submissions to export");
      return;
    }

    const csvContent = [
      ['Name', 'Surname', 'Organization', 'Role', 'Email', 'LinkedIn', 'Attendance', 'Interested Sectors', 'Submitted At'].join(','),
      ...guestRsvpSubmissions.map(r => [
        `"${r.name}"`,
        `"${r.surname}"`,
        `"${r.organization || ''}"`,
        `"${r.role || ''}"`,
        `"${r.email}"`,
        `"${r.linkedin || ''}"`,
        `"${r.attendance}"`,
        `"${r.interested_sectors.join('; ')}"`,
        `"${new Date(r.created_at).toLocaleString()}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `guest-rsvp-submissions-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success("Guest RSVP submissions exported successfully");
  };

  const fetchAdminUsers = async () => {
    try {
      // First fetch user_roles for admins
      const { data: rolesData, error: rolesError } = await supabase
        .from('user_roles')
        .select('user_id, created_at')
        .eq('role', 'admin')
        .order('created_at', { ascending: false });

      if (rolesError) {
        console.error('Error fetching admin roles:', rolesError);
        toast.error("Failed to load admin users");
        return;
      }

      if (!rolesData || rolesData.length === 0) {
        setAdminUsers([]);
        return;
      }

      // Then fetch profiles for these user IDs
      const userIds = rolesData.map(role => role.user_id);
      const { data: profilesData, error: profilesError } = await supabase
        .from('profiles')
        .select('id, email, full_name')
        .in('id', userIds);

      if (profilesError) {
        console.error('Error fetching profiles:', profilesError);
        toast.error("Failed to load admin user details");
        return;
      }

      // Combine the data
      const formattedData = rolesData.map(role => {
        const profile = profilesData?.find(p => p.id === role.user_id);
        return {
          user_id: role.user_id,
          email: profile?.email || 'No email',
          full_name: profile?.full_name || null,
          created_at: role.created_at
        };
      });
      
      setAdminUsers(formattedData);
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

  const handleDeleteAdmin = async (userId: string) => {
    if (userId === user?.id) {
      toast.error("You cannot delete your own admin account");
      return;
    }

    if (!confirm("Are you sure you want to remove admin access for this user?")) {
      return;
    }

    try {
      const { error } = await supabase
        .from('user_roles')
        .delete()
        .eq('user_id', userId)
        .eq('role', 'admin');

      if (error) throw error;

      toast.success("Admin access removed successfully");
      fetchAdminUsers();
    } catch (error) {
      toast.error("Failed to remove admin access");
    }
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
      setShowCreateAdmin(false);
      fetchAdminUsers(); // Refresh the admin list
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
            <div>
              <h1 className="font-inter font-extrabold text-2xl text-white uppercase">
                Admin Panel
              </h1>
              {user && (
                <p className="font-inter text-sm text-gray-400 mt-1">
                  Logged in as: {user.email}
                </p>
              )}
            </div>
          </div>
          <Button
            onClick={handleSignOut}
            className="bg-white text-[#0F1435] hover:bg-gray-100 rounded-none font-inter font-semibold"
          >
            Sign Out
          </Button>
        </div>

        <Tabs defaultValue="submissions" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8 bg-[#0C0F24] rounded-none">
            <TabsTrigger value="submissions" className="rounded-none data-[state=active]:bg-[#C70828] data-[state=active]:text-white">
              Session Submissions
            </TabsTrigger>
            <TabsTrigger value="rsvp" className="rounded-none data-[state=active]:bg-[#C70828] data-[state=active]:text-white">
              RSVP Submissions
            </TabsTrigger>
            <TabsTrigger value="guest-rsvp" className="rounded-none data-[state=active]:bg-[#C70828] data-[state=active]:text-white">
              Guest RSVPs
            </TabsTrigger>
            <TabsTrigger value="experts" className="rounded-none data-[state=active]:bg-[#C70828] data-[state=active]:text-white">
              Expert Recommendations
            </TabsTrigger>
            <TabsTrigger value="admins" className="rounded-none data-[state=active]:bg-[#C70828] data-[state=active]:text-white">
              User Management
            </TabsTrigger>
          </TabsList>

          <TabsContent value="submissions">
            {submissions.length > 0 && (
              <div className="mb-4 flex justify-end">
                <Button
                  onClick={handleExportSubmissions}
                  className="bg-[#0F1435] hover:bg-[#1a1f4d] text-white rounded-none font-inter font-semibold"
                >
                  Export All Sessions to CSV
                </Button>
              </div>
            )}
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
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle className="font-inter font-bold text-lg text-[#0F1435]">
                        {submission.name}
                      </CardTitle>
                      <Button
                        onClick={() => handleDeleteSubmission(submission.id)}
                        variant="destructive"
                        size="sm"
                        className="rounded-none bg-[#C70828] hover:bg-[#A80E34]"
                      >
                        Delete
                      </Button>
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

          <TabsContent value="rsvp">
            {rsvpSubmissions.length > 0 && (
              <div className="mb-4 flex justify-end">
                <Button
                  onClick={handleExportRSVPs}
                  className="bg-[#0F1435] hover:bg-[#1a1f4d] text-white rounded-none font-inter font-semibold"
                >
                  Export All RSVPs to CSV
                </Button>
              </div>
            )}
            {rsvpSubmissions.length === 0 ? (
              <Card className="rounded-none">
                <CardContent className="py-12 text-center">
                  <p className="font-inter text-[#797B8E]">No RSVP submissions yet</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-6">
                {rsvpSubmissions.map((rsvp) => (
                  <Card key={rsvp.id} className="rounded-none">
                    <CardHeader>
                      <CardTitle className="font-inter font-bold text-lg text-[#0F1435]">
                        {rsvp.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 font-inter text-sm">
                      <p><strong>Email:</strong> {rsvp.email}</p>
                      <p><strong>Attendance:</strong> <span className={`font-semibold ${
                        rsvp.attendance === 'yes' ? 'text-green-600' : 
                        rsvp.attendance === 'maybe' ? 'text-yellow-600' : 
                        'text-red-600'
                      }`}>
                        {rsvp.attendance.charAt(0).toUpperCase() + rsvp.attendance.slice(1)}
                      </span></p>
                      {rsvp.interested_sectors && rsvp.interested_sectors.length > 0 && (
                        <div>
                          <p className="font-semibold mb-1">Interested Sectors:</p>
                          <ul className="list-disc list-inside pl-2 space-y-1 text-[#797B8E]">
                            {rsvp.interested_sectors.map((sector, idx) => (
                              <li key={idx}>{sector}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <p className="text-[#797B8E] text-xs pt-2"><strong>Submitted:</strong> {new Date(rsvp.created_at).toLocaleString()}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="guest-rsvp">
            {guestRsvpSubmissions.length > 0 && (
              <div className="mb-4 flex justify-end">
                <Button
                  onClick={handleExportGuestRSVPs}
                  className="bg-[#0F1435] hover:bg-[#1a1f4d] text-white rounded-none font-inter font-semibold"
                >
                  Export All Guest RSVPs to CSV
                </Button>
              </div>
            )}
            {guestRsvpSubmissions.length === 0 ? (
              <Card className="rounded-none">
                <CardContent className="py-12 text-center">
                  <p className="font-inter text-[#797B8E]">No guest RSVP submissions yet</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-6">
                {guestRsvpSubmissions.map((rsvp) => (
                  <Card key={rsvp.id} className="rounded-none">
                    <CardHeader>
                      <CardTitle className="font-inter font-bold text-lg text-[#0F1435]">
                        {rsvp.name} {rsvp.surname}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 font-inter text-sm">
                      <p><strong>Email:</strong> {rsvp.email}</p>
                      {rsvp.organization && <p><strong>Organization:</strong> {rsvp.organization}</p>}
                      {rsvp.role && <p><strong>Role:</strong> {rsvp.role}</p>}
                      {rsvp.linkedin && (
                        <p><strong>LinkedIn:</strong> <a href={rsvp.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#C70828] hover:underline">{rsvp.linkedin}</a></p>
                      )}
                      <p><strong>Attendance:</strong> <span className={`font-semibold ${
                        rsvp.attendance === 'yes' ? 'text-green-600' : 
                        rsvp.attendance === 'maybe' ? 'text-yellow-600' : 
                        'text-red-600'
                      }`}>
                        {rsvp.attendance.charAt(0).toUpperCase() + rsvp.attendance.slice(1)}
                      </span></p>
                      {rsvp.interested_sectors && rsvp.interested_sectors.length > 0 && (
                        <div>
                          <p className="font-semibold mb-1">Interested Sectors:</p>
                          <ul className="list-disc list-inside pl-2 space-y-1 text-[#797B8E]">
                            {rsvp.interested_sectors.map((sector, idx) => (
                              <li key={idx}>{sector}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <p className="text-[#797B8E] text-xs pt-2"><strong>Submitted:</strong> {new Date(rsvp.created_at).toLocaleString()}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="experts">
            {expertRecommendations.length === 0 ? (
              <Card className="rounded-none">
                <CardContent className="py-12 text-center">
                  <p className="font-inter text-[#797B8E]">No expert recommendations yet</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-6">
                {expertRecommendations.map((recommendation) => (
                  <Card key={recommendation.id} className="rounded-none">
                    <CardHeader>
                      <CardTitle className="font-inter font-bold text-lg text-[#0F1435]">
                        {recommendation.expert_full_name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 font-inter text-sm">
                      <div className="border-b border-gray-200 pb-3">
                        <p className="text-xs text-[#797B8E] uppercase font-semibold mb-2">Expert Information</p>
                        {recommendation.expert_email && <p><strong>Email:</strong> {recommendation.expert_email}</p>}
                        {recommendation.expert_phone && <p><strong>Phone:</strong> {recommendation.expert_phone}</p>}
                        {recommendation.expert_linkedin && (
                          <p><strong>LinkedIn:</strong> <a href={recommendation.expert_linkedin} target="_blank" rel="noopener noreferrer" className="text-[#C70828] hover:underline">{recommendation.expert_linkedin}</a></p>
                        )}
                        <p><strong>Sector:</strong> {recommendation.expert_sector}</p>
                        <p><strong>Warm Introduction:</strong> {recommendation.warm_intro ? 'Yes' : 'No'}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#797B8E] uppercase font-semibold mb-2">Submitted By</p>
                        <p><strong>Name:</strong> {recommendation.submitter_name}</p>
                        <p><strong>Email:</strong> {recommendation.submitter_email}</p>
                        <p className="text-[#797B8E] text-xs mt-2"><strong>Submitted:</strong> {new Date(recommendation.created_at).toLocaleString()}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="admins" className="space-y-6">
            {!showCreateAdmin ? (
              <>
                <div className="flex justify-between items-center">
                  <h2 className="font-inter font-extrabold text-xl text-white">Admin Users</h2>
                  <Button
                    onClick={() => setShowCreateAdmin(true)}
                    className="bg-[#C70828] hover:bg-[#A80E34] text-white font-inter font-semibold rounded-none"
                  >
                    + Create New Admin
                  </Button>
                </div>

                {adminUsers.length === 0 ? (
                  <Card className="rounded-none">
                    <CardContent className="py-12 text-center">
                      <p className="font-inter text-[#797B8E]">No admin users found</p>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="grid gap-4">
                    {adminUsers.map((admin) => (
                      <Card key={admin.user_id} className="rounded-none">
                        <CardContent className="py-4">
                          <div className="flex justify-between items-start">
                            <div className="space-y-1">
                              <p className="font-inter font-bold text-base text-[#0F1435]">
                                {admin.full_name || 'No name'}
                                {admin.user_id === user?.id && (
                                  <span className="ml-2 text-xs font-normal text-[#C70828]">(You)</span>
                                )}
                              </p>
                              <p className="font-inter text-sm text-[#797B8E]">
                                {admin.email}
                              </p>
                              <p className="font-inter text-xs text-[#797B8E]">
                                Added: {new Date(admin.created_at).toLocaleDateString()}
                              </p>
                            </div>
                            {admin.user_id !== user?.id && (
                              <Button
                                onClick={() => handleDeleteAdmin(admin.user_id)}
                                variant="destructive"
                                size="sm"
                                className="rounded-none"
                              >
                                Remove Access
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Card className="rounded-none">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="font-inter font-bold text-xl text-[#0F1435]">
                      Create New Admin User
                    </CardTitle>
                    <Button
                      onClick={() => {
                        setShowCreateAdmin(false);
                        setNewAdminEmail("");
                        setNewAdminPassword("");
                      }}
                      variant="ghost"
                      className="rounded-none"
                    >
                      Cancel
                    </Button>
                  </div>
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
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
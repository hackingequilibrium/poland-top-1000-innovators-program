import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const LeadSession = () => {
  return (
    <main className="min-h-screen bg-[#0F1435]">
      <Header simplified />
      
      <div className="pt-[120px] pb-[100px] px-8 lg:px-[100px]">
        <div className="bg-white p-8 lg:p-12 max-w-4xl mx-auto">
          <h2 className="font-inter font-extrabold text-lg md:text-xl lg:text-2xl text-[#0F1435] mb-6 uppercase">
            Lead a Session at Stanford or Berkeley (or Both!)
          </h2>
          
          <p className="font-inter font-light text-sm md:text-base text-[#797B8E] mb-8 leading-relaxed">
            Join an elite circle of 30 participants — the best scientists and innovators from Poland — and share your Silicon Valley experience in an interactive, semi-structured format where live dialogue, real-world use cases, and best practices replace passive video sessions.
          </p>

          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Enter your full name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="organization">Organization</Label>
              <Input id="organization" placeholder="Enter your organization" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="topic">Session Topic</Label>
              <Input id="topic" placeholder="What would you like to share?" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Session Description</Label>
              <Textarea 
                id="description" 
                placeholder="Describe your session and what participants will learn"
                className="min-h-[120px]"
              />
            </div>

            <Button 
              type="submit" 
              className="bg-[#C70828] hover:bg-[#A80E34] text-white font-inter font-semibold text-sm uppercase px-6 py-3"
            >
              Submit Application →
            </Button>
          </form>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default LeadSession;

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

          <div className="mb-8 space-y-6">
            <div>
              <h3 className="font-inter font-semibold text-base md:text-lg text-[#0F1435] mb-3">
                Workshop 1 - Building Industry Partnerships
              </h3>
              <p className="font-inter font-light text-sm md:text-base text-[#797B8E] leading-relaxed">
                Learn how to position research outcomes for meaningful engagement with corporate R&D teams and investors. This session connects Silicon Valley innovation leaders with Polish research teams to exchange practical insights and real-world case studies on transforming breakthrough technologies from lab to market. As a U.S. moderator, you'll gain a unique opportunity to share best practices, identify co-development pathways, and explore new models of university–industry collaboration with Poland's top scientific talent.
              </p>
            </div>

            <div>
              <h3 className="font-inter font-semibold text-base md:text-lg text-[#0F1435] mb-3">
                Workshop 2 – Advancing Academic Collaboration
              </h3>
              <p className="font-inter font-light text-sm md:text-base text-[#797B8E] leading-relaxed">
                Discover models for international co-development, research exchange, and joint innovation programs. Silicon Valley academic leaders serving as moderators will engage directly with Poland's leading universities to co-design future partnerships, explore joint IP opportunities, and open channels for talent exchange and shared infrastructure that connect the Bay Area with Poland's most dynamic research ecosystems.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-inter font-semibold text-base md:text-lg text-[#0F1435] mb-3">
              Session Details
            </h3>
            <p className="font-inter font-light text-sm md:text-base text-[#797B8E] leading-relaxed mb-2">
              Both workshops are in person and will take place at:
            </p>
            <ul className="list-disc list-inside font-inter font-light text-sm md:text-base text-[#797B8E] leading-relaxed ml-4 mb-3">
              <li>Stanford University — December 9, 1:30–2:45 PM</li>
              <li>UC Berkeley — December 11, 1:15–2:45 PM</li>
            </ul>
            <p className="font-inter font-light text-sm md:text-base text-[#797B8E] leading-relaxed mb-2">
              Each workshop will host 90 participants, divided into three focused tracks:
            </p>
            <ul className="list-disc list-inside font-inter font-light text-sm md:text-base text-[#797B8E] leading-relaxed ml-4">
              <li>Life Sciences</li>
              <li>DeepTech</li>
              <li>Energy & Sustainability</li>
            </ul>
          </div>

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

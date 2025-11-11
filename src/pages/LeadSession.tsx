import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

          <div className="mb-8 flex flex-col md:flex-row md:justify-center gap-8 md:gap-8 items-start">
            <div className="md:max-w-[340px]">
              <h3 className="font-inter font-extrabold text-base md:text-lg text-[#0F1435] mb-3 uppercase">
                Workshop 1<br />Building Industry Partnerships
              </h3>
              <p className="font-inter font-light text-sm md:text-base text-[#797B8E] leading-relaxed">
                Learn how to position research outcomes for meaningful engagement with corporate R&D teams and investors. This session connects Silicon Valley innovation leaders with Polish research teams to exchange practical insights and real-world case studies on transforming breakthrough technologies from lab to market. As a U.S. moderator, you'll gain a unique opportunity to share best practices, identify co-development pathways, and explore new models of university–industry collaboration with Poland's top scientific talent.
              </p>
            </div>

            <Separator orientation="vertical" className="hidden md:block self-stretch" />

            <div className="md:max-w-[340px]">
              <h3 className="font-inter font-extrabold text-base md:text-lg text-[#0F1435] mb-3 uppercase">
                Workshop 2 – Advancing Academic Collaboration
              </h3>
              <p className="font-inter font-light text-sm md:text-base text-[#797B8E] leading-relaxed">
                Discover models for international co-development, research exchange, and joint innovation programs. Silicon Valley academic leaders serving as moderators will engage directly with Poland's leading universities to co-design future partnerships, explore joint IP opportunities, and open channels for talent exchange and shared infrastructure that connect the Bay Area with Poland's most dynamic research ecosystems.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-inter font-extrabold text-base md:text-lg text-[#0F1435] mb-3 uppercase">
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

          <h3 className="font-inter font-semibold text-base md:text-lg text-[#0F1435] mb-4">
            Choose your workshop:
          </h3>

          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="workshop">Workshop</Label>
              <Select>
                <SelectTrigger id="workshop" className="rounded-none">
                  <SelectValue placeholder="Select a workshop" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="industry">Workshop 1 - Building Industry Partnerships</SelectItem>
                  <SelectItem value="academic">Workshop 2 – Advancing Academic Collaboration</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="track">Track</Label>
              <Select>
                <SelectTrigger id="track" className="rounded-none">
                  <SelectValue placeholder="Select a track" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="life-sciences">Life Sciences</SelectItem>
                  <SelectItem value="deeptech">DeepTech</SelectItem>
                  <SelectItem value="energy">Energy & Sustainability</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label>Location</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="stanford" className="rounded-none" />
                  <label
                    htmlFor="stanford"
                    className="text-sm font-inter font-light text-[#797B8E] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Stanford University — December 9, 1:30–2:45 PM
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="berkeley" className="rounded-none" />
                  <label
                    htmlFor="berkeley"
                    className="text-sm font-inter font-light text-[#797B8E] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    UC Berkeley — December 11, 1:15–2:45 PM
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" className="rounded-none" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" placeholder="Enter your email" className="rounded-none" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="linkedin">LinkedIn Profile</Label>
              <Input id="linkedin" placeholder="Enter your LinkedIn profile URL" className="rounded-none" />
            </div>

            <Button 
              type="submit" 
              className="bg-[#C70828] hover:bg-[#A80E34] text-white font-inter font-semibold text-sm uppercase px-6 py-3 rounded-none"
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

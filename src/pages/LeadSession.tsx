import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const formSchema = z.object({
  workshop: z.string().min(1, { message: "Please select a workshop" }),
  track: z.string().min(1, { message: "Please select a track" }),
  locations: z.object({
    stanford: z.boolean(),
    berkeley: z.boolean(),
  }).optional(),
  name: z.string().trim().min(1, { message: "Name is required" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  linkedin: z.string().trim().min(1, { message: "LinkedIn profile is required" }).url({ message: "Please enter a valid LinkedIn URL" }).max(500, { message: "URL must be less than 500 characters" }),
}).superRefine((data, ctx) => {
  // Only validate locations for workshops 1 and 2
  if (data.workshop === "industry" || data.workshop === "academic") {
    if (data.locations && !data.locations.stanford && !data.locations.berkeley) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please select at least one location",
        path: ["locations", "root"],
      });
    }
  }
});

type FormData = z.infer<typeof formSchema>;

const LeadSession = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState("");
  
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      workshop: "",
      track: "",
      locations: {
        stanford: false,
        berkeley: false,
      },
      name: "",
      email: "",
      linkedin: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const { error } = await supabase
        .from('session_submissions')
        .insert({
          workshop: data.workshop,
          track: data.track,
          stanford: data.locations?.stanford || false,
          berkeley: data.locations?.berkeley || false,
          triplering: false,
          name: data.name,
          email: data.email,
          linkedin: data.linkedin
        });

      if (error) {
        console.error('Submission error:', error);
        toast.error("Failed to submit application. Please try again.");
        return;
      }

      setIsSubmitted(true);
      toast.success("Application submitted successfully!");
    } catch (error) {
      console.error('Unexpected error:', error);
      toast.error("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-[#0F1435] flex flex-col">
      <Header simplified />
      
      <div className="flex-grow pt-[120px] pb-[100px] px-8 lg:px-[100px]">
        <div className="bg-white p-8 lg:p-12 max-w-4xl mx-auto">
          <h2 className="font-inter font-extrabold text-lg md:text-xl lg:text-2xl text-[#0F1435] mb-6 uppercase">
            {isSubmitted ? "Thank you for your submission!" : "Lead a Session"}
          </h2>
          
          {isSubmitted ? (
            <p className="font-inter font-light text-sm md:text-base text-[#797B8E] leading-relaxed">
              Your application to lead a session has been received. Our coordination team will review it and follow up shortly with next steps.
            </p>
          ) : (
            <>
              <p className="font-inter font-light text-sm md:text-base text-[#797B8E] mb-8 leading-relaxed">
                Join an elite circle of 30 participants — the best scientists and innovators from Poland — and share your Silicon Valley experience in an interactive, semi-structured format where live dialogue, real-world use cases, and best practices replace passive video sessions.
              </p>

              <Accordion type="single" collapsible className="mb-8">
                <AccordionItem value="workshop1" className="border-border">
                  <AccordionTrigger className="font-inter uppercase hover:no-underline">
                    <div className="text-left">
                      <span className="text-sm md:text-base text-[#D1D5DB] font-bold block">Workshop 1</span>
                      <span className="text-base md:text-lg text-[#0F1435] font-extrabold">Building Industry Partnerships</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="font-inter font-light text-sm md:text-base text-[#797B8E] leading-relaxed pt-2">
                      Learn how to position research outcomes for meaningful engagement with corporate R&D teams and investors. This session connects Silicon Valley innovation leaders with Polish research teams to exchange practical insights and real-world case studies on transforming breakthrough technologies from lab to market. As a U.S. moderator, you'll gain a unique opportunity to share best practices, identify co-development pathways, and explore new models of university–industry collaboration with Poland's top scientific talent.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="workshop2" className="border-border">
                  <AccordionTrigger className="font-inter uppercase hover:no-underline">
                    <div className="text-left">
                      <span className="text-sm md:text-base text-[#D1D5DB] font-bold block">Workshop 2</span>
                      <span className="text-base md:text-lg text-[#0F1435] font-extrabold">Advancing Academic Collaboration</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="font-inter font-light text-sm md:text-base text-[#797B8E] leading-relaxed pt-2">
                      Discover models for international co-development, research exchange, and joint innovation programs. Silicon Valley academic leaders serving as moderators will engage directly with Poland's leading universities to co-design future partnerships, explore joint IP opportunities, and open channels for talent exchange and shared infrastructure that connect the Bay Area with Poland's most dynamic research ecosystems.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="workshop3" className="border-border">
                  <AccordionTrigger className="font-inter uppercase hover:no-underline">
                    <div className="text-left">
                      <span className="text-sm md:text-base text-[#D1D5DB] font-bold block">Workshop 3</span>
                      <span className="text-base md:text-lg text-[#0F1435] font-extrabold">Global Innovation Readiness</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="font-inter font-light text-sm md:text-base text-[#797B8E] leading-relaxed pt-2">
                      This hands-on workshop empowers Polish innovators, scientists, and university spin-offs to expand their reach and competitiveness on the global stage. Participants will assess and strengthen the key dimensions that determine international success — from intellectual property protection and funding strategies to team development, customer engagement, technology validation, and business scalability.
                    </p>
                    <p className="font-inter font-light text-sm md:text-base text-[#797B8E] leading-relaxed pt-2">
                      By the end of the session, participants will have a clearer view of their project's readiness for international collaboration, investment, and market entry — and a practical roadmap to accelerate their journey from local innovation to global impact.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="workshop4" className="border-border">
                  <AccordionTrigger className="font-inter uppercase hover:no-underline [&>svg]:hidden">
                    <div className="text-left">
                      <span className="text-sm md:text-base text-[#D1D5DB] font-bold block">Workshop 4</span>
                      <span className="text-base md:text-lg text-[#0F1435] font-extrabold">From Idea to Prototype</span>
                    </div>
                  </AccordionTrigger>
                </AccordionItem>

                <AccordionItem value="workshop5" className="border-border">
                  <AccordionTrigger className="font-inter uppercase hover:no-underline [&>svg]:hidden">
                    <div className="text-left">
                      <span className="text-sm md:text-base text-[#D1D5DB] font-bold block">Workshop 5</span>
                      <span className="text-base md:text-lg text-[#0F1435] font-extrabold">From Prototype to Product</span>
                    </div>
                  </AccordionTrigger>
                </AccordionItem>

                <AccordionItem value="workshop6" className="border-border">
                  <AccordionTrigger className="font-inter uppercase hover:no-underline [&>svg]:hidden">
                    <div className="text-left">
                      <span className="text-sm md:text-base text-[#D1D5DB] font-bold block">Workshop 6</span>
                      <span className="text-base md:text-lg text-[#0F1435] font-extrabold">From Product to Market</span>
                    </div>
                  </AccordionTrigger>
                </AccordionItem>
              </Accordion>

              <div className="mb-8">
                <p className="font-inter font-light text-sm md:text-base text-[#797B8E] leading-relaxed mb-3">
                  Workshops are held in person at the following locations:
                </p>
                <div className="font-inter font-light text-sm md:text-base text-[#797B8E] leading-relaxed ml-4 space-y-3">
                  <div>
                    <p className="mb-1">• Workshop 1: Building Industry Partnerships</p>
                    <p className="ml-4">– Stanford University — December 9, 2:30–3:45 PM</p>
                    <p className="ml-4">– UC Berkeley — December 11, 1:15–2:45 PM</p>
                  </div>
                  <div>
                    <p className="mb-1">• Workshop 2: Advancing Academic Collaboration</p>
                    <p className="ml-4">– Stanford University — December 9, 2:30–3:45 PM</p>
                    <p className="ml-4">– UC Berkeley — December 11, 1:15–2:45 PM</p>
                  </div>
                  <div>
                    <p className="mb-1">• Workshop 3: Global Innovation Readiness</p>
                    <p className="ml-4">– Westin SFO — December 10, 1:30–2:45 PM and 3:15–4:30 PM</p>
                  </div>
                  <div>
                    <p className="mb-1">• Workshop 4: From Idea to Prototype</p>
                    <p className="ml-4">– TripleRing, Newark — December 12, 10:30 AM–11:30 AM</p>
                  </div>
                  <div>
                    <p className="mb-1">• Workshop 5: From Prototype to Product</p>
                    <p className="ml-4">– TripleRing, Newark — December 12, 11:30 AM–12:30 PM</p>
                  </div>
                  <div>
                    <p className="mb-1">• Workshop 6: From Product to Market</p>
                    <p className="ml-4">– TripleRing, Newark — December 12, 1:30 PM–2:30 PM</p>
                  </div>
                </div>
                <p className="font-inter font-light text-sm md:text-base text-[#797B8E] leading-relaxed mb-2 mt-4">
                  Each workshop will host 90 participants.
                </p>
                <p className="font-inter font-light text-sm md:text-base text-[#797B8E] leading-relaxed mb-2">
                  Workshops 1-3 will be divided into three focused tracks:
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

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="workshop">Workshop *</Label>
                  <Controller
                    name="workshop"
                    control={control}
                    render={({ field }) => (
                      <Select 
                        onValueChange={(value) => {
                          field.onChange(value);
                          setSelectedWorkshop(value);
                        }} 
                        value={field.value}
                      >
                        <SelectTrigger id="workshop" className="rounded-none">
                          <SelectValue placeholder="Select a workshop" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="industry">Workshop 1 - Building Industry Partnerships</SelectItem>
                          <SelectItem value="academic">Workshop 2 – Advancing Academic Collaboration</SelectItem>
                          <SelectItem value="global">Workshop 3 - Global Innovation Readiness</SelectItem>
                          <SelectItem value="idea-to-prototype">Workshop 4 - From Idea to Prototype</SelectItem>
                          <SelectItem value="prototype-to-product">Workshop 5 - From Prototype to Product</SelectItem>
                          <SelectItem value="product-to-market">Workshop 6 - From Product to Market</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.workshop && (
                    <p className="text-sm text-red-600">{errors.workshop.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="track">Track *</Label>
                  <Controller
                    name="track"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger id="track" className="rounded-none">
                          <SelectValue placeholder="Select a track" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="life-sciences">Life Sciences</SelectItem>
                          <SelectItem value="deeptech">DeepTech</SelectItem>
                          <SelectItem value="energy">Energy & Sustainability</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.track && (
                    <p className="text-sm text-red-600">{errors.track.message}</p>
                  )}
                </div>

                {(selectedWorkshop === "industry" || selectedWorkshop === "academic") && (
                  <div className="space-y-3">
                    <Label>Location *</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Controller
                          name="locations.stanford"
                          control={control}
                          render={({ field }) => (
                            <Checkbox 
                              id="stanford" 
                              className="rounded-none"
                              checked={field.value}
                              onCheckedChange={(checked) => {
                                field.onChange(checked);
                              }}
                            />
                          )}
                        />
                        <label
                          htmlFor="stanford"
                          className="text-sm font-inter font-light text-[#797B8E] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Stanford University — December 9, 2:30–3:45 PM
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Controller
                          name="locations.berkeley"
                          control={control}
                          render={({ field }) => (
                            <Checkbox 
                              id="berkeley" 
                              className="rounded-none"
                              checked={field.value}
                              onCheckedChange={(checked) => {
                                field.onChange(checked);
                              }}
                            />
                          )}
                        />
                        <label
                          htmlFor="berkeley"
                          className="text-sm font-inter font-light text-[#797B8E] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          UC Berkeley — December 11, 1:15–2:45 PM
                        </label>
                      </div>
                    </div>
                    {errors.locations?.root && (
                      <p className="text-sm text-red-600">{errors.locations.root.message}</p>
                    )}
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input 
                    id="name" 
                    placeholder="Enter your name" 
                    className="rounded-none" 
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Enter your email" 
                    className="rounded-none"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn Profile *</Label>
                  <Input 
                    id="linkedin" 
                    placeholder="Enter your LinkedIn profile URL" 
                    className="rounded-none"
                    {...register("linkedin")}
                  />
                  {errors.linkedin && (
                    <p className="text-sm text-red-600">{errors.linkedin.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  className="bg-[#C70828] hover:bg-[#A80E34] text-white font-inter font-semibold text-sm uppercase px-6 py-3 rounded-none"
                >
                  Submit Application →
                </Button>
              </form>
            </>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default LeadSession;

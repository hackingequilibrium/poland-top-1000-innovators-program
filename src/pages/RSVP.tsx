import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import box1Icon from "@/assets/box1.png";
import box2Icon from "@/assets/box2.png";
import box3Icon from "@/assets/box3.png";
import box4Icon from "@/assets/box4.png";
import box5Icon from "@/assets/box5.png";
import box6Icon from "@/assets/box6.png";
import box7Icon from "@/assets/box7.png";
import box8Icon from "@/assets/box8.png";
import { supabase } from "@/integrations/supabase/client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const sectors = [
  "Space Engineering & Aerospace",
  "Biomedical Engineering & Healthcare",
  "Computer Science & AI",
  "Energy & Environmental Engineering",
  "Chip Technology & Data Centers",
  "Mechanical & Materials Engineering",
  "Civil Engineering & Infrastructure",
  "Humanities & Social Sciences",
];

const expertSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email").optional().or(z.literal("")),
  phone: z.string().optional(),
  linkedin: z.string().optional(),
  sector: z.string().min(1, "Sector is required"),
  warmIntro: z.boolean().default(false),
});

const formSchema = z.object({
  submitterName: z.string().trim().min(1, "Full name is required").max(100, "Name must be less than 100 characters"),
  submitterEmail: z.string().trim().email("Invalid email").max(255, "Email must be less than 255 characters"),
  experts: z.array(expertSchema).min(1, "At least one expert is required"),
});

type FormValues = z.infer<typeof formSchema>;

const RSVP = () => {
  const [experts, setExperts] = useState([0]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      submitterName: "",
      submitterEmail: "",
      experts: [
        {
          fullName: "",
          email: "",
          phone: "",
          linkedin: "",
          sector: "",
          warmIntro: false,
        },
      ],
    },
  });

  const addExpert = () => {
    const currentExperts = form.getValues("experts");
    form.setValue("experts", [
      ...currentExperts,
      {
        fullName: "",
        email: "",
        phone: "",
        linkedin: "",
        sector: "",
        warmIntro: false,
      },
    ]);
    setExperts([...experts, experts.length]);
  };

  const removeExpert = (indexToRemove: number) => {
    const currentExperts = form.getValues("experts");
    form.setValue("experts", currentExperts.filter((_, i) => i !== indexToRemove));
    setExperts(experts.filter((_, i) => i !== indexToRemove));
  };

  const onSubmit = async (data: FormValues) => {
    try {
      // Submit each expert recommendation
      const submissions = data.experts.map(expert => ({
        submitter_name: data.submitterName,
        submitter_email: data.submitterEmail,
        expert_full_name: expert.fullName,
        expert_email: expert.email || null,
        expert_phone: expert.phone || null,
        expert_linkedin: expert.linkedin || null,
        expert_sector: expert.sector,
        warm_intro: expert.warmIntro,
      }));

      const { error } = await supabase
        .from('expert_recommendations')
        .insert(submissions);

      if (error) {
        console.error('Error submitting recommendations:', error);
        return;
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting recommendations:', error);
    }
  };

  return (
    <main className="min-h-screen bg-[#0F1435] flex flex-col">
      <Header simplified />
      
      <div className="flex-grow pt-[120px] pb-[100px] px-8 lg:px-[100px]">
        <div className="bg-white max-w-4xl mx-auto">
          {isSubmitted ? (
            <div className="space-y-6 text-[#0F1435] py-[40px] pl-[50px] pr-[100px]">
              <h2 className="font-inter font-extrabold text-[28px] md:text-[32px] lg:text-[36px] text-[#0F1435] uppercase leading-tight">
                Thank you for your recommendations!
              </h2>
              
              <p className="font-inter font-light text-base md:text-lg text-[#797B8E] leading-relaxed">
                Our team will review your suggestions as we build out the expert network for the summit. If you have additional experts to propose later, feel free to submit the form again.
              </p>
              
              <p className="font-inter font-light text-base md:text-lg text-[#797B8E] leading-relaxed">
                We appreciate your support in helping make this a transformational week of collaboration.
              </p>
            </div>
          ) : (
            <div className="p-8 lg:p-12">
              <div className="space-y-6 text-[#0F1435]">
            <h2 className="font-inter font-extrabold text-lg md:text-xl lg:text-2xl text-[#0F1435] mb-6 uppercase">
              RSVP
            </h2>
            
            <p className="font-inter font-bold text-sm md:text-base text-[#797B8E] leading-relaxed mb-4">
              Confirm your attendance for the Dec 9–12 program and receive participant and project profiles.
            </p>
            
            <p className="font-inter font-light text-sm md:text-base text-[#797B8E] leading-relaxed mb-8">
              We're bringing 200 elite researchers from 12 Polish universities, each presenting breakthrough projects across eight critical sectors, for four intensive days in Silicon Valley.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px] mb-8">
              {[
                { icon: box1Icon, name: "Space Engineering", subtitle: "& Aerospace" },
                { icon: box2Icon, name: "Biomedical Engineering", subtitle: "& Healthcare" },
                { icon: box3Icon, name: "Computer Science", subtitle: "& AI" },
                { icon: box4Icon, name: "Energy & Environmental", subtitle: "Engineering" },
                { icon: box5Icon, name: "Chip Technology", subtitle: "& Data centers" },
                { icon: box6Icon, name: "Mechanical & Materials", subtitle: "Engineering" },
                { icon: box7Icon, name: "Civil Engineering", subtitle: "& Infrastructure" },
                { icon: box8Icon, name: "Humanities", subtitle: "& Social Sciences" },
              ].map((sector, idx) => (
                <div key={idx} className="bg-white pt-3 pb-4 flex flex-col items-center justify-start gap-1 border border-[#E5E7EB] min-h-[140px]">
                  <div className="h-[60px] flex items-center justify-center">
                    <img src={sector.icon} alt={sector.name} className="w-auto h-auto scale-[0.55]" />
                  </div>
                  <div className="font-inter font-light text-[10px] md:text-xs lg:text-sm text-[#0F1435] text-center">
                    {sector.name}<br />{sector.subtitle}
                  </div>
                </div>
              ))}
            </div>
            
            <p className="font-inter font-light text-sm md:text-base text-[#797B8E] leading-relaxed mb-4">
              The summit is designed to spark meaningful collaboration between these researchers and Silicon Valley professionals, entrepreneurs, investors, and academic partners. To build the strongest sector tracks and expert networks, we're gathering recommendations for subject-matter experts who should be included.
            </p>
            
            <p className="font-inter font-light text-sm md:text-base text-[#797B8E] leading-relaxed">
              Please submit one or multiple experts using the form below.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-8">
              {/* Submitter Information Section */}
              <div className="pb-8">
                <h3 className="font-inter font-bold text-base md:text-lg text-[#0F1435] mb-6 uppercase">
                  Your Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="submitterName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-inter text-sm text-[#0F1435]">
                          Full Name
                          <span className="text-red-600 ml-1">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter Full Name" 
                            {...field}
                            className="bg-white border-[#E5E7EB] rounded-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="submitterEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-inter text-sm text-[#0F1435]">
                          Email
                          <span className="text-red-600 ml-1">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="Enter Email Address" 
                            {...field}
                            className="bg-white border-[#E5E7EB] rounded-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {experts.map((expertIndex, index) => (
                <div key={expertIndex} className="border-t border-[#E5E7EB] pt-8 first:border-t-0 first:pt-0">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-inter font-bold text-base md:text-lg text-[#0F1435] uppercase">
                      Expert #{index + 1}
                      {index === 0 && <span className="text-red-600 ml-1">*</span>}
                    </h3>
                    {index > 0 && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => removeExpert(index)}
                        className="font-inter rounded-none text-red-600 border-red-600 hover:bg-red-600 hover:text-white"
                      >
                        Remove Expert
                      </Button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name={`experts.${index}.fullName`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-inter text-sm text-[#0F1435]">
                            Expert's Full Name
                            <span className="text-red-600 ml-1">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter Full Name" 
                              {...field}
                              className="bg-white border-[#E5E7EB] rounded-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name={`experts.${index}.email`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-inter text-sm text-[#0F1435]">
                            Expert's Email
                          </FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="Enter Email Address" 
                              {...field}
                              className="bg-white border-[#E5E7EB] rounded-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name={`experts.${index}.phone`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-inter text-sm text-[#0F1435]">
                            Expert's Phone Number
                          </FormLabel>
                          <FormControl>
                            <Input 
                              type="tel"
                              placeholder="Enter Phone Number" 
                              {...field}
                              className="bg-white border-[#E5E7EB] rounded-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name={`experts.${index}.linkedin`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-inter text-sm text-[#0F1435]">
                            Expert's LinkedIn
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter LinkedIn URL" 
                              {...field}
                              className="bg-white border-[#E5E7EB] rounded-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="space-y-6 mt-6">
                    <FormField
                      control={form.control}
                      name={`experts.${index}.sector`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-inter text-sm text-[#0F1435]">
                            Sector
                            <span className="text-red-600 ml-1">*</span>
                          </FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white border-[#E5E7EB] rounded-none">
                                <SelectValue placeholder="Select a Sector" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white z-50">
                              {sectors.map((sector) => (
                                <SelectItem key={sector} value={sector}>
                                  {sector}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name={`experts.${index}.warmIntro`}
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className="rounded-none"
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="font-inter text-sm text-[#0F1435]">
                                I'm willing to provide a warm introduction to this expert.
                              </FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex flex-col gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={addExpert}
                  className="font-inter font-bold rounded-none w-full md:w-auto bg-white text-[#0F1435] border-[#0F1435] hover:bg-[#0F1435] hover:text-white"
                >
                  + Add Another Expert
                </Button>

                <Button
                  type="submit"
                  className="font-inter font-bold rounded-none w-full md:w-auto bg-[#C70828] text-white hover:bg-[#A80E34]"
                >
                  Submit Recommendations
                </Button>
              </div>
            </form>
          </Form>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default RSVP;

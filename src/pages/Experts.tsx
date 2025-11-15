import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Rocket, Heart, Brain, Leaf, Cpu, Cog, Building, Users } from "lucide-react";
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
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

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
  warmIntroDetails: z.string().optional(),
});

const formSchema = z.object({
  experts: z.array(expertSchema).min(1, "At least one expert is required"),
});

type FormValues = z.infer<typeof formSchema>;

const Experts = () => {
  const [experts, setExperts] = useState([0]);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      experts: [
        {
          fullName: "",
          email: "",
          phone: "",
          linkedin: "",
          sector: "",
          warmIntro: false,
          warmIntroDetails: "",
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
        warmIntroDetails: "",
      },
    ]);
    setExperts([...experts, experts.length]);
  };

  const onSubmit = (data: FormValues) => {
    console.log(data);
    toast.success("Expert recommendations submitted successfully!");
  };

  return (
    <main className="min-h-screen bg-[#0F1435] flex flex-col">
      <Header simplified />
      
      <div className="flex-grow pt-[120px] pb-[100px] px-8 lg:px-[100px]">
        <div className="bg-white p-8 lg:p-12 max-w-4xl mx-auto">
          <div className="space-y-6 text-[#0F1435]">
            <h2 className="font-inter font-extrabold text-lg md:text-xl lg:text-2xl text-[#0F1435] mb-6 uppercase">
              Suggest Silicon Valley based subject matter experts<br className="hidden md:block" /> for the Top 1000 innovators summit
            </h2>
            
            <p className="font-inter font-bold text-sm md:text-base text-[#797B8E] leading-relaxed mb-4">
              December 9–12, 2025 · Stanford · UC Berkeley · Triple Ring Innovation Center
            </p>
            
            <p className="font-inter font-light text-sm md:text-base text-[#797B8E] leading-relaxed mb-8">
              We're bringing 200 elite researchers from 12 Polish universities, each presenting breakthrough projects across eight critical sectors, for four intensive days in Silicon Valley.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { icon: Rocket, name: "Space Engineering & Aerospace" },
                { icon: Heart, name: "Biomedical Engineering & Healthcare" },
                { icon: Brain, name: "Computer Science & AI" },
                { icon: Leaf, name: "Energy & Environmental Engineering" },
                { icon: Cpu, name: "Chip Technology & Data Centers" },
                { icon: Cog, name: "Mechanical & Materials Engineering" },
                { icon: Building, name: "Civil Engineering & Infrastructure" },
                { icon: Users, name: "Humanities & Social Sciences" },
              ].map((sector, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center p-4 border border-[#E5E7EB] bg-gray-50 rounded-lg min-h-[120px]">
                  <sector.icon className="w-8 h-8 mb-2 text-[#0F1435]" />
                  <p className="font-inter font-medium text-xs text-center text-[#0F1435]">{sector.name}</p>
                </div>
              ))}
            </div>
            
            <p className="font-inter font-light text-sm md:text-base text-[#797B8E] leading-relaxed mb-4">
              The summit is designed to spark meaningful collaboration between these researchers and Silicon Valley professionals, entrepreneurs, investors, and academic partners. To build the strongest sector tracks and expert networks, we're gathering recommendations for subject-matter experts who should be included.
            </p>
            
            <p className="font-inter font-light text-sm md:text-base text-[#797B8E] leading-relaxed">
              Please submit one or multiple experts using the fields below.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-8">
              {experts.map((expertIndex, index) => (
                <div key={expertIndex} className="border-t border-[#E5E7EB] pt-8 first:border-t-0 first:pt-0">
                  <h3 className="font-inter font-bold text-base md:text-lg text-[#0F1435] mb-6 uppercase">
                    Expert #{index + 1}
                    {index === 0 && <span className="text-red-600 ml-1">*</span>}
                  </h3>

                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name={`experts.${index}.fullName`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-inter text-sm text-[#0F1435]">
                            Expert's full name
                            <span className="text-red-600 ml-1">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter full name" 
                              {...field}
                              className="bg-white border-[#E5E7EB]"
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
                            Expert's email
                          </FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="Enter email address" 
                              {...field}
                              className="bg-white border-[#E5E7EB]"
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
                            Expert's phone number
                          </FormLabel>
                          <FormControl>
                            <Input 
                              type="tel"
                              placeholder="Enter phone number" 
                              {...field}
                              className="bg-white border-[#E5E7EB]"
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
                              className="bg-white border-[#E5E7EB]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

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
                              <SelectTrigger className="bg-white border-[#E5E7EB]">
                                <SelectValue placeholder="Select a sector" />
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

                      {form.watch(`experts.${index}.warmIntro`) && (
                        <FormField
                          control={form.control}
                          name={`experts.${index}.warmIntroDetails`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-inter text-sm text-[#0F1435]">
                                How do you know this expert?
                              </FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Describe your relationship with this expert" 
                                  {...field}
                                  className="bg-white border-[#E5E7EB] min-h-[100px]"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={addExpert}
                  className="font-inter"
                >
                  + Add another expert
                </Button>

                <Button
                  type="submit"
                  className="font-inter bg-[#0F1435] text-white hover:bg-[#1a1f4a]"
                >
                  Submit Recommendations
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default Experts;

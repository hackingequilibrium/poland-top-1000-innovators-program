import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
  "Space Engineering and Aerospace",
  "Biomedical Engineering and Healthcare",
  "Computer Science and AI",
  "Energy and Environmental Engineering",
  "Chip Technology and Data Centers",
  "Mechanical and Materials Engineering",
  "Civil Engineering and Infrastructure",
  "Humanities and Social Sciences",
];

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email").max(255, "Email must be less than 255 characters"),
  attendance: z.string().min(1, "Please select your attendance status"),
  interestedSectors: z.array(z.string()).min(1, "Please select at least one sector"),
});

type FormValues = z.infer<typeof formSchema>;

const RSVP = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      attendance: "",
      interestedSectors: [],
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const { error } = await supabase
        .from('rsvp_submissions')
        .insert({
          name: data.name,
          email: data.email,
          attendance: data.attendance,
          interested_sectors: data.interestedSectors,
        });

      if (error) {
        console.error('Error submitting RSVP:', error);
        return;
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting RSVP:', error);
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
                Thank you for your RSVP!
              </h2>
              
              <p className="font-inter font-light text-base md:text-lg text-[#797B8E] leading-relaxed">
                We've received your response and will send you the participant and project profiles shortly.
              </p>
              
              <p className="font-inter font-light text-base md:text-lg text-[#797B8E] leading-relaxed">
                Looking forward to seeing you at the summit!
              </p>
            </div>
          ) : (
            <div className="p-8 lg:p-12">
              <div className="space-y-6 text-[#0F1435]">
                <h2 className="font-inter font-extrabold text-lg md:text-xl lg:text-2xl text-[#0F1435] mb-2 uppercase">
                  RSVP
                </h2>
                
                <p className="font-inter font-normal text-sm md:text-base text-[#797B8E] leading-relaxed mb-4">
                  Confirm your attendance for the Dec 9–12 program and receive participant and project profiles.
                </p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-inter text-sm text-[#0F1435]">
                            Name
                            <span className="text-red-600 ml-1">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your name" 
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
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-inter text-sm text-[#0F1435]">
                            Email
                            <span className="text-red-600 ml-1">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="Enter your email" 
                              {...field}
                              className="bg-white border-[#E5E7EB] rounded-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="attendance"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="font-inter text-sm text-[#0F1435]">
                          Will you attend?
                          <span className="text-red-600 ml-1">*</span>
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="flex flex-col space-y-2"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="yes" />
                              </FormControl>
                              <FormLabel className="font-inter text-sm text-[#0F1435] font-normal">
                                Yes
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="maybe" />
                              </FormControl>
                              <FormLabel className="font-inter text-sm text-[#0F1435] font-normal">
                                Maybe
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="no" />
                              </FormControl>
                              <FormLabel className="font-inter text-sm text-[#0F1435] font-normal">
                                No
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="interestedSectors"
                    render={() => (
                      <FormItem>
                        <FormLabel className="font-inter text-sm text-[#0F1435]">
                          Sectors you're most interested in:
                          <span className="text-red-600 ml-1">*</span>
                        </FormLabel>
                        <div className="space-y-3 mt-2">
                          {sectors.map((sector) => (
                            <FormField
                              key={sector}
                              control={form.control}
                              name="interestedSectors"
                              render={({ field }) => {
                                return (
                                  <FormItem
                                    key={sector}
                                    className="flex flex-row items-start space-x-3 space-y-0"
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(sector)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, sector])
                                            : field.onChange(
                                                field.value?.filter(
                                                  (value) => value !== sector
                                                )
                                              )
                                        }}
                                        className="rounded-none"
                                      />
                                    </FormControl>
                                    <FormLabel className="font-inter text-sm text-[#0F1435] font-normal">
                                      {sector}
                                    </FormLabel>
                                  </FormItem>
                                )
                              }}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="font-inter font-bold rounded-none w-full md:w-auto bg-[#C70828] text-white hover:bg-[#A80E34]"
                  >
                    Submit RSVP
                  </Button>
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

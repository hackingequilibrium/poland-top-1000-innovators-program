import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { supabase } from "@/integrations/supabase/client";
import polsvLogo from "@/assets/polsv-logo-color-dark-bg.svg.asset.json";

const orgTypes = [
  "University / Research",
  "Corporate / Industry",
  "Government / Public",
  "Media",
  "Foundation / Program",
  "Other",
];

const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(150, "Name must be less than 150 characters"),
  organization: z
    .string()
    .trim()
    .min(1, "Organization is required")
    .max(200, "Must be less than 200 characters"),
  role: z
    .string()
    .trim()
    .max(150, "Must be less than 150 characters")
    .optional()
    .or(z.literal("")),
  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters"),
  orgType: z.string().min(1, "Please select an organization type"),
  areaOfInterest: z
    .string()
    .trim()
    .min(1, "Please describe your area of interest")
    .max(2000, "Must be less than 2000 characters"),
  website: z
    .string()
    .trim()
    .max(500, "Must be less than 500 characters")
    .optional()
    .or(z.literal("")),
  linkedin: z
    .string()
    .trim()
    .max(500, "Must be less than 500 characters")
    .optional()
    .or(z.literal("")),
});

type FormValues = z.infer<typeof formSchema>;

const Partner = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      organization: "",
      role: "",
      email: "",
      orgType: "",
      areaOfInterest: "",
      website: "",
      linkedin: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("partner_inquiries").insert({
        name: data.name,
        organization: data.organization,
        role: data.role || null,
        email: data.email,
        org_type: data.orgType,
        area_of_interest: data.areaOfInterest,
        website: data.website || null,
        linkedin: data.linkedin || null,
      });

      if (error) {
        console.error("Error submitting partner inquiry:", error);
        return;
      }

      supabase.functions
        .invoke("send-transactional-email", {
          body: {
            templateName: "partner-inquiry-admin",
            recipientEmail: "agata.braja@polsv.org",
            idempotencyKey: `partner-inquiry-${data.email}-${Date.now()}`,
            templateData: {
              name: data.name,
              organization: data.organization,
              role: data.role || undefined,
              email: data.email,
              orgType: data.orgType,
              areaOfInterest: data.areaOfInterest,
              website: data.website || undefined,
              linkedin: data.linkedin || undefined,
            },
          },
        })
        .catch((e) => console.error("Notification email failed:", e));

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting partner inquiry:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "input-autofill-dark h-12 rounded-none border-white/20 bg-white/5 text-white placeholder:text-white/40 focus-visible:ring-0 focus-visible:border-[#8FC7F5]";

  return (
    <div className="min-h-screen flex flex-col bg-[#002266] text-white font-sans">
      <header className="px-6 md:px-12 lg:px-[100px] pt-8">
        <div className="max-w-[900px] mx-auto flex flex-col items-center text-center gap-4">
          <Link to="/">
            <img src={polsvLogo.url} alt="PolSV" className="h-24 md:h-32 w-auto" />
          </Link>
          <h2 className="font-inter font-semibold text-sm md:text-lg uppercase tracking-tight text-white/80">
            Top 1000 Innovators of Poland in Silicon Valley
          </h2>
          <Link
            to="/"
            className="group inline-flex items-center gap-2 font-inter font-light text-sm text-white/60 hover:text-white transition-colors"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            Back to main site
          </Link>
        </div>
      </header>

      <main className="flex-1 px-6 md:px-12 lg:px-[100px] py-12 md:py-16">
        <div className="max-w-[640px] mx-auto">
          <h1 className="text-center font-inter font-extrabold text-3xl md:text-5xl uppercase tracking-tight mb-4">
            Partner With Us
          </h1>
          <p className="text-center font-inter font-light text-sm md:text-base text-white/80 mb-10 leading-relaxed max-w-[560px] mx-auto">
            We welcome partners who contribute to advancing research, commercialization, and
            transatlantic cooperation — from universities and companies to public institutions,
            media, and ecosystem organizations.
          </p>

          {isSubmitted ? (
            <div className="text-center border border-white/20 bg-white/5 rounded-none p-10">
              <h2 className="font-inter font-semibold text-2xl text-white mb-3">
                Thank you!
              </h2>
              <p className="font-inter font-light text-sm text-white/70 leading-relaxed">
                Your partnership inquiry has been received. We'll be in touch soon to explore how we
                can collaborate.
              </p>
              <Link
                to="/"
                className="mt-8 inline-flex items-center gap-2 font-inter font-medium text-sm text-[#8FC7F5] hover:text-white transition-colors"
              >
                <span className="transition-transform hover:-translate-x-1">←</span>
                Back to main site
              </Link>
            </div>
          ) : (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 border border-white/15 bg-white/[0.04] p-6 md:p-10 rounded-none"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-inter text-white/80 text-sm">
                          Name *
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className={inputClasses}
                            placeholder="Jane Doe"
                            autoComplete="off"
                          />
                        </FormControl>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="organization"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-inter text-white/80 text-sm">
                          Organization *
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className={inputClasses}
                            placeholder="Stanford University"
                            autoComplete="off"
                          />
                        </FormControl>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-inter text-white/80 text-sm">
                        Role / Title
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className={inputClasses}
                          placeholder="Director of Innovation"
                          autoComplete="off"
                        />
                      </FormControl>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-inter text-white/80 text-sm">
                        Email *
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          className={inputClasses}
                          placeholder="you@example.com"
                          autoComplete="off"
                        />
                      </FormControl>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="orgType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-inter text-white/80 text-sm">
                        Type of organization *
                      </FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="input-autofill-dark h-12 rounded-none border-white/20 bg-white/5 text-white focus:ring-0 focus:border-[#8FC7F5]">
                            <SelectValue placeholder="Select…" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="rounded-none border-white/20 bg-[#0B1A3F] text-white">
                          {orgTypes.map((t) => (
                            <SelectItem
                              key={t}
                              value={t}
                              className="rounded-none focus:bg-white/10 focus:text-white"
                            >
                              {t}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="areaOfInterest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-inter text-white/80 text-sm">
                        Area of interest *
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="input-autofill-dark rounded-none border-white/20 bg-white/5 text-white placeholder:text-white/40 focus-visible:ring-0 focus-visible:border-[#8FC7F5] min-h-[120px]"
                          placeholder="What kind of collaboration are you interested in?"
                        />
                      </FormControl>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />

                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-inter text-white/80 text-sm">
                          Website (optional)
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className={inputClasses}
                            placeholder="https://example.com"
                            autoComplete="off"
                          />
                        </FormControl>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="linkedin"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-inter text-white/80 text-sm">
                          LinkedIn (optional)
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className={inputClasses}
                            placeholder="linkedin.com/in/janedoe"
                            autoComplete="off"
                          />
                        </FormControl>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 font-inter font-semibold text-base text-white bg-[#3661F6] border border-[#3661F6] rounded-none transition-colors duration-300 hover:bg-[#2a4fd4] hover:border-[#2a4fd4] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting…" : "Submit Inquiry"}
                </button>
              </form>
            </Form>
          )}
        </div>
      </main>

      <footer className="px-6 md:px-12 lg:px-[100px] pb-10 text-[11px] text-white/30 tracking-wide">
        <Link to="/" className="hover:text-white transition-colors">
          Back to home
        </Link>
        <span className="mx-2">|</span>
        <a
          href="https://polsv.org/contact/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          Contact us
        </a>
      </footer>
    </div>
  );
};

export default Partner;

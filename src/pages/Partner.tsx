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
import programOverviewPdf from "@/assets/TOP_1000_Innovators_of_Poland_in_Silicon_Valley_2026.pdf.asset.json";
import sponsorshipPdf from "@/assets/TOP1000_Sponsorship_Packages_2026.pdf.asset.json";

const orgTypes = [
  "Corporate / Industry",
  "Investor / Venture Capital",
  "University / Research",
  "Government / Public Institution",
  "Foundation / Philanthropy",
  "Innovation Ecosystem Organization",
  "Media",
  "Other",
];

const areaOfInterestOptions = [
  "Biomed & Life Sciences",
  "Energy & Sustainability",
  "Space & Aviation",
  "Dual-Use Technologies",
  "AI / Cross-Sector",
  "General / Multiple Areas",
];

const collaborationTypeOptions = [
  "Sponsorship",
  "Strategic Partnership",
  "Program Collaboration",
  "Speaking / Thought Leadership",
  "Hosting / Event Collaboration",
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
  areaOfInterest: z.string().min(1, "Please select an area of interest"),
  collaborationType: z.string().min(1, "Please select a collaboration type"),
  details: z
    .string()
    .trim()
    .max(2000, "Must be less than 2000 characters")
    .optional()
    .or(z.literal("")),
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
      collaborationType: "",
      details: "",
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
        collaboration_type: data.collaborationType,
        details: data.details || null,
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
              collaborationType: data.collaborationType,
              details: data.details || undefined,
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

  const selectTriggerClasses =
    "input-autofill-dark h-12 rounded-none border-white/20 bg-white/5 text-white focus:ring-0 focus:border-[#8FC7F5]";

  const selectContentClasses =
    "rounded-none border-white/20 bg-[#0B1A3F] text-white";

  const selectItemClasses =
    "rounded-none focus:bg-white/10 focus:text-white";

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
        <div className="max-w-[720px] mx-auto">
          <h1 className="text-center font-inter font-extrabold text-3xl md:text-5xl uppercase tracking-tight mb-4">
            Partner With Us
          </h1>
          <p className="text-center font-inter font-light text-sm md:text-base text-white/80 mb-6 leading-relaxed max-w-[600px] mx-auto">
            Connect your organization with Poland’s leading innovators and the Silicon Valley ecosystem.
          </p>

          <div className="space-y-4 font-inter font-light text-sm md:text-base text-white/80 leading-relaxed mb-12">
            <p>
              TOP 1000 Innovators of Poland in Silicon Valley brings together Poland’s leading researchers,
              innovators, entrepreneurs, and business leaders with founders, investors, scientists, and
              technology executives shaping the global innovation economy.
            </p>
            <p>
              We invite companies, universities, foundations, public institutions, investors, and ecosystem
              organizations to partner with us in strengthening connections between Poland and Silicon Valley.
            </p>
            <p>
              Partnership opportunities are designed around visibility, access, strategic engagement, and
              meaningful participation in the program, with sponsorship opportunities ranging from Supporting
              Partner to Platinum Strategic Partner.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            <a
              href={programOverviewPdf.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-14 font-inter font-semibold text-sm md:text-base text-[#0B1A3F] bg-white border border-white rounded-none transition-colors duration-300 hover:bg-white/90"
            >
              Download Program Overview
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
            <a
              href={sponsorshipPdf.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-14 font-inter font-semibold text-sm md:text-base text-white bg-transparent border border-white rounded-none transition-colors duration-300 hover:bg-white/10"
            >
              Download Sponsorship Opportunities
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </div>


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
                          <SelectTrigger className={selectTriggerClasses}>
                            <SelectValue placeholder="Select…" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className={selectContentClasses}>
                          {orgTypes.map((t) => (
                            <SelectItem
                              key={t}
                              value={t}
                              className={selectItemClasses}
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
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className={selectTriggerClasses}>
                            <SelectValue placeholder="Select…" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className={selectContentClasses}>
                          {areaOfInterestOptions.map((t) => (
                            <SelectItem
                              key={t}
                              value={t}
                              className={selectItemClasses}
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
                  name="collaborationType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-inter text-white/80 text-sm">
                        What kind of collaboration are you interested in? *
                      </FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className={selectTriggerClasses}>
                            <SelectValue placeholder="Select…" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className={selectContentClasses}>
                          {collaborationTypeOptions.map((t) => (
                            <SelectItem
                              key={t}
                              value={t}
                              className={selectItemClasses}
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
                  name="details"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-inter text-white/80 text-sm">
                        Tell us more about your interest
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="input-autofill-dark rounded-none border-white/20 bg-white/5 text-white placeholder:text-white/40 focus-visible:ring-0 focus-visible:border-[#8FC7F5] min-h-[120px]"
                          placeholder="Share any details about your goals, timing, or questions."
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
        <Link to="/contact" className="hover:text-white transition-colors">
          Contact us
        </Link>
      </footer>
    </div>
  );
};

export default Partner;

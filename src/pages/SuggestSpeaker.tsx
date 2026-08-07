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

const focusAreas = [
  "Biomed & Life Sciences",
  "Energy & Sustainability",
  "Space & Avionics",
  "Dual-Use Technologies",
  "AI Across Every Sector",
  "Other",
];

const formSchema = z.object({
  speakerName: z
    .string()
    .trim()
    .min(1, "Speaker name is required")
    .max(150, "Name must be less than 150 characters"),
  speakerEmail: z
    .string()
    .trim()
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters")
    .optional()
    .or(z.literal("")),
  speakerTitle: z
    .string()
    .trim()
    .max(150, "Must be less than 150 characters")
    .optional()
    .or(z.literal("")),
  speakerOrganization: z
    .string()
    .trim()
    .max(150, "Must be less than 150 characters")
    .optional()
    .or(z.literal("")),
  speakerLinkedin: z
    .string()
    .trim()
    .max(255, "Must be less than 255 characters")
    .optional()
    .or(z.literal("")),
  focusArea: z.string().min(1, "Please select a focus area"),
  whySpeaker: z
    .string()
    .trim()
    .max(1500, "Must be less than 1500 characters")
    .optional()
    .or(z.literal("")),
  submitterName: z
    .string()
    .trim()
    .min(1, "Your name is required")
    .max(150, "Name must be less than 150 characters"),
  submitterEmail: z
    .string()
    .trim()
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const SuggestSpeaker = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      speakerName: "",
      speakerEmail: "",
      speakerTitle: "",
      speakerOrganization: "",
      speakerLinkedin: "",
      focusArea: "",
      whySpeaker: "",
      submitterName: "",
      submitterEmail: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("speaker_suggestions").insert({
        speaker_name: data.speakerName,
        speaker_email: data.speakerEmail || null,
        speaker_title: data.speakerTitle || null,
        speaker_organization: data.speakerOrganization || null,
        speaker_linkedin: data.speakerLinkedin || null,
        focus_area: data.focusArea,
        why_speaker: data.whySpeaker || null,
        submitter_name: data.submitterName,
        submitter_email: data.submitterEmail,
      });

      if (error) {
        console.error("Error submitting speaker suggestion:", error);
        return;
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting speaker suggestion:", error);
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
          <h1 className="text-center font-inter font-extrabold text-3xl md:text-5xl uppercase tracking-tight mb-3">
            Suggest a Speaker
          </h1>
          <p className="text-center font-inter font-light text-sm md:text-base text-white/80 mb-2">
            Know a leader in science, policy, industry, or innovation who should speak at Summit II?
            Tell us about them.
          </p>
          <p className="text-center font-inter font-light text-sm text-[#8FC7F5] mb-10">
            It's perfectly okay to nominate yourself.
          </p>

          {isSubmitted ? (
            <div className="text-center border border-white/20 bg-white/5 rounded-none p-10">
              <h2 className="font-inter font-semibold text-2xl text-white mb-3">
                Thank you!
              </h2>
              <p className="font-inter font-light text-sm text-white/70 leading-relaxed">
                Your speaker suggestion has been received. We appreciate your contribution to the
                Summit II program.
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
                <div className="space-y-1">
                  <p className="font-inter font-semibold text-sm uppercase tracking-widest text-[#8FC7F5]">
                    About the speaker
                  </p>
                </div>

                <FormField
                  control={form.control}
                  name="speakerName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-inter text-white/80 text-sm">
                        Speaker name *
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

                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="speakerTitle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-inter text-white/80 text-sm">
                          Title / role
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className={inputClasses}
                            placeholder="Professor, CEO…"
                            autoComplete="off"
                          />
                        </FormControl>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="speakerOrganization"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-inter text-white/80 text-sm">
                          Organization
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

                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="speakerEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-inter text-white/80 text-sm">
                          Speaker email
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            className={inputClasses}
                            placeholder="jane@example.com"
                            autoComplete="off"
                          />
                        </FormControl>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="speakerLinkedin"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-inter text-white/80 text-sm">
                          LinkedIn profile
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

                <FormField
                  control={form.control}
                  name="focusArea"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-inter text-white/80 text-sm">
                        Focus area *
                      </FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="input-autofill-dark h-12 rounded-none border-white/20 bg-white/5 text-white focus:ring-0 focus:border-[#8FC7F5]">
                            <SelectValue placeholder="Select a focus area" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="rounded-none border-white/20 bg-[#0B1A3F] text-white">
                          {focusAreas.map((a) => (
                            <SelectItem
                              key={a}
                              value={a}
                              className="rounded-none focus:bg-white/10 focus:text-white"
                            >
                              {a}
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
                  name="whySpeaker"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-inter text-white/80 text-sm">
                        Why this speaker?
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="input-autofill-dark rounded-none border-white/20 bg-white/5 text-white placeholder:text-white/40 focus-visible:ring-0 focus-visible:border-[#8FC7F5] min-h-[120px]"
                          placeholder="Briefly describe their expertise and why they'd be a great fit for Summit II."
                        />
                      </FormControl>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />

                <div className="pt-2 space-y-6">
                  <p className="font-inter font-semibold text-sm uppercase tracking-widest text-[#8FC7F5]">
                    About you
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="submitterName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-inter text-white/80 text-sm">
                            Your name *
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className={inputClasses}
                              placeholder="Your name"
                              autoComplete="name"
                            />
                          </FormControl>
                          <FormMessage className="text-red-300" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="submitterEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-inter text-white/80 text-sm">
                            Your email *
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              className={inputClasses}
                              placeholder="you@example.com"
                              autoComplete="email"
                            />
                          </FormControl>
                          <FormMessage className="text-red-300" />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 font-inter font-semibold text-base text-white bg-[#3661F6] border border-[#3661F6] rounded-none transition-colors duration-300 hover:bg-[#2a4fd4] hover:border-[#2a4fd4] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting…" : "Submit Suggestion"}
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

export default SuggestSpeaker;

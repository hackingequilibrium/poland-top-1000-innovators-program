import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
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

const consentChoice = z.enum(["consent", "do_not_consent"], {
  required_error: "Please select an option",
});
const posterChoice = z.enum(["consent", "do_not_consent", "not_applicable"], {
  required_error: "Please select an option",
});

const formSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, "Full name is required")
    .max(150, "Name must be less than 150 characters"),
  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters"),
  organization: z
    .string()
    .trim()
    .min(1, "Organization is required")
    .max(150, "Organization must be less than 150 characters"),
  photoVideoConsent: consentChoice,
  workshopPhotoConsent: consentChoice,
  posterConsent: posterChoice,
  acknowledged: z
    .boolean()
    .refine((v) => v === true, "Please confirm you have read and understood the above"),
});

type FormValues = z.infer<typeof formSchema>;

const RadioOption = ({
  name,
  value,
  label,
  checked,
  onChange,
}: {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (v: string) => void;
}) => (
  <label className="flex items-center gap-3 font-inter font-light text-sm text-white/85 cursor-pointer">
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={() => onChange(value)}
      className="h-4 w-4 shrink-0 accent-[#8FC7F5]"
    />
    {label}
  </label>
);

const Consent = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      organization: "",
      acknowledged: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("consent_submissions").insert({
        full_name: data.fullName,
        email: data.email,
        organization: data.organization,
        photo_video_consent: data.photoVideoConsent,
        workshop_photo_consent: data.workshopPhotoConsent,
        poster_consent: data.posterConsent,
        acknowledged: data.acknowledged,
      });

      if (error) {
        console.error("Error submitting consent form:", error);
        return;
      }

      const notifyBody = {
        templateName: "consent-submission-admin",
        idempotencyKey: `consent-submission-${data.email}`,
        templateData: {
          fullName: data.fullName,
          email: data.email,
          organization: data.organization,
          photoVideoConsent: data.photoVideoConsent,
          workshopPhotoConsent: data.workshopPhotoConsent,
          posterConsent: data.posterConsent,
        },
      };
      ["info@polsv.org", "agata.braja@polsv.org", "kamila.krawiec@polsv.org"].forEach(
        (recipientEmail, i) =>
          supabase.functions
            .invoke("send-transactional-email", {
              body: {
                ...notifyBody,
                recipientEmail,
                idempotencyKey: `${notifyBody.idempotencyKey}-${i}`,
              },
            })
            .catch((e) => console.error("Notification email failed:", e))
      );

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting consent form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "input-autofill-dark h-12 rounded-none border-white/20 bg-white/5 text-white placeholder:text-white/40 focus-visible:ring-0 focus-visible:border-[#8FC7F5]";

  const sectionTitle =
    "font-inter font-semibold text-sm uppercase tracking-widest text-[#8FC7F5]";
  const bodyText = "font-inter font-light text-sm text-white/80 leading-relaxed";

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
          <h1 className="text-center font-inter font-extrabold text-3xl md:text-4xl uppercase tracking-tight mb-3">
            Media and Poster Publication Consent Form
          </h1>
          <p className="text-center font-inter font-light text-sm text-[#8FC7F5] mb-10">
            December 14–17, 2026 | San Francisco Bay Area, California
          </p>

          {isSubmitted ? (
            <div className="text-center border border-white/20 bg-white/5 rounded-none p-10">
              <h2 className="font-inter font-semibold text-2xl text-white mb-3">
                Thank you!
              </h2>
              <p className="font-inter font-light text-sm text-white/70 leading-relaxed">
                Your consent preferences have been recorded. We'll see you at the Summit,
                December 14–17, 2026.
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
                className="space-y-10 border border-white/15 bg-white/[0.04] p-6 md:p-10 rounded-none"
              >
                <div className="space-y-4">
                  <p className={bodyText}>
                    The TOP 1000 Innovators of Poland in Silicon Valley Summit is organized by the
                    Poland in Silicon Valley Center for Science, Innovation, and Entrepreneurship
                    (PolSV).
                  </p>
                  <p className={bodyText}>
                    During the Summit, photographs and video recordings may be taken to document
                    the event and communicate its activities and outcomes. Workshop facilitators
                    may also photograph their sessions and share selected images through their
                    professional or social media channels.
                  </p>
                  <p className={bodyText}>
                    PolSV also intends to publish posters presented during the Summit to showcase
                    participants' research and innovation projects.
                  </p>
                  <p className={bodyText}>
                    Please review the following permissions and indicate your preferences.
                  </p>
                </div>

                <div className="space-y-6">
                  <p className={sectionTitle}>1. Participant Information</p>

                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-inter text-white/80 text-sm">
                          Full name *
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className={inputClasses}
                            placeholder="Jane Doe"
                            autoComplete="name"
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
                          Email address *
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

                  <FormField
                    control={form.control}
                    name="organization"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-inter text-white/80 text-sm">
                          Organization / Institution *
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className={inputClasses}
                            placeholder="University or company"
                            autoComplete="organization"
                          />
                        </FormControl>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="space-y-4">
                  <p className={sectionTitle}>2. Photography and Video Consent</p>
                  <p className={bodyText}>
                    I authorize PolSV to photograph and record me during the Summit and to use
                    these materials for event documentation, communications, and promotional
                    purposes, including websites, social media, newsletters, reports, and
                    materials promoting future PolSV activities.
                  </p>
                  <FormField
                    control={form.control}
                    name="photoVideoConsent"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="space-y-3">
                            <RadioOption
                              name="photoVideoConsent"
                              value="consent"
                              label="I consent."
                              checked={field.value === "consent"}
                              onChange={field.onChange}
                            />
                            <RadioOption
                              name="photoVideoConsent"
                              value="do_not_consent"
                              label="I do not consent."
                              checked={field.value === "do_not_consent"}
                              onChange={field.onChange}
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="space-y-4">
                  <p className={sectionTitle}>
                    3. Workshop Photography and Facilitator Publications
                  </p>
                  <p className={bodyText}>
                    I authorize workshop facilitators to take photographs during sessions in which
                    I participate and to publish images featuring me on their professional
                    websites or social media channels in connection with the Summit.
                  </p>
                  <FormField
                    control={form.control}
                    name="workshopPhotoConsent"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="space-y-3">
                            <RadioOption
                              name="workshopPhotoConsent"
                              value="consent"
                              label="I consent."
                              checked={field.value === "consent"}
                              onChange={field.onChange}
                            />
                            <RadioOption
                              name="workshopPhotoConsent"
                              value="do_not_consent"
                              label="I do not consent."
                              checked={field.value === "do_not_consent"}
                              onChange={field.onChange}
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="space-y-4">
                  <p className={sectionTitle}>4. Poster Publication Consent</p>
                  <p className={bodyText}>
                    I authorize PolSV to publish and share the poster I submit or present during
                    the Summit, including on its website, social media, and other event-related
                    communication channels.
                  </p>
                  <p className={bodyText}>
                    I understand that publication constitutes public disclosure. I am responsible
                    for ensuring that my poster does not contain confidential information,
                    unpublished results requiring protection, or material that I am not authorized
                    to disclose.
                  </p>
                  <FormField
                    control={form.control}
                    name="posterConsent"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="space-y-3">
                            <RadioOption
                              name="posterConsent"
                              value="consent"
                              label="I consent to publication of my poster."
                              checked={field.value === "consent"}
                              onChange={field.onChange}
                            />
                            <RadioOption
                              name="posterConsent"
                              value="do_not_consent"
                              label="I do not consent to publication of my poster."
                              checked={field.value === "do_not_consent"}
                              onChange={field.onChange}
                            />
                            <RadioOption
                              name="posterConsent"
                              value="not_applicable"
                              label="Not applicable. I am not presenting a poster."
                              checked={field.value === "not_applicable"}
                              onChange={field.onChange}
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="space-y-4">
                  <p className={sectionTitle}>5. Acknowledgment</p>
                  <p className={bodyText}>I understand that:</p>
                  <ul className="space-y-2">
                    {[
                      "Participation in the Summit does not require granting optional media or publication consent.",
                      "Materials published online may be viewed, downloaded, or shared by third parties.",
                      "I may withdraw my consent for future use by contacting info@polsv.org. Withdrawal will not affect uses made before the request or copies already distributed beyond PolSV's control.",
                      "PolSV will make reasonable efforts to respect my choices regarding identifiable photographs and recordings.",
                    ].map((item) => (
                      <li key={item} className={`${bodyText} flex gap-3`}>
                        <span className="shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <FormField
                    control={form.control}
                    name="acknowledged"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <label className="flex items-start gap-3 font-inter font-light text-sm text-white/85 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={field.value}
                              onChange={(e) => field.onChange(e.target.checked)}
                              className="mt-0.5 h-4 w-4 shrink-0 accent-[#8FC7F5]"
                            />
                            I have read and understood the information above and have indicated my
                            consent preferences. *
                          </label>
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
                  {isSubmitting ? "Submitting…" : "Submit"}
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

export default Consent;

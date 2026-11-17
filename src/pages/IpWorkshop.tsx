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

const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  surname: z
    .string()
    .trim()
    .min(1, "Surname is required")
    .max(100, "Surname must be less than 100 characters"),
  organization: z
    .string()
    .trim()
    .min(1, "Organization is required")
    .max(150, "Organization must be less than 150 characters"),
  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters"),
  mobile: z
    .string()
    .trim()
    .max(40, "Mobile must be less than 40 characters")
    .optional()
    .or(z.literal("")),
});

type FormValues = z.infer<typeof formSchema>;

const IpWorkshop = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      surname: "",
      organization: "",
      email: "",
      mobile: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("ip_workshop_signups").insert({
        name: data.name,
        surname: data.surname,
        organization: data.organization,
        email: data.email,
        mobile: data.mobile || null,
      });

      if (error) {
        console.error("Error submitting IP workshop signup:", error);
        return;
      }

      const notifyBody = {
        templateName: "ip-workshop-signup-admin",
        idempotencyKey: `ip-workshop-signup-${data.email}`,
        templateData: {
          name: data.name,
          surname: data.surname,
          organization: data.organization,
          email: data.email,
          mobile: data.mobile || undefined,
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
      console.error("Error submitting IP workshop signup:", error);
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
            IP Workshop Sign-Up
          </h1>
          <p className="text-center font-inter font-light text-sm md:text-base text-white/80 mb-0.5 leading-snug">
            Intellectual Property: From Disclosure to Protection — with Soody Tronson
          </p>
          <p className="text-center font-inter font-light text-sm text-[#8FC7F5] mb-10">
            Tuesday, December 15, 2026 · Stanford University
          </p>

          {isSubmitted ? (
            <div className="text-center border border-white/20 bg-white/5 rounded-none p-10">
              <h2 className="font-inter font-semibold text-2xl text-white mb-3">
                You're signed up!
              </h2>
              <p className="font-inter font-light text-sm text-white/70 leading-relaxed">
                Thank you for registering for the IP workshop with Soody Tronson. We'll see you
                on Tuesday, December 15 at Stanford University.
              </p>
              <Link
                to="/agenda"
                className="mt-8 inline-flex items-center gap-2 font-inter font-medium text-sm text-[#8FC7F5] hover:text-white transition-colors"
              >
                View the full agenda
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
                            placeholder="Jane"
                            autoComplete="given-name"
                          />
                        </FormControl>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="surname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-inter text-white/80 text-sm">
                          Surname *
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className={inputClasses}
                            placeholder="Doe"
                            autoComplete="family-name"
                          />
                        </FormControl>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />
                </div>

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
                          placeholder="University or company"
                          autoComplete="organization"
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
                          autoComplete="email"
                        />
                      </FormControl>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-inter text-white/80 text-sm">
                        Mobile (optional)
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="tel"
                          className={inputClasses}
                          placeholder="+1 555 000 0000"
                          autoComplete="tel"
                        />
                      </FormControl>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 font-inter font-semibold text-base text-white bg-[#3661F6] border border-[#3661F6] rounded-none transition-colors duration-300 hover:bg-[#2a4fd4] hover:border-[#2a4fd4] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting…" : "Sign Up for the Workshop"}
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

export default IpWorkshop;

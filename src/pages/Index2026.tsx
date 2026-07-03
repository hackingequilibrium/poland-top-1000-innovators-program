import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import polsvLogo from "@/assets/polsv-logo-color-dark-bg.svg.asset.json";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const EVENT_DATE = new Date("2026-11-09T00:00:00-08:00").getTime();

type Interest = "researcher" | "company" | "university" | "other";

const sectors = [
  "Life Sciences & Biomed",
  "Space & Avionics",
  "Dual-Use Technologies",
  "Energy & Sustainability",
  "Artificial Intelligence",
];

function useCountdown(target: number) {
  const compute = () => {
    const diff = Math.max(0, target - Date.now());
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
  };
  const [time, setTime] = useState(compute());
  useEffect(() => {
    const id = setInterval(() => setTime(compute()), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);
  return time;
}

const pad = (n: number) => n.toString().padStart(2, "0");

const Index2026 = () => {
  const { days, hours, minutes, seconds } = useCountdown(EVENT_DATE);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState<Interest>("researcher");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      toast.error("Please enter your name and email.");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase
      .from("waitlist_2026" as any)
      .insert({ name: name.trim(), email: email.trim(), interest });
    setSubmitting(false);
    if (error) {
      toast.error("Something went wrong. Please try again.");
      return;
    }
    setSubmitted(true);
    setName("");
    setEmail("");
    toast.success("You're on the waitlist. Talk soon.");
  };

  const countdownCells = [
    { label: "DAYS", value: days },
    { label: "HOURS", value: pad(hours) },
    { label: "MIN", value: pad(minutes) },
    { label: "SEC", value: pad(seconds) },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-[#0a0a1a] font-sans text-white relative overflow-hidden">
      {/* Left Panel: Cinematic Branding */}
        <div className="relative w-full lg:w-1/2 flex flex-col justify-between p-10 md:p-16 overflow-hidden">
          {/* Aurora background elements */}
          <div
            aria-hidden
            className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] bg-[#4f46e5]/20 blur-[120px] rounded-full"
          />
          <div
            aria-hidden
            className="absolute bottom-[-5%] right-[-5%] w-[60%] h-[60%] bg-[#c4b5fd]/10 blur-[100px] rounded-full"
          />

          {/* Logo */}
          <a
            href="https://www.polsv.org"
            className="relative z-10 flex items-center gap-4"
          >
            <img
              src={polsvLogo.url}
              alt="PolSV"
              className="h-24 md:h-32 lg:h-40 w-auto"
            />
          </a>

          {/* Main visual text */}
          <div className="relative z-10 mt-16 lg:mt-0">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#C70828]" />
              <span className="text-[#c4b5fd] text-sm font-semibold tracking-[0.2em] uppercase">
                Save the Date
              </span>
            </div>

            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[0.9] tracking-tighter">
              TOP 1000
            </h1>
            <p className="mt-4 text-lg md:text-xl lg:text-2xl font-light text-white/80 max-w-md leading-relaxed">
              Innovators of Poland in{" "}
              <span className="whitespace-nowrap">Silicon Valley</span>
            </p>

            <div className="mt-5 inline-flex items-center gap-3">
              <span className="inline-block h-px w-6 bg-[#C70828]" />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-[#ff9aab] font-medium">
                Second Cohort
              </span>
              <span className="inline-block h-px w-6 bg-[#C70828]" />
            </div>

            <p className="mt-6 font-display text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-white">
              9—12 November 2026
            </p>
            <p className="mt-3 text-[10px] md:text-xs uppercase tracking-[0.35em] text-white/60">
              Stanford &nbsp;·&nbsp; Berkeley &nbsp;·&nbsp; UC San Francisco
              &nbsp;·&nbsp;{" "}
              <span className="whitespace-nowrap">Silicon Valley</span>
            </p>
          </div>

          {/* Archive link */}
          <div className="relative z-10 mt-12 lg:mt-0">
            <Link
              to="/2025"
              className="group flex items-center gap-3 text-white/40 hover:text-white transition-colors duration-300"
            >
              <span className="text-xs font-semibold tracking-widest uppercase">
                See the 2025 inaugural summit
              </span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right Panel: Info & Interaction */}
        <div className="w-full lg:w-1/2 min-h-screen bg-[#1a1a2e]/30 backdrop-blur-xl p-10 md:p-16 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/5">
          {/* Countdown */}
          <div className="mb-12">
            <h3 className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase mb-8">
              Event Countdown
            </h3>
            <div className="grid grid-cols-4 gap-3 md:gap-4">
              {countdownCells.map((c) => (
                <div key={c.label} className="flex flex-col">
                  <span className="font-display text-4xl md:text-5xl font-bold text-white tabular-nums">
                    {c.value}
                  </span>
                  <span className="text-white/30 text-[10px] uppercase tracking-widest mt-2">
                    {c.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Sectors */}
          <div className="mb-12">
            <h3 className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase mb-6">
              Impact Sectors
            </h3>
            <div className="flex flex-wrap gap-2">
              {sectors.map((s) => (
                <span
                  key={s}
                  className="rounded-full px-4 py-2 text-xs font-medium backdrop-blur-sm border border-white/10 bg-white/5 text-white/80"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Waitlist */}
          <div className="relative">
            <h3 className="font-display text-2xl mb-2">Join the waitlist</h3>
            <p className="text-white/50 text-sm mb-6">
              Be first to hear when applications and the full program open.
            </p>

            {submitted ? (
              <div className="text-white/80 text-sm">
                You're on the list. We'll be in touch.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="relative flex-grow group">
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full name"
                      className="w-full bg-[#0a0a1a] border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#4f46e5] transition-all"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#4f46e5] to-[#c4b5fd] opacity-0 group-focus-within:opacity-10 -z-10 blur-md transition-opacity" />
                  </div>
                  <div className="relative flex-grow group">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email address"
                      className="w-full bg-[#0a0a1a] border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#4f46e5] transition-all"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#4f46e5] to-[#c4b5fd] opacity-0 group-focus-within:opacity-10 -z-10 blur-md transition-opacity" />
                  </div>
                </div>

                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-white/50 mb-2">
                    I'm interested as
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {(
                      [
                        { v: "researcher", l: "Researcher" },
                        { v: "company", l: "Company" },
                        { v: "university", l: "University" },
                        { v: "other", l: "Other" },
                      ] as { v: Interest; l: string }[]
                    ).map((opt) => (
                      <button
                        type="button"
                        key={opt.v}
                        onClick={() => setInterest(opt.v)}
                        className={`text-xs rounded-full px-2.5 py-1.5 border transition-colors ${
                          interest === opt.v
                            ? "bg-[#4f46e5] border-[#4f46e5] text-white"
                            : "bg-white/[0.04] border-white/10 text-white/70 hover:text-white hover:border-white/30"
                        }`}
                      >
                        {opt.l}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#C70828] hover:bg-[#a30622] text-white text-sm font-semibold rounded-xl px-4 py-3.5 transition-all shadow-[0_0_20px_rgba(199,8,40,0.3)] active:scale-95 disabled:opacity-60"
                >
                  {submitting ? "Joining…" : "Join the waitlist"}
                </button>
              </form>
            )}
          </div>

          {/* Footer note */}
          <div className="mt-12 text-[10px] text-white/20 uppercase tracking-widest text-center lg:text-left">
            Organized by the Poland in Silicon Valley Center for Science,
            Innovation, and Entrepreneurship (PolSV).
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index2026;

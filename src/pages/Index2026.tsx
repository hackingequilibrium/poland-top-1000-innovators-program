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
    <div className="min-h-screen text-white relative overflow-hidden bg-[#05070f] font-sans antialiased flex flex-col">
      {/* Gradient wash */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 800px at 15% 10%, rgba(56,110,255,0.35), transparent 60%), radial-gradient(900px 700px at 85% 20%, rgba(199,8,40,0.22), transparent 60%), radial-gradient(1000px 900px at 50% 100%, rgba(30,80,200,0.35), transparent 60%), linear-gradient(180deg, #030512 0%, #060b22 40%, #0a1330 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />

      {/* Nav */}
      <header className="max-w-7xl w-full mx-auto px-6 pt-5 md:pt-6 flex items-center justify-between">
        <a href="https://www.polsv.org" className="flex items-center gap-3">
          <img src={polsvLogo.url} alt="PolSV" className="h-10 md:h-12 w-auto" />
        </a>
        <div className="inline-flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/60 border border-white/15 rounded-full px-3 py-1.5">
          Save the Date
        </div>
      </header>

      {/* Above-the-fold: hero + countdown + waitlist */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-6 md:py-8 grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-14 items-center">
        {/* Left: hero copy */}
        <div className="text-center lg:text-left">
          <h1 className="font-display leading-[0.88] tracking-[-0.035em]">
            <span className="block text-[15vw] sm:text-6xl md:text-7xl lg:text-[7.5rem] font-medium text-white">
              TOP 1000
            </span>
            <span className="block mt-3 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#7fb0ff] via-white to-[#7fb0ff]">
              Innovators of Poland in Silicon Valley
            </span>
          </h1>

          <div className="mt-5 inline-flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-[#C70828]" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-[#ff6b81] font-medium">
              Second Cohort
            </span>
            <span className="inline-block h-px w-8 bg-[#C70828]" />
          </div>

          <p className="mt-5 font-display text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-white">
            9—11 November 2026
          </p>
          <p className="mt-3 text-[10px] md:text-xs uppercase tracking-[0.35em] text-white/60">
            Stanford &nbsp;·&nbsp; Berkeley &nbsp;·&nbsp; UC San Francisco &nbsp;·&nbsp; Silicon Valley
          </p>

          {/* Sector pills — inline, quiet */}
          <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-2">
            {sectors.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-[11px] md:text-xs text-white/75"
              >
                {s}
              </span>
            ))}
            <span className="rounded-full border border-[#C70828]/40 bg-[#C70828]/10 px-3 py-1 text-[11px] md:text-xs text-[#ff9aab]">
              AI — connective layer
            </span>
          </div>
        </div>

        {/* Right: countdown + waitlist */}
        <div className="w-full max-w-md mx-auto lg:max-w-none space-y-5">
          {/* Countdown */}
          <div className="grid grid-cols-4 gap-2 md:gap-3">
            {countdownCells.map((c) => (
              <div
                key={c.label}
                className="rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-sm py-3 md:py-4 text-center"
              >
                <div className="font-display text-2xl md:text-4xl font-light tabular-nums tracking-tight text-white">
                  {c.value}
                </div>
                <div className="mt-1 text-[9px] md:text-[10px] tracking-[0.35em] text-white/50">
                  {c.label}
                </div>
              </div>
            ))}
          </div>

          {/* Waitlist */}
          <div className="rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md p-5 md:p-6">
            <h2 className="font-display text-xl md:text-2xl font-medium tracking-tight">
              Join the waitlist
            </h2>
            <p className="mt-1 text-white/60 text-xs md:text-sm">
              Be first to hear when applications and the full program open.
            </p>

            {submitted ? (
              <div className="mt-5 text-white/80 text-sm">
                You're on the list. We'll be in touch.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name"
                    className="w-full bg-white/[0.06] border border-white/15 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#7fb0ff] transition-colors"
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="w-full bg-white/[0.06] border border-white/15 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#7fb0ff] transition-colors"
                  />
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
                            ? "bg-[#C70828] border-[#C70828] text-white"
                            : "bg-white/[0.04] border-white/15 text-white/70 hover:text-white hover:border-white/30"
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
                  className="w-full bg-white text-[#05070f] text-sm font-medium rounded-lg px-4 py-2.5 hover:bg-white/90 transition-colors disabled:opacity-60"
                >
                  {submitting ? "Joining…" : "Join the waitlist"}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <div className="text-center sm:text-left">
            Organized by the Poland in Silicon Valley Center for Science,
            Innovation, and Entrepreneurship (PolSV).
          </div>
          <Link
            to="/2025"
            className="text-white/70 hover:text-white transition-colors whitespace-nowrap"
          >
            See the 2025 inaugural summit →
          </Link>
        </div>
      </footer>
    </div>

  );
};

export default Index2026;

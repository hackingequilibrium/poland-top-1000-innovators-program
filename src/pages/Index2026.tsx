import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import bokehVideo from "@/assets/bokeh-blue-hero.mp4.asset.json";


const EVENT_DATE = new Date("2026-11-09T00:00:00-08:00").getTime();



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
      .insert({ name: name.trim(), email: email.trim() });
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
    <div className="min-h-screen w-full flex flex-col lg:flex-row font-sans text-white relative overflow-hidden bg-black">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={bokehVideo.url} type="video/mp4" />
      </video>

      {/* Tinted overlay — dark enough for readability, light enough to let the bokeh glow through */}
      <div className="absolute inset-0 bg-[#0a0a1a]/35 z-10" />

      {/* Soft vignette that draws the eye toward the center */}
      <div className="absolute inset-0 bg-radial-gradient z-10 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 40%, transparent 0%, #0a0a1a 85%)' }} />

      {/* Left Panel: Cinematic Branding */}
        <div className="relative z-20 w-full lg:w-1/2 flex flex-col justify-start p-10 md:p-16 overflow-hidden">

          <a
            href="https://www.polsv.org"
            className="relative z-10 flex items-center gap-4"
          >
            <img
              src="/assets/polsv-logo-color-dark-bg.svg"
              alt="PolSV"
              className="h-20 md:h-24 lg:h-28 w-auto"
            />
          </a>

          {/* Main visual text */}
          <div className="relative z-10 mt-8 lg:mt-10">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-white text-sm font-thin tracking-[0.2em] uppercase">
                Save the Date
              </span>
            </div>

            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tighter">
              TOP 1000
            </h1>
            <p className="mt-4 text-lg md:text-xl lg:text-2xl font-medium text-white/85 max-w-md leading-relaxed">
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

            <p className="mt-6 font-display text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-white">
              9-12 November 2026
            </p>
            <p className="mt-3 text-[10px] md:text-xs uppercase tracking-[0.35em] text-white/60">
              Stanford &nbsp;·&nbsp; Berkeley &nbsp;·&nbsp; UC San Francisco
              &nbsp;·&nbsp;{" "}
              <span className="whitespace-nowrap">Silicon Valley</span>
            </p>
          </div>

        </div>

        {/* Right Panel: Info & Interaction */}
        <div className="relative z-20 w-full lg:w-1/2 min-h-screen bg-[#0a0a1a]/10 backdrop-blur-md p-10 md:p-16 flex flex-col justify-center">



          {/* Countdown */}
          <div className="mb-12">
            <h3 className="text-white/60 text-xs font-thin tracking-[0.3em] uppercase mb-8">
              Event Countdown
            </h3>
            <div className="grid grid-cols-4 gap-3 md:gap-4">
              {countdownCells.map((c) => (
                <div key={c.label} className="flex flex-col">
                  <span className="font-display text-4xl md:text-5xl font-bold text-white tabular-nums">
                    {c.value}
                  </span>
                  <span className="text-white/60 text-[10px] uppercase tracking-widest mt-2">
                    {c.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Sectors */}
          <div className="mb-12">
            <h3 className="text-white/60 text-xs font-thin tracking-[0.3em] uppercase mb-6">
              Impact Sectors
            </h3>
            <div className="flex flex-wrap gap-2">
              {sectors.map((s) => (
                <span
                  key={s}
                  className="rounded-full px-4 py-2 text-xs font-medium backdrop-blur-sm bg-white/5 border border-white/10 text-white/80"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Waitlist */}
          <div className="relative">
            <h3 className="font-display text-2xl mb-2">Join the waitlist</h3>
            <p className="text-white/60 text-sm font-light mb-6">
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
                      className="w-full bg-[#0a0a1a]/60 border border-white/15 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-all backdrop-blur-sm"
                    />
                  </div>
                  <div className="relative flex-grow group">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email address"
                      className="w-full bg-[#0a0a1a]/60 border border-white/15 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-all backdrop-blur-sm"
                    />
                  </div>

                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="group w-full flex items-center justify-between h-16 px-8 rounded-full bg-white/20 backdrop-blur-[20px] border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] transition-all duration-300 ease-out hover:bg-white hover:border-white/10 hover:shadow-none hover:backdrop-blur-none hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 disabled:opacity-60 disabled:hover:scale-100"
                >
                  <span className="text-lg font-bold text-white transition-colors duration-300 ease-out group-hover:text-[#0A0A0A]">
                    {submitting ? "Joining…" : "Join the waitlist"}
                  </span>
                  <div className="relative h-10 w-10 flex items-center justify-center shrink-0">
                    {/* Default diagonal arrow */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="absolute text-white transition-all duration-300 ease-out opacity-100 group-hover:opacity-0 group-hover:rotate-[-45deg]"
                    >
                      <path d="M7 17 17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                    {/* Hover arrow badge */}
                    <div className="absolute inset-0 flex items-center justify-center rounded-full bg-[#0A0A0A] opacity-0 scale-50 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform duration-300 ease-out -translate-x-0.5 group-hover:translate-x-0"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </button>

              </form>
            )}
          </div>

          {/* Footer note */}
          <div className="mt-12 text-[10px] text-white/20 tracking-wide text-center lg:text-left">
            <div className="mb-2">
              Organized by the Poland in Silicon Valley Center for Science,
              Innovation, and Entrepreneurship (PolSV).
            </div>
            <Link
              to="/2025"
              className="text-white/30 hover:text-white transition-colors duration-300"
            >
              2025 Inaugural Summit
            </Link>
          </div>
        </div>
    </div>
  );
};

export default Index2026;

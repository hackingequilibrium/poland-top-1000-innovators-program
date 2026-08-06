import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Dna, Leaf, Rocket, ShieldCheck, Cpu } from "lucide-react";
import patronLogosCombined from "@/assets/patron-logos-combined.png";
import honoraryPatronage from "@/assets/honorary-patronage.png";
import businessPartners from "@/assets/business-partners.png";

export const Section = ({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <section id={id} className={`px-10 md:px-16 py-20 md:py-28 ${className}`}>
    <div className="max-w-none">

      {eyebrow && (
        <p className="text-white/50 text-[11px] font-light tracking-[0.3em] uppercase mb-4">
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-white mb-10 md:mb-14">
          {title}
        </h2>
      )}
      {children}
    </div>
  </section>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div
    className={`rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 md:p-8 ${className}`}
  >
    {children}
  </div>
);

/* Animated number that counts up when scrolled into view */
const CountUp = ({ value }: { value: string }) => {
  const target = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 1200;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(Math.round(target * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return (
    <div
      ref={ref}
      className="font-display text-4xl md:text-5xl font-bold text-white tabular-nums"
    >
      {display}
      {suffix}
    </div>
  );
};

/* 2. What is TOP1000 */
export const AboutSection = () => (
  <section id="about" className="bg-[#0B1A3F] px-10 md:px-16 pt-0 md:pt-0 pb-10 md:pb-14">
    <p className="text-white/70 text-lg md:text-xl lg:text-2xl font-thin leading-snug max-w-none">
      <span className="text-white font-normal">Top 1000 Innovators of Poland in Silicon Valley</span>{" "}
      brings together Poland's leading researchers, innovators, entrepreneurs, and industry
      <br className="hidden xl:block" /> leaders to accelerate commercialization through direct
      engagement with the Silicon Valley innovation ecosystem.
    </p>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8">
      {[
        { n: "120", l: "Participants" },
        { n: "4", l: "Intensive days" },
        { n: "90+", l: "Innovation projects" },
        { n: "15", l: "Top universities" },
      ].map((s) => (
        <div
          key={s.l}
          className="rounded-none border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 md:p-8"
        >
          <CountUp value={s.n} />
          <div className="text-white/60 text-xs uppercase tracking-widest mt-2 font-light">{s.l}</div>
        </div>
      ))}
    </div>
  </section>
);


/* 3. Focus Areas */
const focusAreas = [
  {
    title: "Biomed & Life Sciences",
    icon: Dna,
    body: "Therapeutics, diagnostics, medical devices, and translational research moving from lab to market.",
  },
  {
    title: "Energy & Sustainability",
    icon: Leaf,
    body: "Clean energy, storage, materials, and climate technologies with global deployment potential.",
  },
  {
    title: "Space & Avionics",
    icon: Rocket,
    body: "Satellite systems, propulsion, sensing, and aerospace engineering built for commercial scale.",
  },
  {
    title: "Dual-Use Technologies",
    icon: ShieldCheck,
    body: "Innovation serving both civilian and defense markets, from resilience to advanced security.",
  },
];

export const FocusAreasSection = () => (
  <Section id="focus" eyebrow="Focus Areas" title="Four verticals, one ecosystem">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {focusAreas.map((f) => (
        <Card key={f.title} className="rounded-none transition-colors hover:bg-white/[0.07]">
          <f.icon className="h-9 w-9 md:h-10 md:w-10 text-[#8FC7F5]" strokeWidth={1.25} />
          <h3 className="font-display text-xl md:text-2xl font-semibold text-white mt-5">{f.title}</h3>
          <p className="text-white/60 text-base md:text-lg font-light leading-relaxed mt-3">{f.body}</p>
        </Card>
      ))}
    </div>
    <Card className="mt-6 border-[#C70828]/40 bg-[#C70828]/10">
      <div className="flex items-center gap-3">
        <Cpu className="h-9 w-9 md:h-10 md:w-10 text-[#8FC7F5] shrink-0" strokeWidth={1.25} />
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-white">AI Across Every Sector</h3>
      </div>
      <p className="text-white/70 text-base md:text-lg font-light leading-relaxed mt-3">
        AI is integrated across all four focus areas rather than presented as a separate track.
      </p>
    </Card>
  </Section>
);

/* 4. Featured Voices */
export const SpeakersSection = () => (
  <Section id="speakers" eyebrow="Featured Voices" title="Speakers">
    <p className="text-white/70 text-base md:text-lg font-light leading-relaxed max-w-3xl">
      Leaders across science, policy, industry, investment, and innovation shaping the future of
      technology and commercialization.
    </p>
    <div className="mt-10 flex items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.03] py-16">
      <span className="text-white/50 text-xs uppercase tracking-[0.35em] font-light">Coming soon</span>
    </div>
  </Section>
);

/* 5. Why TOP1000 */
const whyItems = [
  {
    title: "From Research to Market",
    body: "Move beyond publications and technical validation toward commercialization.",
  },
  {
    title: "Silicon Valley Network",
    body: "Direct access to researchers, founders, investors, mentors, and industry leaders.",
  },
  {
    title: "Personalized Commercialization Path",
    body: "Each participant follows a customized pathway informed by an Innovation Readiness assessment.",
  },
  {
    title: "Long-Term Collaboration",
    body: "Become part of an ongoing Poland–Silicon Valley innovation network.",
  },
];

export const WhySection = () => (
  <Section id="why" eyebrow="Why TOP1000?" title="What participants take home">
    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
      {whyItems.map((w, i) => (
        <Card key={w.title}>
          <span className="font-display text-sm text-[#ff9aab] tabular-nums">0{i + 1}</span>
          <h3 className="font-display text-xl md:text-2xl font-semibold text-white mt-3">{w.title}</h3>
          <p className="text-white/60 text-sm md:text-base font-light leading-relaxed mt-2">{w.body}</p>
        </Card>
      ))}
    </div>
  </Section>
);

/* 6. Venues */
export const VenuesSection = () => (
  <Section id="venues" eyebrow="Venues" title="A four-venue Silicon Valley experience">
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {["Stanford University", "UCSF", "Triple Ring Technologies", "UC Berkeley"].map((v) => (
        <Card key={v} className="flex items-center justify-center text-center min-h-[140px]">
          <span className="font-display text-lg md:text-xl font-semibold text-white">{v}</span>
        </Card>
      ))}
    </div>
  </Section>
);

/* 7. Program Experience */
const days = [
  {
    day: "Day 1",
    venue: "Stanford University",
    title: "Kickoff & Innovation Readiness",
    items: ["Opening keynote", "Innovation Readiness diagnostic", "Personalized pathway", "Networking mixer"],
  },
  {
    day: "Day 2",
    venue: "UCSF",
    title: "Vertical Workshops",
    items: ["Four sector workshops", "Mentoring", "AI across all tracks", "Partner networking"],
  },
  {
    day: "Day 3",
    venue: "Triple Ring Technologies",
    title: "Capital & Partnership Tracks",
    items: ["Investor preparation", "Industry meetings", "Partnership discussions", "Founder reception"],
  },
  {
    day: "Day 4",
    venue: "UC Berkeley",
    title: "Showcase & Next Steps",
    items: ["Project showcase", "Networking", "Action plans", "Closing reception"],
  },
];

export const ProgramSection = () => (
  <Section id="program" eyebrow="Program Experience" title="Four days, four venues">
    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
      {days.map((d) => (
        <Card key={d.day}>
          <div className="flex items-baseline gap-3">
            <span className="font-display text-sm font-semibold text-[#ff9aab] uppercase tracking-widest">
              {d.day}
            </span>
            <span className="text-white/40 text-xs font-light">· {d.venue}</span>
          </div>
          <h3 className="font-display text-xl md:text-2xl font-semibold text-white mt-3">{d.title}</h3>
          <ul className="mt-4 space-y-2">
            {d.items.map((i) => (
              <li key={i} className="text-white/60 text-sm font-light pl-4 -indent-4 leading-relaxed">
                <span className="text-[#C70828] mr-2">•</span>
                {i}
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  </Section>
);

/* 8. Previous Summit */
export const PreviousSummitSection = () => (
  <Section id="2025" eyebrow="Previous Summit" title="Built on a successful inaugural cohort">
    <p className="text-white/50 text-xs uppercase tracking-[0.3em] font-light">December 2025</p>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8">
      {[
        { n: "200", l: "Researchers" },
        { n: "100+", l: "Innovation projects" },
        { n: "12", l: "Universities" },
        { n: "4", l: "Intensive days" },
      ].map((s) => (
        <Card key={s.l}>
          <div className="font-display text-4xl md:text-5xl font-bold text-white tabular-nums">{s.n}</div>
          <div className="text-white/60 text-xs uppercase tracking-widest mt-2 font-light">{s.l}</div>
        </Card>
      ))}
    </div>
    <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-6">
      {["Photos", "Highlight video", "Testimonials"].map((l) => (
        <Card
          key={l}
          className="flex items-center justify-center min-h-[120px] border-dashed border-white/15"
        >
          <span className="text-white/40 text-xs uppercase tracking-[0.3em] font-light">{l} · coming soon</span>
        </Card>
      ))}
    </div>
    <Link
      to="/2025"
      className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white hover:text-[#0A0A0A]"
    >
      View 2025 Highlights
    </Link>
  </Section>
);

/* 9. Partners */
const partnerGroups = [
  { label: "Organizers", img: patronLogosCombined },
  { label: "Honorary Patronage", img: honoraryPatronage },
  { label: "Academic Partners", img: null },
  { label: "Strategic Partners", img: null },
  { label: "Corporate Partners", img: businessPartners },
  { label: "Supporting Organizations", img: null },
  { label: "Media Partners", img: null },
];

export const PartnersSection = () => (
  <Section id="partners" eyebrow="Partners" title="Built with our partners">
    <div className="space-y-10">
      {partnerGroups.map((g) => (
        <div key={g.label}>
          <h3 className="text-white/50 text-[11px] uppercase tracking-[0.3em] font-light mb-4">{g.label}</h3>
          {g.img ? (
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 md:p-8">
              <img src={g.img} alt={g.label} className="w-full h-auto object-contain" loading="lazy" />
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.03] py-10 text-center">
              <span className="text-white/40 text-xs uppercase tracking-[0.3em] font-light">
                Announced soon
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  </Section>
);

/* 10. Tickets */
const tiers = [
  {
    name: "University Early Bird",
    price: "$3,799",
    note: "Available until September 30",
    featured: true,
    body: "For researchers, faculty, university leaders, and university technology transfer officers seeking to accelerate innovation, commercialization, and international collaboration.",
  },
  {
    name: "Business Early Bird",
    price: "$5,499",
    note: "Available until September 30",
    featured: true,
    body: "For entrepreneurs, startups, investors, corporate innovators, and industry leaders looking to build partnerships, explore emerging technologies, and connect with Silicon Valley's innovation ecosystem.",
  },
  {
    name: "University",
    price: "$4,499",
    note: "Standard rate",
    featured: false,
    body: "For researchers, faculty, university leaders, and university technology transfer officers seeking to accelerate innovation, commercialization, and international collaboration.",
  },
  {
    name: "Business",
    price: "$6,499",
    note: "Standard rate",
    featured: false,
    body: "For entrepreneurs, startups, investors, corporate innovators, and industry leaders looking to build partnerships, explore emerging technologies, and connect with Silicon Valley's innovation ecosystem.",
  },
];

export const TicketsSection = () => (
  <Section id="tickets" eyebrow="Tickets" title="Secure your seat">
    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
      {tiers.map((t) => (
        <Card
          key={t.name}
          className={t.featured ? "border-[#C70828]/50 bg-[#C70828]/[0.08]" : ""}
        >
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-display text-xl md:text-2xl font-semibold text-white">{t.name}</h3>
            <span className="font-display text-2xl md:text-3xl font-bold text-white tabular-nums whitespace-nowrap">
              {t.price}
            </span>
          </div>
          <p
            className={`text-xs uppercase tracking-[0.2em] font-light mt-2 ${
              t.featured ? "text-[#ff9aab]" : "text-white/40"
            }`}
          >
            {t.note}
          </p>
          <p className="text-white/60 text-sm font-light leading-relaxed mt-4">{t.body}</p>
          <Link
            to="/tickets"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white hover:text-[#0A0A0A]"
          >
            Get Your Seat
          </Link>
        </Card>
      ))}
    </div>
  </Section>
);

/* 11. Final CTA */
export const FinalCtaSection = () => (
  <Section id="join" className="text-center">
    <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-white">
      Join the Second Cohort
    </h2>
    <p className="text-white/60 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto mt-5">
      Be part of the next generation of Polish researchers, innovators, entrepreneurs, and industry
      leaders building lasting connections with Silicon Valley.
    </p>
    <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
      <Link
        to="/tickets"
        className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-bold text-[#0A0A0A] transition-colors hover:bg-white/90"
      >
        Get Your Seat
      </Link>
      <a
        href="https://polsv.org/contact/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-md transition-colors hover:bg-white hover:text-[#0A0A0A]"
      >
        Partner With Us
      </a>
    </div>
  </Section>
);

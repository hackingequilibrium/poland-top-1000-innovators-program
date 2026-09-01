import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Dna, Leaf, Rocket, ShieldCheck, Cpu, FlaskConical, Network, Route, Handshake, X } from "lucide-react";
import patronLogosCombined from "@/assets/patron-logos-combined.png";
import honoraryPatronage from "@/assets/honorary-patronage.png";
import businessPartners from "@/assets/business-partners.png";
import venueStanford from "@/assets/venue-stanford.jpg";
import venueUcsf from "@/assets/venue-ucsf.jpg";
import venueBerkeley from "@/assets/venue-berkeley.jpg";
import venueTripleRing from "@/assets/venue-triple-ring.png.asset.json";
import summitStanfordGroupAsset from "@/assets/summit-2025-stanford-group.jpg.asset.json";
import summitStageAsset from "@/assets/summit-2025-stage.jpg.asset.json";
import summitPanelAsset from "@/assets/summit-2025-panel.jpg.asset.json";
import summitCertificatesAsset from "@/assets/summit-2025-certificates.png.asset.json";
import summitOpenAiAsset from "@/assets/summit-2025-openai-interview.jpg.asset.json";
import aggieKrajewskaAsset from "@/assets/aggie-krajewska.jpg.asset.json";
import lukaszKaiserAsset from "@/assets/lukasz-kaiser.jpg.asset.json";
import maciejKaweckiAsset from "@/assets/maciej-kawecki.jpg.asset.json";
import michaelLepechAsset from "@/assets/michael-lepech.jpg.asset.json";
import markChandlerAsset from "@/assets/mark-chandler.png.asset.json";


const summitStanfordGroup = summitStanfordGroupAsset.url;
const summitStage = summitStageAsset.url;
const summitPanel = summitPanelAsset.url;
const summitCertificates = summitCertificatesAsset.url;
const summitOpenAi = summitOpenAiAsset.url;
const aggieKrajewska = aggieKrajewskaAsset.url;
const lukaszKaiser = lukaszKaiserAsset.url;
const maciejKawecki = maciejKaweckiAsset.url;
const michaelLepech = michaelLepechAsset.url;
const markChandler = markChandlerAsset.url;



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
    className={`rounded-none border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 md:p-8 ${className}`}
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
    <p className="text-white/70 text-base md:text-lg font-extralight leading-snug md:max-w-[75%]">
      <span className="text-white font-semibold">Top 1000 Innovators of Poland in Silicon Valley</span>{" "}
      brings together Poland's leading researchers, innovators, entrepreneurs, and industry
      leaders to accelerate commercialization through direct engagement with the Silicon Valley
      innovation ecosystem.
    </p>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8">
      {[
        { n: "90", l: "University participants" },
        { n: "30", l: "Business participants" },
        { n: "4", l: "Intensive days" },
        { n: "90+", l: "Innovation projects" },
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
  <Section id="focus" eyebrow="Focus Areas" title="Four Verticals, One Ecosystem">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {focusAreas.map((f) => (
        <Card key={f.title} className="rounded-none transition-colors hover:bg-white/[0.07]">
          <f.icon className="h-9 w-9 md:h-10 md:w-10 text-[#8FC7F5]" strokeWidth={1.25} />
          <h3 className="font-display text-xl md:text-2xl font-semibold text-white mt-5">{f.title}</h3>
          <p className="text-white/70 text-base md:text-lg font-extralight leading-relaxed mt-3">{f.body}</p>
        </Card>
      ))}
    </div>
    <Card className="mt-6 border-[#C70828]/40 bg-[#C70828]/10">
      <div className="flex flex-col md:flex-row md:items-center gap-3">
        <Cpu className="h-9 w-9 md:h-10 md:w-10 text-[#8FC7F5] shrink-0" strokeWidth={1.25} />
        <h3 className="font-display text-xl md:text-2xl font-semibold text-white mt-0 md:mt-0">AI Across Every Sector</h3>
      </div>
      <p className="text-white/70 text-base md:text-lg font-extralight leading-relaxed mt-3">
        AI is integrated across all four focus areas rather than presented as a separate track.
      </p>
    </Card>
  </Section>
);

/* 4. Featured Voices */
const speakers = [
  {
    id: "lukasz-kaiser",
    name: "Łukasz Kaiser",
    role: "Member of Technical Staff, OpenAI | Co-creator of TensorFlow",
    image: lukaszKaiser,
    imageClass: "object-center scale-110",
    bio: [
      "Łukasz Kaiser is a leading AI researcher whose work spans machine learning, neural networks, and natural language processing. As part of the Google Brain team, he co-created TensorFlow and contributed to major advances in neural networks for language, including machine translation and summarization.",
      "Before moving into machine learning, he was a tenured researcher in Paris working on logic, automata theory, program synthesis, and game theory. Today, he is a Member of Technical Staff at OpenAI, working at the frontier of artificial intelligence.",
    ],
  },
  {
    id: "michael-lepech",
    name: "Michael Lepech",
    role: "Professor, Stanford University | Acting Director, Stanford Technology Ventures Program",
    image: michaelLepech,
    imageClass: "object-top",
    bio: [
      "Michael Lepech is the C. L. Peck, Class of 1906 Professor of Civil and Environmental Engineering at Stanford University and a Senior Fellow at the Stanford Woods Institute for the Environment. His research focuses on sustainable infrastructure, smart cities, advanced materials, and digital technologies for designing more resilient and environmentally sustainable built environments.",
      "Beyond his research, Michael works extensively at the intersection of engineering, entrepreneurship, and technology commercialization. He serves as Acting Director of the Stanford Technology Ventures Program and leads several Stanford initiatives focused on sustainable development, project leadership, entrepreneurship, product management, and bringing emerging technologies from ideas to market.",
    ],
  },
  {
    id: "aggie-krajewska",
    name: "Aggie Krajewska",
    role: "Founder & CEO, SF Startup Labs | Ex-Google",
    image: aggieKrajewska,
    imageClass: "object-top",
    bio: [
      "Aggie Krajewska is a startup ecosystem leader and founder with 10+ years of experience helping entrepreneurs scale into Silicon Valley. Through roles at Google for Startups, Toronto Business Development Centre, and as CEO of ReaktorX, she has supported more than 300 founders across Europe and North America with market positioning, customer acquisition, fundraising, and access to the Bay Area ecosystem.",
      "Today, as Founder and CEO of SF Startup Labs, Aggie works with founders, VCs, accelerators, and ecosystem partners to help international startups build real momentum in Silicon Valley. She is also a founder herself: her startup, DeepSky, reached the Y Combinator finals, selected from a pool of 19,000 companies.",
    ],
  },
  {
    id: "mark-chandler",
    name: "Mark Chandler",
    role: "Director, San Francisco Mayor’s Office of Global Engagement",
    image: markChandler,
    imageClass: "object-top",
    bio: [
      "Mark Chandler is Director of the San Francisco Mayor’s Office of Global Engagement, where he leads the city’s international trade, investment, and economic diplomacy efforts. With more than 33 years in San Francisco city government and service under eight mayors, he oversees initiatives spanning technology and innovation exchange, international aviation, smart cities, trade and investment promotion, and diplomatic relations.",
      "Mark has participated in more than 30 international missions across Asia, Europe, North America, and the Middle East. He holds a BA in Economics from UC Davis and an MBA in International Marketing from UC Berkeley’s Haas School of Business.",
    ],
  },
  {
    id: "maciej-kawecki",
    name: "Maciej Kawecki",
    role: "Technology Journalist & Science Communicator | President, Lem Institute",
    image: maciejKawecki,
    imageClass: "object-top",
    bio: [
      "Maciej Kawecki is one of Poland's leading technology journalists and science communicators, known for making breakthrough science and emerging technologies accessible to a broad audience. He is the creator and host of “This Is IT,” where he explores the technologies shaping our present and future through conversations with some of the world's most prominent scientists and innovators, including Nobel laureates Geoffrey Hinton, David Baker, Roger Penrose, and Klaus von Klitzing.",
      "He is also President of the Lem Institute and has held leadership roles in academia and Poland's Ministry of Digital Affairs. His work sits at the intersection of technology, science, media, and public engagement, with a strong focus on the human impact of technological progress.",
    ],
  },
];

export const SpeakersSection = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeSpeaker = speakers.find((s) => s.id === activeId) || null;

  useEffect(() => {
    if (!activeId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeId]);

  return (
    <section id="speakers" className="bg-[#0B1A3F] px-10 md:px-16 py-20 md:py-28">
      <p className="text-white/50 text-[11px] font-light tracking-[0.3em] uppercase mb-4">
        Featured Voices
      </p>
      <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
        Speakers
      </h2>
      <p className="text-white/70 text-base md:text-lg font-extralight leading-relaxed max-w-3xl">
        Leaders shaping the future of science, technology, and innovation.
      </p>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
        {speakers.map((speaker) => (
          <button
            key={speaker.id}
            type="button"
            onClick={() => setActiveId(speaker.id)}
            className="text-left rounded-none border border-white/10 bg-white/[0.04] backdrop-blur-sm overflow-hidden transition-colors hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-[#8FC7F5]/50 h-full flex flex-col"
          >
            <div className="aspect-[10/13] w-full overflow-hidden shrink-0">
              <img
                src={speaker.image}
                alt={speaker.name}
                className={`w-full h-full object-cover transition-transform duration-500 hover:scale-105 ${speaker.imageClass || "object-center"}`}
              />
            </div>
            <div className="p-4 md:p-5 flex flex-col items-start">
              <h3 className="font-display text-lg md:text-xl font-semibold text-white leading-tight">
                {speaker.name.split(" ").slice(0, -1).join(" ")}
                <br />
                {speaker.name.split(" ").slice(-1)}
              </h3>
              <p className="text-[#8FC7F5] text-xs md:text-sm font-light mt-1 leading-snug">
                {speaker.role}
              </p>
              <span className="inline-flex items-center gap-2 mt-3 text-white/70 text-xs md:text-sm font-light hover:text-white transition-colors">
                Read bio
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </div>
          </button>
        ))}
      </div>

      <Link
        to="/suggest-speaker"
        className="mt-8 inline-flex items-center gap-2 rounded-none border border-white/25 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white hover:text-[#0A0A0A]"
      >
        Suggest a Speaker
      </Link>

      {activeSpeaker && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setActiveId(null)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-none border border-white/10 bg-[#0B1A3F] p-8 md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveId(null)}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="h-6 w-6" strokeWidth={1.5} />
            </button>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3 shrink-0">
                <img
                  src={activeSpeaker.image}
                  alt={activeSpeaker.name}
                  className="w-full aspect-[4/5] object-cover rounded-none"
                />
              </div>
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-white">
                  {activeSpeaker.name}
                </h3>
                <p className="text-[#8FC7F5] text-sm font-light mt-1">
                  {activeSpeaker.role}
                </p>
                <div className="mt-5 space-y-4 text-white/80 text-base font-extralight leading-relaxed">
                  {activeSpeaker.bio.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

/* 5. Why TOP1000 */
const whyItems = [
  {
    title: "From Research to Market",
    icon: FlaskConical,
    body: "Move beyond publications and technical validation toward commercialization.",
  },
  {
    title: "Silicon Valley Network",
    icon: Network,
    body: "Direct access to researchers, founders, investors, mentors, and industry leaders.",
  },
  {
    title: "Personalized Commercialization Path",
    icon: Route,
    body: "Each participant follows a customized pathway informed by an Innovation Readiness assessment.",
  },
  {
    title: "Long-Term Collaboration",
    icon: Handshake,
    body: "Become part of an ongoing Poland–Silicon Valley innovation network.",
  },
];

export const WhySection = () => (
  <Section id="why" eyebrow="Why TOP1000?" title="What Participants Take Home">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {whyItems.map((w) => (
        <Card key={w.title} className="rounded-none transition-colors hover:bg-white/[0.07]">
          <w.icon className="h-9 w-9 md:h-10 md:w-10 text-[#8FC7F5]" strokeWidth={1.25} />
          <h3 className="font-display text-xl md:text-2xl font-semibold text-white mt-5">{w.title}</h3>
          <p className="text-white/70 text-base md:text-lg font-extralight leading-relaxed mt-3">{w.body}</p>
        </Card>
      ))}
    </div>
  </Section>
);

/* 6. Venues */
export const VenuesSection = () => (
  <section id="venues" className="bg-[#0B1A3F] px-10 md:px-16 py-20 md:py-28">
    <p className="text-white/50 text-[11px] font-light tracking-[0.3em] uppercase mb-4">Venues</p>
    <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-white mb-10 md:mb-14">
      A Four-Venue Silicon Valley Experience
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {[
        { name: "Stanford University", img: venueStanford, cropBottomEdge: true },
        { name: "UC San Francisco", img: venueUcsf },
        { name: "Triple Ring Technologies", img: venueTripleRing.url },
        { name: "UC Berkeley", img: venueBerkeley, cropBottomEdge: true },
      ].map((v) => (
        <div key={v.name} className="border border-white/10 bg-white/[0.04] overflow-hidden">
          <div className="w-full h-44 md:h-48 overflow-hidden">
            <img
              src={v.img}
              alt={`${v.name} venue`}
              width={1024}
              height={768}
              loading="lazy"
              className={`block w-full h-full object-cover ${
                v.cropBottomEdge ? "object-top scale-[1.02]" : "object-center"
              }`}
            />
          </div>
          <div className="p-5 text-center">
            <span className="font-display text-lg md:text-xl font-semibold text-white">{v.name}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
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
    venue: "UC Berkeley",
    title: "Vertical Workshops",
    items: ["Four sector workshops", "Mentoring", "AI across all tracks", "Partner networking"],
  },
  {
    day: "Day 3",
    venue: "Triple Ring Technologies",
    title: "Capital & Partnership Tracks",
    items: ["Investor preparation", "Industry meetings", "Partnership discussions", "Polish Independence Day Reception"],
  },
  {
    day: "Day 4",
    venue: "UC San Francisco",
    title: "Showcase & Next Steps",
    items: ["Project showcase", "Networking", "Action plans", "Closing reception"],
  },
];

export const ProgramSection = () => (
  <Section id="program" eyebrow="Program Experience" title="Four Intensive Days">
    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
      {days.map((d) => (
        <Card key={d.day}>
          <div className="flex items-baseline gap-3">
            <span className="font-display text-sm font-semibold text-[#8FC7F5] uppercase tracking-widest">
              {d.day}
            </span>
            <span className="text-white/40 text-sm md:text-base font-light">· {d.venue}</span>
          </div>
          <h3 className="font-display text-xl md:text-2xl font-semibold text-white mt-3">{d.title}</h3>
          <ul className="mt-4 space-y-2">
            {d.items.map((i) => (
              <li key={i} className="text-white/70 text-sm md:text-base font-extralight pl-4 -indent-4 leading-relaxed">
                <span className="text-[#8FC7F5] mr-2">•</span>
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
  <Section id="2025" eyebrow="Previous Summit" title="Built on a Successful Inaugural Cohort" className="bg-[#0B1A3F]">
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
    <div className="mt-6 -mx-4 px-4 md:mx-0 md:px-0 overflow-x-auto overscroll-x-none [scrollbar-width:thin]">
      <div className="flex gap-4 min-w-max pb-2">
        {[
          { src: summitStanfordGroup, alt: "Summit participants in front of Stanford Memorial Church" },
          { src: summitStage, alt: "Opening remarks on stage at Stanford University" },
          { src: summitPanel, alt: "Panel discussion at the 2025 inaugural summit" },
          { src: summitOpenAi, alt: "Interview with OpenAI technical lead Lukasz Kaiser" },
          { src: summitCertificates, alt: "Participants receiving certificates of participation" },
        ].map((p) => (
          <div key={p.alt} className="rounded-none border border-white/10 overflow-hidden shrink-0">
            <img src={p.src} alt={p.alt} loading="lazy" className="block h-40 md:h-48 w-auto object-cover" />
          </div>
        ))}
      </div>
    </div>


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
            <div className="rounded-none border border-white/10 bg-white/[0.06] p-6 md:p-8">
              <img src={g.img} alt={g.label} className="w-full h-auto object-contain" loading="lazy" />
            </div>
          ) : (
            <div className="rounded-none border border-dashed border-white/15 bg-white/[0.03] py-10 text-center">
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
    name: "Business Early Bird + Executive Retreat",
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
    name: "Business + Executive Retreat",
    price: "$6,499",
    note: "Standard rate",
    featured: false,
    body: "For entrepreneurs, startups, investors, corporate innovators, and industry leaders looking to build partnerships, explore emerging technologies, and connect with Silicon Valley's innovation ecosystem.",
  },
];

export const TicketsSection = () => (
  <Section id="tickets" eyebrow="Tickets" title="Secure Your Seat">
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
              t.featured ? "text-[#8FC7F5]" : "text-white/40"
            }`}
          >
            {t.note}
          </p>
          <p className="text-white/60 text-sm md:text-base font-light leading-relaxed mt-4">{t.body}</p>
          <Link
            to="/tickets"
            className="mt-6 inline-flex items-center gap-2 rounded-none border border-white/25 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white hover:text-[#0A0A0A]"
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
      Join the Summit
    </h2>
    <p className="text-white/60 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto mt-5">
      Be part of the next generation of Poland's researchers, innovators, entrepreneurs, and industry
      leaders building lasting connections with Silicon Valley.
    </p>
    <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
      <Link
        to="/tickets"
        className="group flex items-center justify-between gap-10 h-14 px-6 border border-[#3661F6] bg-[#3661F6] transition-colors duration-300 hover:bg-[#2a4fd4] hover:border-[#2a4fd4]"
      >
        <span className="text-base font-medium tracking-wide text-white">Get a Ticket</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </Link>
      <Link
        to="/partner"
        className="group flex items-center justify-between gap-10 h-14 px-6 border border-white/70 bg-transparent transition-colors duration-300 hover:bg-white"
      >
        <span className="text-base font-medium tracking-wide text-white transition-colors duration-300 group-hover:text-[#0A0A0A]">
          Partner With Us
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white transition-colors duration-300 group-hover:text-[#0A0A0A]">
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </Link>
    </div>
  </Section>
);

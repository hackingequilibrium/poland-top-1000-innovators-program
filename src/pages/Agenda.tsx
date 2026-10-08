import { Link } from "react-router-dom";
import TopNav from "@/components/top1000/TopNav";

const Agenda = () => (
  <div className="min-h-screen bg-[#0B1A3F] text-white flex flex-col">
    <TopNav />
    <main className="flex-1 flex items-center justify-center px-6 py-32">
      <div className="max-w-xl text-center">
        <p className="text-[#8FC7F5] text-xs uppercase tracking-[0.3em] font-light">
          Summit II · 9–12 November 2026
        </p>
        <h1 className="font-display text-3xl md:text-5xl font-bold uppercase mt-4">
          Full Agenda
        </h1>
        <div className="inline-block mt-6 rounded-full border border-[#3661F6]/40 bg-[#3661F6]/15 px-5 py-2 text-[#9DB8FF] text-xs md:text-sm uppercase tracking-[0.2em] font-medium">
          Coming Soon
        </div>
        <p className="text-white/70 text-sm md:text-base font-extralight leading-relaxed mt-8">
          Session times, speakers, workshops, and additional program details will be
          announced as the Summit approaches.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="rounded-full border border-white/25 px-6 py-2.5 text-sm font-light text-white/80 hover:text-white hover:border-white/50 transition-colors"
          >
            Back to Home
          </Link>
          <Link
            to="/tickets"
            className="rounded-full bg-white px-6 py-2.5 text-sm font-medium text-[#0B1A3F] hover:bg-white/85 transition-colors"
          >
            Get a Ticket
          </Link>
        </div>
      </div>
    </main>
  </div>
);

export default Agenda;

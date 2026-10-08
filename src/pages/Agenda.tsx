import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import TopNav from "@/components/top1000/TopNav";
import { Button } from "@/components/ui/button";

import { agendaDays, agendaPhotos, agendaPhotoClasses, isHiddenSession, type AgendaSession } from "@/data/agenda2026";

const cleanName = (name: string) => name.replace(/\s*\((proposed|tentative)\)$/, ""), photoFor = (name: string) => agendaPhotos[cleanName(name)];

// Logistics rows (breaks, lunches, registrations, receptions) are styled more quietly than program sessions.
const isBreakRow = (title: string) => /(coffee break|networking|lunch|reception|registration)/i.test(title);

const Session = ({ session }: { session: AgendaSession }) => {
  const people = session.details.filter((detail) => photoFor(detail));
  const notes = session.details.filter((detail) => !photoFor(detail));

  return (
    <li className="grid gap-2 border-b border-summit-foreground/10 py-3 md:grid-cols-[180px_1fr] md:gap-8 md:py-4">
      <p className="text-sm font-light leading-relaxed text-summit-accent md:pt-0.5">{session.time}</p>
      <div className="min-w-0">
        <h3 className={isBreakRow(session.title) ? "text-sm font-light leading-snug text-summit-muted md:text-base" : "text-base font-medium leading-snug md:text-lg"}>{session.title}</h3>
        {people.length > 0 && (
          <div className="mt-2.5 flex flex-wrap items-start gap-x-4 gap-y-3">
            {people.map((person) => (
              <figure key={person} className="w-24">
                <img
                  src={photoFor(person)}
                  alt={cleanName(person)}
                  width={80}
                  height={80}
                  loading="lazy"
                  className={`h-20 w-20 rounded-full border border-summit-foreground/20 object-cover object-top ${agendaPhotoClasses[cleanName(person)] ?? ""}`}
                />
                <figcaption className="mt-1 text-xs font-light leading-relaxed text-summit-muted">{cleanName(person)}</figcaption>
              </figure>
            ))}
          </div>
        )}
        {notes.length > 0 && (
          <div className="mt-2.5 space-y-1 text-sm font-light leading-relaxed text-summit-muted">
            {notes.map((note) => <p key={note}>{cleanName(note)}</p>)}
          </div>
        )}
      </div>
    </li>
  );
};

const Agenda = () => (
  <div className="flex min-h-screen flex-col bg-summit text-summit-foreground">
    <TopNav />
    <main className="flex-1">
      <header className="navy-band-flush px-6 pb-12 pt-20 md:px-16 md:pb-14 md:pt-28">
        <div className="mx-auto max-w-5xl">
          <Link to="/" className="mb-8 inline-flex items-center gap-2 text-xs font-light text-summit-muted transition-colors hover:text-summit-foreground">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to Summit
          </Link>
          <p className="text-xs font-light uppercase tracking-[0.2em] text-summit-accent">TOP 1000 Innovators of Poland in Silicon Valley</p>
          <h1 className="mt-4 font-display text-4xl font-semibold md:text-5xl">Full Agenda</h1>
          <p className="mt-5 text-lg font-light">Summit II · November 9–12, 2026</p>
          <p className="mt-3 text-sm font-light text-summit-muted">Initial agenda · Subject to updates</p>
          <nav aria-label="Agenda days" className="mt-9 flex flex-wrap gap-2">
            {agendaDays.map((day) => (
              <Button asChild key={day.id} variant="summit" className="h-11 rounded-none px-5">
                <a href={`#${day.id}`}>{day.day} <span className="font-light text-summit-muted">· Nov {day.date.split(" ").slice(-1)[0]}</span></a>
              </Button>
            ))}
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 pb-16 md:px-10 lg:px-0">
        {agendaDays.map((day) => (
          <section key={day.id} id={day.id} className="scroll-mt-24 pb-8 pt-5 md:pb-10">
            <div className="border-b border-summit-foreground/25 pb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-summit-accent">{day.day} · {day.date}</p>
              <h2 className="mt-2 font-display text-2xl font-semibold md:text-3xl">{day.theme}</h2>
              <p className="mt-2 flex items-start gap-2 text-sm font-light leading-relaxed text-summit-muted">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /> {day.venue}
              </p>
            </div>
            <ol>{day.sessions.filter((session) => !isHiddenSession(day.id, session)).map((session) => <Session key={`${day.id}-${session.time}`} session={session} />)}</ol>
          </section>
        ))}
        <Button asChild variant="summit" size="lg" className="rounded-none">
          <Link to="/tickets">Get a Ticket <ArrowRight aria-hidden="true" /></Link>
        </Button>
      </div>
    </main>
    <footer className="navy-band-footer px-6 pb-10 pt-20 text-center text-xs font-light text-summit-muted">
      <div className="flex flex-wrap justify-center gap-6">
        <Link to="/" className="hover:text-summit-foreground">Home</Link>
        <Link to="/hotels" className="hover:text-summit-foreground">Travel & Stay</Link>
        <Link to="/contact" className="hover:text-summit-foreground">Contact us</Link>
      </div>
    </footer>
  </div>
);

export default Agenda;

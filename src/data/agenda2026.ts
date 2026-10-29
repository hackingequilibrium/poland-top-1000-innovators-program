import photo0 from "@/assets/piotr-moncarz.png.asset.json";
import photo1 from "@/assets/wojciech-balczun.png.asset.json";
import photo2 from "@/assets/dianne-taube.png.asset.json";
import photo3 from "@/assets/paul-marca.png.asset.json";
import photo4 from "@/assets/mark-chandler.png.asset.json";
import photo5 from "@/assets/lukasz-kaiser.jpg.asset.json";
import photo6 from "@/assets/skip-ross.png.asset.json";
import photo7 from "@/assets/renate-fruchter.png.asset.json";
import photo8 from "@/assets/alojzy-nowak.png.asset.json";
import photo9 from "@/assets/darren-cooke.png.asset.json";
import photo10 from "@/assets/aggie-krajewska.jpg.asset.json";
import photo11 from "@/assets/agata-braja.png.asset.json";
import photo12 from "@/assets/soody-tronson.png.asset.json";
import photo13 from "@/assets/barry-katz.png.asset.json";
import photo14 from "@/assets/zuzanna-stamirowska.png.asset.json";
import photo15 from "@/assets/esther-wojcicki.png.asset.json";
import photo16 from "@/assets/shana-penn.png.asset.json";
import photo17 from "@/assets/julie-maigret-shapiro.png.asset.json";
import photo18 from "@/assets/camille-crittenden.png.asset.json";
import photo19 from "@/assets/art-chmielewski.png.asset.json";
import photo20 from "@/assets/hamid-farzaneh.png.asset.json";
import photo21 from "@/assets/tadeusz-uhl.png.asset.json";
import photo22 from "@/assets/nuri-capanoglu.jpg.asset.json";
import photo23 from "@/assets/maciej-kawecki.jpg.asset.json";
import photo24 from "@/assets/michal-wyrebkowski.png.asset.json";
import photo25 from "@/assets/waldemar-priebe.png.asset.json";
import photo26 from "@/assets/anna-timofiejczuk.png.asset.json";
import photo27 from "@/assets/leah-walker.png.asset.json";
import photo28 from "@/assets/christina-harvey.png.asset.json";
import photo29 from "@/assets/dariusz-rosati.png.asset.json";
import photo30 from "@/assets/michael-lepech.jpg.asset.json";
import photo31 from "@/assets/jeremy-sewell.png.asset.json";
import photo32 from "@/assets/paul-bryzek.png.asset.json";
import photo33 from "@/assets/adam-januszko.png.asset.json";
import photo34 from "@/assets/dominik-schmidt.png.asset.json";
import photo35 from "@/assets/michal-habdank-kolaczkowski.png.asset.json";
import photo36 from "@/assets/pawel-morkisz.png.asset.json";
import photo37 from "@/assets/marcin-kulasek.png.asset.json";
import photo38 from "@/assets/bob-klein.png.asset.json";
import photo39 from "@/assets/alexandre-bayen.png.asset.json";
import photo40 from "@/assets/martin-kawalski.png.asset.json";
import photo41 from "@/assets/michal-nedoszytko.png.asset.json";
import photo42 from "@/assets/joanna-jaworek-korjakowska.png.asset.json";

export const agendaPhotos: Record<string, string> = {
  "Piotr D. Moncarz": photo0.url,
  "Wojciech Balczun": photo1.url,
  "Dianne Taube": photo2.url,
  "Paul Marca": photo3.url,
  "Mark Chandler": photo4.url,
  "Łukasz Kaiser": photo5.url,
  "Skip Ross": photo6.url,
  "Renate Fruchter": photo7.url,
  "Alojzy Z. Nowak": photo8.url,
  "Darren Cooke": photo9.url,
  "Aggie Krajewska": photo10.url,
  "Agata Braja": photo11.url,
  "Soody Tronson": photo12.url,
  "Barry Katz": photo13.url,
  "Zuzanna Stamirowska": photo14.url,
  "Esther Wojcicki": photo15.url,
  "Shana Penn": photo16.url,
  "Julie Maigret Shapiro": photo17.url,
  "Camille Crittenden": photo18.url,
  "Artur Chmielewski": photo19.url,
  "Hamid Farzaneh": photo20.url,
  "Tadeusz Uhl": photo21.url,
  "Nuri Capanoglu": photo22.url,
  "Maciej Kawecki": photo23.url,
  "Michał Wyrębkowski": photo24.url,
  "Waldemar Priebe": photo25.url,
  "Anna Timofiejczuk": photo26.url,
  "Leah Walker": photo27.url,
  "Christina Harvey": photo28.url,
  "Dariusz Rosati": photo29.url,
  "Michael Lepech": photo30.url,
  "Jeremy Sewell": photo31.url,
  "Paul Bryzek": photo32.url,
  "Adam Januszko": photo33.url,
  "Dominik J. Schmidt": photo34.url,
  "Michał Habdank-Kołaczkowski": photo35.url,
  "Paweł Morkisz": photo36.url,
  "Marcin Kulasek": photo37.url,
  "Bob Klein": photo38.url,
  "Alexandre M. Bayen": photo39.url,
  "Martin Kawalski": photo40.url,
  "Michał Nedoszytko": photo41.url,
  "Joanna Jaworek-Korjakowska": photo42.url,
};

// Per-speaker crop positions so small circular photos match the homepage cards.
export const agendaPhotoClasses: Record<string, string> = {
  "Mark Chandler": "object-[center_25%]",
  "Wojciech Balczun": "object-[42%_center]",
  "Leah Walker": "object-center",
  "Christina Harvey": "object-center",
  "Dariusz Rosati": "object-top",
  "Michael Lepech": "object-top",
  "Marcin Kulasek": "object-top",
};

export type AgendaSession = { time: string; title: string; details: string[] };
export type AgendaDay = { id: string; day: string; date: string; venue: string; theme: string; sessions: AgendaSession[] };

// Schedule rows kept in the data below but not shown on the page.
// Remove an entry here to publish the row again.
export const hiddenSessions: Record<string, string[]> = {};

export const isHiddenSession = (dayId: string, session: AgendaSession) =>
  (hiddenSessions[dayId] ?? []).includes(`${session.time} | ${session.title}`);

export const agendaDays: AgendaDay[] = [
  {
    "id": "day-1",
    "day": "Day 1",
    "date": "Monday, December 14, 2026",
    "venue": "University of California, San Francisco (UCSF)",
    "theme": "Official Opening, Biomed & Life Sciences, Education",
    "sessions": [
      {
        "time": "8:00–9:00 AM",
        "title": "Registration and Networking",
        "details": []
      },
      {
        "time": "9:00–9:25 AM",
        "title": "Summit Opening Ceremony",
        "details": [
          "Piotr D. Moncarz",
          "Dianne Taube",
          "Paul Marca"
        ]
      },
      {
        "time": "9:25–9:40 AM",
        "title": "The Silicon Valley Ecosystem and the City of San Francisco",
        "details": [
          "Mark Chandler"
        ]
      },
      {
        "time": "9:40–10:00 AM",
        "title": "Poland as a Rising Hub for the Next Era of Higher Education",
        "details": [
          "Ministry of Science and Higher Education of Poland, TBA"
        ]
      },
      {
        "time": "10:00–10:30 AM",
        "title": "AI Instead of Humboldt: The University of the Future",
        "details": [
          "Alojzy Z. Nowak"
        ]
      },
      {
        "time": "10:30–11:00 AM",
        "title": "Networking Activity & Coffee Break",
        "details": []
      },
      {
        "time": "11:00–11:25 AM",
        "title": "California’s Stem Cell Strategy: Turning Science into Impact",
        "details": [
          "Bob Klein"
        ]
      },
      {
        "time": "11:25–11:50 AM",
        "title": "Fireside Chat: AI in Clinical Practice and Health Technology",
        "details": [
          "Jeremy Sewell",
          "Martin Kawalski",
          "Michał Nedoszytko"
        ]
      },
      {
        "time": "11:50 AM–12:15 PM",
        "title": "Fireside Chat: Medicine Discovery in the Age of AI",
        "details": [
          "Waldemar Priebe"
        ]
      },
      {
        "time": "12:15–1:15 PM",
        "title": "Networking Lunch",
        "details": []
      },
      {
        "time": "1:15–2:30 PM",
        "title": "Workshop: Innovation & Technology Readiness",
        "details": [
          "Hamid Farzaneh",
          "Agata Braja"
        ]
      },
      {
        "time": "2:30–2:50 PM",
        "title": "Sleep and Longevity",
        "details": [
          "Martin Kawalski"
        ]
      },
      {
        "time": "2:50–3:10 PM",
        "title": "Networking Activity & Coffee Break",
        "details": []
      },
      {
        "time": "3:10–3:30 PM",
        "title": "PolSV: 2027 Programs Outline",
        "details": [
          "Piotr D. Moncarz",
          "Hamid Farzaneh",
          "Anna Timofiejczuk"
        ]
      },
      {
        "time": "3:30–4:00 PM",
        "title": "Education for the Future",
        "details": [
          "Esther Wojcicki",
          "Michał Wyrębkowski"
        ]
      },
      {
        "time": "4:00–4:20 PM",
        "title": "Project Based Learning",
        "details": [
          "Renate Fruchter"
        ]
      },
      {
        "time": "4:20–4:40 PM",
        "title": "Team Meeting #1: Shared Challenges & Opportunities",
        "details": []
      },
      {
        "time": "4:40–5:00 PM",
        "title": "Open Mic & Daily Feedback Poll",
        "details": []
      }
    ]
  },
  {
    "id": "day-2",
    "day": "Day 2",
    "date": "Tuesday, December 15, 2026",
    "venue": "Stanford University",
    "theme": "Dual-Use Technologies & Energy",
    "sessions": [
      {
        "time": "8:00–9:00 AM",
        "title": "Registration and Networking",
        "details": []
      },
      {
        "time": "9:00–9:15 AM",
        "title": "Welcome to Stanford",
        "details": [
          "Michael Lepech",
          "Piotr D. Moncarz"
        ]
      },
      {
        "time": "9:15–9:35 AM",
        "title": "Poland: From G20 to Peak Innovation?",
        "details": [
          "Ministry of State Assets of Poland, TBA"
        ]
      },
      {
        "time": "9:35–10:05 AM",
        "title": "Entrepreneurial Journey",
        "details": [
          "Łukasz Kaiser",
          "Agata Braja"
        ]
      },
      {
        "time": "10:05–10:30 AM",
        "title": "Rethinking Sustainability",
        "details": [
          "Michael Lepech"
        ]
      },
      {
        "time": "10:30–10:55 AM",
        "title": "Powering AI: The Energy Question",
        "details": [
          "Piotr D. Moncarz"
        ]
      },
      {
        "time": "10:55–11:20 AM",
        "title": "Networking Activity & Coffee Break",
        "details": []
      },
      {
        "time": "11:20–11:45 AM",
        "title": "From University to Startup",
        "details": [
          "Paul Bryzek",
          "Nuri Capanoglu",
          "Michał Adamkiewicz"
        ]
      },
      {
        "time": "11:45 AM–12:35 PM",
        "title": "Panel: Dual-Use Technologies, From University Lab to Defense and Civilian Markets",
        "details": [
          "Adam Januszko",
          "Dominik J. Schmidt"
        ]
      },
      {
        "time": "12:35–1:35 PM",
        "title": "Networking Lunch",
        "details": []
      },
      {
        "time": "1:35–2:05 PM",
        "title": "Cybersecurity: Who is in Charge?",
        "details": [
          "Joanna Jaworek-Korjakowska"
        ]
      },
      {
        "time": "2:05–2:35 PM",
        "title": "Diplomacy in a World Without Borders",
        "details": [
          "Dariusz Rosati"
        ]
      },
      {
        "time": "2:35–2:55 PM",
        "title": "Entrepreneurial Journey: Engineering and Failure Analysis",
        "details": [
          "Skip Ross"
        ]
      },
      {
        "time": "2:55–3:40 PM",
        "title": "Workshop: From Technology to Commercial Opportunity",
        "details": []
      },
      {
        "time": "3:40–3:55 PM",
        "title": "Networking Activity & Coffee Break",
        "details": []
      },
      {
        "time": "3:55–5:10 PM",
        "title": "Workshop: Intellectual Property 101",
        "details": [
          "Soody Tronson"
        ]
      },
      {
        "time": "5:10–5:30 PM",
        "title": "Team Meeting #2: Shared Challenges & Opportunities",
        "details": []
      },
      {
        "time": "5:30–5:55 PM",
        "title": "Open Mic & Daily Feedback Poll",
        "details": []
      }
    ]
  },
  {
    "id": "day-3",
    "day": "Day 3",
    "date": "Wednesday, December 16, 2026",
    "venue": "University of California, Berkeley",
    "theme": "Space & Aviation",
    "sessions": [
      {
        "time": "8:00–9:00 AM",
        "title": "Registration and Networking",
        "details": []
      },
      {
        "time": "9:00–9:20 AM",
        "title": "Ecosystem Exchange",
        "details": [
          "Piotr D. Moncarz",
          "Shana Penn",
          "Julie Maigret Shapiro"
        ]
      },
      {
        "time": "9:20–9:30 AM",
        "title": "Welcome from CITRIS and the Banatao Institute",
        "details": [
          "Camille Crittenden"
        ]
      },
      {
        "time": "9:30–9:50 AM",
        "title": "Opening Keynote",
        "details": [
          "Alexandre M. Bayen"
        ]
      },
      {
        "time": "9:50–10:15 AM",
        "title": "Securing the Next Frontier: Space Technologies and National Security",
        "details": [
          "Leah Walker"
        ]
      },
      {
        "time": "10:15–10:40 AM",
        "title": "Nature's Blueprint: Designing the Next Generation of Aircraft",
        "details": [
          "Christina Harvey"
        ]
      },
      {
        "time": "10:40–11:00 AM",
        "title": "Networking Activity & Coffee Break",
        "details": []
      },
      {
        "time": "11:00–11:25 AM",
        "title": "Humanoids in Space",
        "details": [
          "Artur Chmielewski"
        ]
      },
      {
        "time": "11:25–11:55 AM",
        "title": "Panel: The Aerospace Startup Conveyor Belt",
        "details": [
          "Tadeusz Uhl",
          "Artur Chmielewski",
          "Alexandre M. Bayen"
        ]
      },
      {
        "time": "11:55 AM–12:20 PM",
        "title": "The Future of Deep Learning",
        "details": [
          "Paweł Morkisz"
        ]
      },
      {
        "time": "12:20–1:20 PM",
        "title": "Networking Lunch",
        "details": []
      },
      {
        "time": "1:20–2:35 PM",
        "title": "Workshop: Pitching Your Innovation",
        "details": [
          "Darren Cooke",
          "Agata Braja"
        ]
      },
      {
        "time": "2:35–3:20 PM",
        "title": "Workshop: Commercialization",
        "details": []
      },
      {
        "time": "3:20–3:40 PM",
        "title": "Networking Activity & Coffee Break",
        "details": []
      },
      {
        "time": "3:40–4:10 PM",
        "title": "Creative Thinking for Breakthroughs",
        "details": []
      },
      {
        "time": "4:10–4:30 PM",
        "title": "Team Meeting #3: Shared Challenges & Opportunities",
        "details": []
      },
      {
        "time": "4:30–4:55 PM",
        "title": "Open Mic & Daily Feedback Poll",
        "details": []
      }
    ]
  },
  {
    "id": "day-4",
    "day": "Day 4",
    "date": "Thursday, December 17, 2026",
    "venue": "Computer History Museum, Mountain View",
    "theme": "Commercialization, Capital & Strategic Partnerships",
    "sessions": [
      {
        "time": "8:00–9:00 AM",
        "title": "Registration and Networking",
        "details": []
      },
      {
        "time": "9:00–9:30 AM",
        "title": "Architecting Productivity",
        "details": [
          "Barry Katz"
        ]
      },
      {
        "time": "9:30–10:00 AM",
        "title": "Crossing the AI Frontier",
        "details": [
          "Zuzanna Stamirowska",
          "Maciej Kawecki"
        ]
      },
      {
        "time": "10:00–10:30 AM",
        "title": "Go-to-Market and Positioning for Deep Tech",
        "details": [
          "Michał Habdank-Kołaczkowski",
          "Hamid Farzaneh",
          "Michał Majerczak"
        ]
      },
      {
        "time": "10:30–10:45 AM",
        "title": "Coffee Break",
        "details": []
      },
      {
        "time": "10:45 AM–12:00 PM",
        "title": "Startup Pitches, Session 1",
        "details": []
      },
      {
        "time": "12:00–1:00 PM",
        "title": "Networking Lunch",
        "details": []
      },
      {
        "time": "1:00–1:25 PM",
        "title": "Demystifying Angel Funding",
        "details": []
      },
      {
        "time": "1:25–1:50 PM",
        "title": "Why Human Skills Matter More Than Ever",
        "details": [
          "Barry Katz"
        ]
      },
      {
        "time": "1:50–2:15 PM",
        "title": "Demystifying VC Funding",
        "details": []
      },
      {
        "time": "2:15–2:40 PM",
        "title": "PolSV: What Comes After the Summit",
        "details": [
          "Agata Braja",
          "Hamid Farzaneh",
          "Anna Timofiejczuk"
        ]
      },
      {
        "time": "2:40–4:00 PM",
        "title": "Startup Pitches, Session 2",
        "details": []
      },
      {
        "time": "4:00–6:00 PM",
        "title": "Closing Remarks & Reception",
        "details": [
          "Piotr D. Moncarz"
        ]
      }
    ]
  }
];

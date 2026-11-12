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
import photo43 from "@/assets/michal-majerczak.png.asset.json";
import photo44 from "@/assets/jerzy-orkiszewski.png.asset.json";
import photo45 from "@/assets/michal-jaros.png.asset.json";
import photo46 from "@/assets/mike-lyons.png.asset.json";

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
  "Michał Majerczak": photo43.url,
  "Jerzy Orkiszewski": photo44.url,
  "Michał Jaros": photo45.url,
  "Mike Lyons": photo46.url,
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
    "theme": "Biomed & Life Sciences, Education",
    "sessions": [
      {
        "time": "8:00–9:00 AM",
        "title": "Registration and Networking",
        "details": []
      },
      {
        "time": "9:00–9:35 AM",
        "title": "Summit Opening",
        "details": [
          "Piotr D. Moncarz",
          "Dianne Taube",
          "Jerzy Orkiszewski",
          "Mark Chandler"
        ]
      },
      {
        "time": "9:35–10:05 AM",
        "title": "AI Instead of Humboldt: The University of the Future",
        "details": [
          "Alojzy Z. Nowak"
        ]
      },
      {
        "time": "10:05–10:25 AM",
        "title": "Coffee Break",
        "details": []
      },
      {
        "time": "10:25–10:50 AM",
        "title": "California's Stem Cell Strategy: Turning Science into Impact",
        "details": [
          "Bob Klein"
        ]
      },
      {
        "time": "10:50–11:15 AM",
        "title": "Fireside: AI in Clinical Practice and Health Technology",
        "details": [
          "Jeremy Sewell",
          "Martin Kawalski",
          "Michał Nedoszytko"
        ]
      },
      {
        "time": "11:15–11:35 AM",
        "title": "Fireside: Medicine Discovery in the Age of AI",
        "details": [
          "Waldemar Priebe",
          "Jerzy Orkiszewski"
        ]
      },
      {
        "time": "11:35 AM–12:10 PM",
        "title": "PolSV: Mission, Funding Model and the 2027 Quarterly Program",
        "details": [
          "Piotr D. Moncarz",
          "Hamid Farzaneh",
          "Anna Timofiejczuk"
        ]
      },
      {
        "time": "12:10–1:10 PM",
        "title": "Networking Lunch",
        "details": []
      },
      {
        "time": "1:10–2:25 PM",
        "title": "Workshop 1A: Innovation and Technology Readiness",
        "details": [
          "Hamid Farzaneh",
          "Agata Braja"
        ]
      },
      {
        "time": "2:25–2:40 PM",
        "title": "Coffee Break",
        "details": []
      },
      {
        "time": "2:40–3:55 PM",
        "title": "Workshop 1B: From Technology to Commercial Opportunity",
        "details": []
      },
      {
        "time": "3:55–4:30 PM",
        "title": "Panel: Education for the Future",
        "details": [
          "Esther Wojcicki",
          "Michał Wyrębkowski",
          "Renate Fruchter"
        ]
      },
      {
        "time": "4:30–4:50 PM",
        "title": "Team Meeting 1",
        "details": []
      },
      {
        "time": "4:50–5:00 PM",
        "title": "Open Mic",
        "details": []
      }
    ]
  },
  {
    "id": "day-2",
    "day": "Day 2",
    "date": "Tuesday, December 15, 2026",
    "venue": "Stanford Faculty Club and Tresidder Memorial Union",
    "theme": "Dual-Use Technologies, Energy & Sustainability",
    "sessions": [
      {
        "time": "8:00–9:00 AM",
        "title": "Registration and Networking",
        "details": []
      },
      {
        "time": "9:00–9:10 AM",
        "title": "Collaboration Agreement Between Poland’s Foundation for Science, Innovation, and Entrepreneurship and PolSV",
        "details": [
          "Piotr D. Moncarz",
          "Dariusz Rosati"
        ]
      },
      {
        "time": "9:10–9:25 AM",
        "title": "Rethinking Sustainability",
        "details": [
          "Michael Lepech"
        ]
      },
      {
        "time": "9:30–9:50 AM",
        "title": "Poland as a Rising Hub for the Next Era of Higher Education",
        "details": [
          "Ministry of Science and Higher Education of Poland, TBA"
        ]
      },
      {
        "time": "9:50–10:10 AM",
        "title": "Understanding the AI Frontier",
        "details": [
          "Łukasz Kaiser",
          "Agata Braja"
        ]
      },
      {
        "time": "10:10–10:25 AM",
        "title": "Building a Silicon Valley Legend",
        "details": [
          "Piotr D. Moncarz",
          "Skip Ross"
        ]
      },
      {
        "time": "10:25–10:45 AM",
        "title": "Defense-Tech Ecosystem",
        "details": [
          "Adam Januszko",
          "Mike Lyons"
        ]
      },
      {
        "time": "10:45–11:05 AM",
        "title": "Coffee Break",
        "details": []
      },
      {
        "time": "11:05–11:25 AM",
        "title": "Cybersecurity: Who is in Charge?",
        "details": [
          "Joanna Jaworek-Korjakowska"
        ]
      },
      {
        "time": "11:25–11:45 AM",
        "title": "Semiconductors Sovereignty",
        "details": [
          "Dominik J. Schmidt",
          "Michał Jaros"
        ]
      },
      {
        "time": "11:45–12:05 PM",
        "title": "Powering AI: The Energy Question",
        "details": [
          "Piotr D. Moncarz"
        ]
      },
      {
        "time": "12:05–12:25 PM",
        "title": "Diplomacy in a World Without Borders",
        "details": [
          "Dariusz Rosati"
        ]
      },
      {
        "time": "12:25–1:30 PM",
        "title": "Networking Lunch",
        "details": []
      },
      {
        "time": "1:30–2:45 PM",
        "title": "Workshop: Intellectual Property, From Disclosure to Protection",
        "details": [
          "Soody Tronson"
        ]
      },
      {
        "time": "2:45–4:00 PM",
        "title": "Workshop: IP Essentials Applied to the Disclosures",
        "details": [
          "Soody Tronson"
        ]
      },
      {
        "time": "4:00–4:15 PM",
        "title": "Coffee Break",
        "details": []
      },
      {
        "time": "4:15–4:35 PM",
        "title": "Team Meeting 2",
        "details": []
      },
      {
        "time": "4:35–4:50 PM",
        "title": "Open Mic",
        "details": []
      },
      {
        "time": "4:50–6:15 PM",
        "title": "Reception",
        "details": []
      },
      {
        "time": "6:15–8:15 PM",
        "title": "Gala Dinner",
        "details": []
      }
    ]
  },
  {
    "id": "day-3",
    "day": "Day 3",
    "date": "Wednesday, December 16, 2026",
    "venue": "University of California, Berkeley (CITRIS and the Banatao Institute)",
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
        "title": "Coffee Break",
        "details": []
      },
      {
        "time": "11:00–11:30 AM",
        "title": "Panel: The Aerospace Startup Conveyor Belt",
        "details": [
          "Tadeusz Uhl",
          "Artur Chmielewski",
          "Alexandre M. Bayen"
        ]
      },
      {
        "time": "11:30–11:55 AM",
        "title": "The Future of Deep Learning",
        "details": [
          "Paweł Morkisz"
        ]
      },
      {
        "time": "11:55 AM–12:55 PM",
        "title": "Networking Lunch",
        "details": []
      },
      {
        "time": "12:55–1:25 PM",
        "title": "Workshop 3 Briefing: Pitching Your Innovation",
        "details": [
          "Darren Cooke"
        ]
      },
      {
        "time": "1:25–2:30 PM",
        "title": "Workshop 3A: Pitch and Poster Rehearsal",
        "details": [
          "Agata Braja"
        ]
      },
      {
        "time": "2:30–2:45 PM",
        "title": "Coffee Break",
        "details": []
      },
      {
        "time": "2:45–4:00 PM",
        "title": "Workshop 3B: Answering Investor Questions Practice",
        "details": []
      },
      {
        "time": "2:45–4:00 PM",
        "title": "Breakout: PolSV Session with the Polish TTOs",
        "details": []
      },
      {
        "time": "4:00–4:20 PM",
        "title": "Team Meeting 3",
        "details": []
      },
      {
        "time": "4:20–4:30 PM",
        "title": "Open Mic",
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
        "time": "9:00–9:20 AM",
        "title": "Architecting Productivity, and Why Human Skills Matter More Than Ever",
        "details": [
          "Barry Katz"
        ]
      },
      {
        "time": "9:20–9:45 AM",
        "title": "Fireside: Crossing the AI Frontier",
        "details": [
          "Zuzanna Stamirowska",
          "Maciej Kawecki"
        ]
      },
      {
        "time": "9:45–10:10 AM",
        "title": "Panel: Go-to-Market and Positioning for Deep Tech",
        "details": [
          "Michał Habdank-Kołaczkowski",
          "Hamid Farzaneh",
          "Michał Majerczak"
        ]
      },
      {
        "time": "10:10–10:30 AM",
        "title": "Coffee Break",
        "details": []
      },
      {
        "time": "10:30–10:50 AM",
        "title": "PolSV: What Comes After the Summit",
        "details": [
          "Agata Braja",
          "Hamid Farzaneh",
          "Anna Timofiejczuk"
        ]
      },
      {
        "time": "10:50–11:50 AM",
        "title": "Poster Session",
        "details": []
      },
      {
        "time": "11:05 AM–12:05 PM",
        "title": "Parallel: Technology Transfer Officers Meeting",
        "details": [
          "Soody Tronson",
          "Anna Timofiejczuk"
        ]
      },
      {
        "time": "11:50 AM–12:50 PM",
        "title": "Networking Lunch",
        "details": []
      },
      {
        "time": "12:50–1:20 PM",
        "title": "Panel: Demystifying Angel and VC Funding",
        "details": [
          "Hamid Farzaneh"
        ]
      },
      {
        "time": "1:20–2:25 PM",
        "title": "Startup Pitches, Session 1",
        "details": []
      },
      {
        "time": "2:25–2:40 PM",
        "title": "Break at the Poster Boards",
        "details": []
      },
      {
        "time": "2:40–3:45 PM",
        "title": "Startup Pitches, Session 2",
        "details": []
      },
      {
        "time": "3:45–3:55 PM",
        "title": "Investor Meeting Requests & Closing Remarks",
        "details": [
          "Piotr D. Moncarz"
        ]
      },
      {
        "time": "3:55–5:30 PM",
        "title": "Closing Reception",
        "details": []
      }
    ]
  }
];

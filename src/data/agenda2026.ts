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
};

// Per-speaker crop positions so small circular photos match the homepage cards.
export const agendaPhotoClasses: Record<string, string> = {
  "Mark Chandler": "object-[center_25%]",
  "Wojciech Balczun": "object-[42%_center]",
};

export type AgendaSession = { time: string; title: string; details: string[] };
export type AgendaDay = { id: string; day: string; date: string; venue: string; theme: string; sessions: AgendaSession[] };

// Schedule rows kept in the data below but not shown on the page.
// Remove an entry here to publish the row again.
export const hiddenSessions: Record<string, string[]> = {
  "day-4": [
    "1:10–1:40 PM | Plenary Session",
    "1:40–2:10 PM | Plenary Session",
    "2:10–2:40 PM | Plenary Session",
    "2:40–3:00 PM | Coffee Break",
    "3:00–4:00 PM | Interactive Session",
    "4:00–4:30 PM | Plenary Session",
    "4:30–4:45 PM | Summit Closing Remarks",
  ],
};

export const isHiddenSession = (dayId: string, session: AgendaSession) =>
  (hiddenSessions[dayId] ?? []).includes(`${session.time} | ${session.title}`);

export const agendaDays: AgendaDay[] = [
  {
    "id": "day-1",
    "day": "Day 1",
    "date": "Monday, November 9, 2026",
    "venue": "Stanford University",
    "theme": "Innovation, AI & Entrepreneurship",
    "sessions": [
      {
        "time": "8:00–9:00 AM",
        "title": "Registration & Networking",
        "details": []
      },
      {
        "time": "9:00–9:40 AM",
        "title": "Summit Opening Ceremony",
        "details": [
          "Piotr D. Moncarz",
          "Wojciech Balczun",
          "Dianne Taube",
          "Paul Marca"
        ]
      },
      {
        "time": "9:40–9:50 AM",
        "title": "The Silicon Valley Ecosystem",
        "details": [
          "Mark Chandler"
        ]
      },
      {
        "time": "9:50–10:15 AM",
        "title": "Entrepreneurial Journey",
        "details": [
          "Łukasz Kaiser",
          "Agata Braja"
        ]
      },
      {
        "time": "10:15–10:40 AM",
        "title": "Panel: The Aerospace Startup Conveyor Belt",
        "details": ["Tadeusz Uhl", "Nuri Capanoglu"]
      },
      {
        "time": "10:40–11:10 AM",
        "title": "Networking Activity & Coffee Break",
        "details": []
      },
      {
        "time": "11:10 AM–12:25 PM",
        "title": "Workshop: Innovation Readiness & Technology Readiness Levels",
        "details": ["Hamid Farzaneh"]
      },
      {
        "time": "12:25–1:30 PM",
        "title": "Networking Lunch",
        "details": []
      },
      {
        "time": "1:30–2:15 PM",
        "title": "Workshop: From Technology to Commercial Opportunity",
        "details": []
      },
      {
        "time": "2:15–2:35 PM",
        "title": "Entrepreneurial Journey",
        "details": [
          "Skip Ross"
        ]
      },
      {
        "time": "2:35–3:05 PM",
        "title": "Project Based Learning",
        "details": [
          "Renate Fruchter"
        ]
      },
      {
        "time": "3:05–3:30 PM",
        "title": "Plenary Session",
        "details": []
      },
      {
        "time": "3:30–3:55 PM",
        "title": "Plenary Session",
        "details": []
      },
      {
        "time": "3:55–4:10 PM",
        "title": "Networking Activity & Coffee Break",
        "details": []
      },
      {
        "time": "4:10–4:35 PM",
        "title": "Accountability & Practice Groups: Introductions and Goals",
        "details": []
      },
      {
        "time": "4:35–5:00 PM",
        "title": "Open Mic & Daily Feedback Poll",
        "details": []
      }
    ]
  },
  {
    "id": "day-2",
    "day": "Day 2",
    "date": "Tuesday, November 10, 2026",
    "venue": "University of California, Berkeley",
    "theme": "Space, Aviation & Energy",
    "sessions": [
      {
        "time": "8:00–9:00 AM",
        "title": "Registration & Networking",
        "details": []
      },
      {
        "time": "9:00–9:10 AM",
        "title": "Welcome & Opening Remarks",
        "details": [
          "Piotr D. Moncarz",
          "Shana Penn",
          "Julie Maigret Shapiro"
        ]
      },
      {
        "time": "9:10–9:50 AM",
        "title": "Welcome from CITRIS and the Banatao Institute & Opening Keynote",
        "details": [
          "Camille Crittenden"
        ]
      },
      {
        "time": "9:50–10:15 AM",
        "title": "Plenary Session",
        "details": []
      },
      {
        "time": "10:15–10:40 AM",
        "title": "Plenary Session",
        "details": []
      },
      {
        "time": "10:40–11:00 AM",
        "title": "Networking Activity & Coffee Break",
        "details": []
      },
      {
        "time": "11:00 AM–12:15 PM",
        "title": "Workshop: Pitching Your Innovation",
        "details": [
          "Darren Cooke",
          "Aggie Krajewska",
          "Agata Braja"
        ]
      },
      {
        "time": "12:15–1:15 PM",
        "title": "Networking Lunch",
        "details": []
      },
      {
        "time": "1:15–1:45 PM",
        "title": "Plenary Session",
        "details": []
      },
      {
        "time": "1:45–2:15 PM",
        "title": "Plenary Session",
        "details": []
      },
      {
        "time": "2:15–2:45 PM",
        "title": "Plenary Session",
        "details": []
      },
      {
        "time": "2:45–3:00 PM",
        "title": "Networking Activity & Coffee Break",
        "details": []
      },
      {
        "time": "3:00–4:30 PM",
        "title": "Workshop: Intellectual Property 101",
        "details": [
          "Soody Tronson"
        ]
      },
      {
        "time": "4:30–4:55 PM",
        "title": "Open Mic & Daily Feedback Poll",
        "details": []
      }
    ]
  },
  {
    "id": "day-3",
    "day": "Day 3",
    "date": "Wednesday, November 11, 2026",
    "venue": "San Francisco Airport Marriott Waterfront",
    "theme": "Commercialization, Capital & Strategic Partnerships",
    "sessions": [
      {
        "time": "8:00–9:00 AM",
        "title": "Registration & Networking",
        "details": []
      },
      {
        "time": "9:00–9:30 AM",
        "title": "Plenary Session",
        "details": [
          "Barry Katz"
        ]
      },
      {
        "time": "9:30–10:45 AM",
        "title": "Vertical Commercialization Labs",
        "details": []
      },
      {
        "time": "10:45–11:00 AM",
        "title": "Coffee Break",
        "details": []
      },
      {
        "time": "11:00–11:20 AM",
        "title": "Plenary Session",
        "details": [
          "Artur Chmielewski (tentative)"
        ]
      },
      {
        "time": "11:20 AM–12:20 PM",
        "title": "Startup Pitches",
        "details": []
      },
      {
        "time": "12:20–1:20 PM",
        "title": "Networking Lunch",
        "details": []
      },
      {
        "time": "1:20–2:00 PM",
        "title": "Angel Investor Panel",
        "details": []
      },
      {
        "time": "2:00–2:20 PM",
        "title": "Poland in Silicon Valley",
        "details": [
          "Piotr D. Moncarz",
          "Hamid Farzaneh",
          "Anna Timofiejczuk",
          "Agata Braja"
        ]
      },
      {
        "time": "2:20–2:50 PM",
        "title": "Interactive Session",
        "details": []
      },
      {
        "time": "2:50–3:25 PM",
        "title": "Venture Capital Panel",
        "details": []
      },
      {
        "time": "3:30–5:00 PM",
        "title": "Startup Pitches",
        "details": []
      },
      {
        "time": "5:00–7:00 PM",
        "title": "Polish Independence Day Reception",
        "details": []
      }
    ]
  },
  {
    "id": "day-4",
    "day": "Day 4",
    "date": "Thursday, November 12, 2026",
    "venue": "University of California, San Francisco (UCSF)",
    "theme": "Biomed & Life Sciences",
    "sessions": [
      {
        "time": "8:00–9:00 AM",
        "title": "Registration & Networking",
        "details": []
      },
      {
        "time": "9:00–9:30 AM",
        "title": "AI Instead of Humboldt",
        "details": [
          "Alojzy Z. Nowak (proposed)"
        ]
      },
      {
        "time": "9:30–9:50 AM",
        "title": "Medicine Discovery in the Age of AI",
        "details": [
          "Waldemar Priebe"
        ]
      },
      {
        "time": "9:50–10:10 AM",
        "title": "Wellbeing: From Art to Technology",
        "details": []
      },
      {
        "time": "10:10–10:40 AM",
        "title": "Crossing the AI Frontier",
        "details": [
          "Zuzanna Stamirowska",
          "Maciej Kawecki"
        ]
      },
      {
        "time": "10:40–11:10 AM",
        "title": "Networking Activity & Coffee Break",
        "details": []
      },
      {
        "time": "11:10–11:40 AM",
        "title": "Education for the Future",
        "details": [
          "Esther Wojcicki",
          "Michał Wyrębkowski"
        ]
      },
      {
        "time": "11:40 AM–12:10 PM",
        "title": "Virtual Cells: Science or Technology?",
        "details": []
      },
      {
        "time": "12:10–1:10 PM",
        "title": "Closing Remarks & Networking Lunch",
        "details": []
      },
      {
        "time": "1:10–1:40 PM",
        "title": "Plenary Session",
        "details": []
      },
      {
        "time": "1:40–2:10 PM",
        "title": "Plenary Session",
        "details": []
      },
      {
        "time": "2:10–2:40 PM",
        "title": "Plenary Session",
        "details": []
      },
      {
        "time": "2:40–3:00 PM",
        "title": "Coffee Break",
        "details": []
      },
      {
        "time": "3:00–4:00 PM",
        "title": "Interactive Session",
        "details": []
      },
      {
        "time": "4:00–4:30 PM",
        "title": "Plenary Session",
        "details": []
      },
      {
        "time": "4:30–4:45 PM",
        "title": "Summit Closing Remarks",
        "details": []
      }
    ]
  }
];

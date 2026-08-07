import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type Meta = { title: string; description: string };

const SITE = "TOP 1000 Innovators of Poland in Silicon Valley";

const ROUTE_META: Record<string, Meta> = {
  "/": {
    title: `${SITE} — Summit II, 9–12 November 2026`,
    description:
      "Summit II brings Poland's leading researchers, innovators and entrepreneurs to Stanford, UC Berkeley, UC San Francisco and Silicon Valley.",
  },
  "/2025": {
    title: `2025 Inaugural Summit — ${SITE}`,
    description:
      "The 2025 inaugural summit: the largest Polish tech and science delegation ever in Silicon Valley.",
  },
  "/2025/program": {
    title: "2025 Summit Program — TOP 1000 Innovators",
    description: "Full day-by-day program of the 2025 inaugural summit.",
  },
  "/2025/workshops": {
    title: "2025 Summit Workshops — TOP 1000 Innovators",
    description: "Workshop tracks, schedules and preparation materials for the 2025 summit.",
  },
  "/2025/lead-session": {
    title: "Lead a Session — TOP 1000 Innovators",
    description: "Propose and lead a session at the TOP 1000 Innovators summit.",
  },
  "/2025/eventify-app": {
    title: "Eventify App — TOP 1000 Innovators",
    description: "Get the Eventify app for the TOP 1000 Innovators summit.",
  },
  "/program": {
    title: "Program — TOP 1000 Innovators",
    description: "Day-by-day summit program.",
  },
  "/workshops": {
    title: "Workshops — TOP 1000 Innovators",
    description: "Workshop tracks, schedules and preparation materials.",
  },
  "/lead-session": {
    title: "Lead a Session — TOP 1000 Innovators",
    description: "Propose and lead a session at the summit.",
  },
  "/eventify-app": {
    title: "Eventify App — TOP 1000 Innovators",
    description: "Get the Eventify app for the summit.",
  },
  "/tickets": {
    title: "Tickets — TOP 1000 Innovators Summit II",
    description: "Purchase your ticket for Summit II, 9–12 November 2026 in Silicon Valley.",
  },
  "/suggest-speaker": {
    title: "Suggest a Speaker — TOP 1000 Innovators",
    description: "Nominate a speaker or workshop leader for Summit II.",
  },
  "/partner": {
    title: "Partner With Us — TOP 1000 Innovators",
    description: "Partnership and sponsorship opportunities for Summit II.",
  },
  "/contact": {
    title: "Contact Us — TOP 1000 Innovators",
    description: "Get in touch with the TOP 1000 Innovators summit team.",
  },
  "/sectors": {
    title: "Sectors — TOP 1000 Innovators",
    description: "Impact sectors represented at the summit.",
  },
  "/experts": {
    title: "Experts — TOP 1000 Innovators",
    description: "Experts and mentors supporting the summit.",
  },
  "/rsvp": {
    title: "RSVP — TOP 1000 Innovators",
    description: "Confirm your attendance at the summit.",
  },
  "/guest_rsvp": {
    title: "Guest RSVP — TOP 1000 Innovators",
    description: "Guest attendance confirmation for the summit.",
  },
  "/unsubscribe": {
    title: "Unsubscribe — TOP 1000 Innovators",
    description: "Manage your email preferences.",
  },
  "/auth": {
    title: "Sign In — TOP 1000 Innovators",
    description: "Sign in to the TOP 1000 Innovators administration area.",
  },
  "/admin": {
    title: "Admin — TOP 1000 Innovators",
    description: "Administration area for the TOP 1000 Innovators summit.",
  },
};

const FALLBACK: Meta = {
  title: `Page Not Found — ${SITE}`,
  description: "The page you are looking for could not be found.",
};

function setMeta(selector: string, attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

const RouteMeta = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
    const meta = ROUTE_META[path] ?? FALLBACK;

    document.title = meta.title;
    setMeta('meta[name="description"]', "name", "description", meta.description);
    setMeta('meta[property="og:title"]', "property", "og:title", meta.title);
    setMeta('meta[property="og:description"]', "property", "og:description", meta.description);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", meta.title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", meta.description);

    const url = `${window.location.origin}${path}`;
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;
    setMeta('meta[property="og:url"]', "property", "og:url", url);

    const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
    if (typeof gtag === "function") {
      gtag("event", "page_view", {
        page_path: path,
        page_location: window.location.href,
        page_title: meta.title,
      });
    }
  }, [pathname]);

  return null;
};

export default RouteMeta;

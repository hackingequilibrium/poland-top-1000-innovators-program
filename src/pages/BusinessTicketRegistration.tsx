import { Link } from "react-router-dom";
import polsvLogo from "@/assets/polsv-logo-color-dark-bg.svg.asset.json";

const participantDetails = [
  "Full name",
  "Job title",
  "Company or institutional affiliation",
  "Email address",
];

const BusinessTicketRegistration = () => (
  <div className="min-h-screen flex flex-col bg-[#002266] text-white font-sans">
    <header className="px-6 md:px-12 lg:px-[100px] pt-8">
      <div className="max-w-[900px] mx-auto flex flex-col items-center text-center gap-4">
        <Link to="/">
          <img src={polsvLogo.url} alt="PolSV" className="h-24 md:h-32 w-auto" />
        </Link>
        <h2 className="font-inter font-semibold text-sm md:text-lg uppercase tracking-tight text-white/80">
          Top 1000 Innovators of Poland in Silicon Valley
        </h2>
        <Link
          to="/"
          className="group inline-flex items-center gap-2 font-inter font-light text-sm text-white/60 hover:text-white transition-colors"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          Back to main site
        </Link>
      </div>
    </header>

    <main className="flex-1 px-6 md:px-12 lg:px-[100px] py-12 md:py-16">
      <div className="max-w-[720px] mx-auto">
        <h1 className="text-center font-inter font-extrabold text-3xl md:text-5xl uppercase tracking-tight mb-3">
          Business Ticket Registration
        </h1>
        <p className="text-center font-inter font-light text-sm md:text-base text-white mb-5">
          Join us for TOP 1000 Innovators of Poland in Silicon Valley, December 14–17, 2026.
        </p>
        <p className="text-center font-inter font-semibold text-xl md:text-2xl text-white mb-10">
          USD 6,499 per participant
        </p>

        <p className="font-inter font-light text-sm md:text-base text-white/80 leading-relaxed mb-10">
          Business ticket payments are made by bank transfer. To complete your registration,
          please follow the steps below.
        </p>

        <h2 className="font-inter font-bold text-xl md:text-2xl uppercase tracking-tight mb-4">
          1. Make your payment
        </h2>
        <p className="font-inter font-light text-sm md:text-base text-white/80 leading-relaxed mb-6">
          Transfer <span className="font-semibold text-white">USD 6,499 per ticket</span> using
          the following bank details:
        </p>

        <div className="rounded-lg border border-white/20 bg-white/5 px-6 py-6 mb-6 font-inter text-sm md:text-base font-light leading-relaxed text-white/80 space-y-5">
          <div>
            <p className="font-semibold text-white mb-1">Beneficiary</p>
            <p>
              Poland In Silicon Valley Center for Science, Innovation, and Entrepreneurship
              <br />
              2479 East Bayshore Road, Suite 210
              <br />
              Palo Alto, CA 94303
              <br />
              USA
            </p>
          </div>
          <div>
            <p className="font-semibold text-white mb-1">Bank</p>
            <p>
              Chase Bank
              <br />
              2846 Middlefield Road
              <br />
              Palo Alto, CA 94306
              <br />
              USA
            </p>
          </div>
          <div className="space-y-1">
            <p>
              <span className="font-semibold text-white">SWIFT code:</span> CHASUS33
            </p>
            <p>
              <span className="font-semibold text-white">ABA / Routing number:</span> 021000021
            </p>
            <p>
              <span className="font-semibold text-white">Account number:</span> 2905667133
            </p>
          </div>
        </div>

        <p className="font-inter font-light text-sm md:text-base text-white/80 leading-relaxed mb-10">
          Please include <span className="font-semibold text-white">“TOP 1000”</span> in the
          payment reference.
        </p>

        <h2 className="font-inter font-bold text-xl md:text-2xl uppercase tracking-tight mb-4">
          2. Send your confirmation and participant details
        </h2>
        <p className="font-inter font-light text-sm md:text-base text-white/80 leading-relaxed mb-4">
          Once you have made the transfer, please email{" "}
          <a
            href="mailto:info@polsv.org"
            className="underline underline-offset-2 hover:text-white transition-colors"
          >
            info@polsv.org
          </a>{" "}
          with your payment confirmation and the following details for each participant:
        </p>
        <ul className="font-inter font-light text-sm md:text-base text-white/80 leading-relaxed mb-6 space-y-1">
          {participantDetails.map((item) => (
            <li key={item} className="pl-6 -indent-6">
              <span className="inline-block w-6">•</span>
              {item}
            </li>
          ))}
        </ul>

        <p className="font-inter font-light text-sm md:text-base text-white/80 leading-relaxed mb-6">
          Our team will confirm your registration by email once payment has been received and
          matched to your participant details.
        </p>
        <p className="font-inter font-light text-sm md:text-base text-white/80 leading-relaxed mb-6">
          If you have any questions, please contact us at{" "}
          <a
            href="mailto:info@polsv.org"
            className="underline underline-offset-2 hover:text-white transition-colors"
          >
            info@polsv.org
          </a>
          .
        </p>
        <p className="font-inter font-light text-sm md:text-base text-white leading-relaxed">
          We look forward to welcoming you to Silicon Valley!
        </p>
      </div>
    </main>

    <footer className="px-6 md:px-12 lg:px-[100px] pb-10 text-[11px] text-white/30 tracking-wide">
      <Link to="/" className="hover:text-white transition-colors">
        Back to home
      </Link>
      <span className="mx-2">|</span>
      <Link to="/contact" className="hover:text-white transition-colors">
        Contact us
      </Link>
    </footer>
  </div>
);

export default BusinessTicketRegistration;

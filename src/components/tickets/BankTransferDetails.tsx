const participantDetails = [
  "Full name",
  "Job title",
  "Company or institutional affiliation",
  "Email address",
];

const p = "font-inter font-light text-sm md:text-base text-white/80 leading-relaxed";
const h = "font-inter font-bold text-xl md:text-2xl uppercase tracking-tight mb-4";

const Mail = () => (
  <a href="mailto:info@polsv.org" className="underline underline-offset-2 hover:text-white transition-colors">
    info@polsv.org
  </a>
);

const BankTransferDetails = ({ amount }: { amount: string }) => (
  <div>
    <h2 className={h}>1. Make your payment</h2>
    <p className={`${p} mb-6`}>
      Transfer <span className="font-semibold text-white">USD {amount} per ticket</span> using the
      following bank details:
    </p>

    <div className="rounded-lg border border-white/20 bg-white/5 px-6 py-6 mb-6 font-inter text-sm md:text-base font-light leading-relaxed text-white/80 space-y-5">
      <div>
        <p className="font-semibold text-white mb-1">Beneficiary</p>
        <p>
          Poland In Silicon Valley Center for Science, Innovation, and Entrepreneurship
          <br />2479 East Bayshore Road, Suite 210
          <br />Palo Alto, CA 94303
          <br />USA
        </p>
      </div>
      <div>
        <p className="font-semibold text-white mb-1">Bank</p>
        <p>
          Chase Bank
          <br />2846 Middlefield Road
          <br />Palo Alto, CA 94306
          <br />USA
        </p>
      </div>
      <div className="space-y-1">
        <p><span className="font-semibold text-white">SWIFT code:</span> CHASUS33</p>
        <p><span className="font-semibold text-white">ABA / Routing number:</span> 021000021</p>
        <p><span className="font-semibold text-white">Account number:</span> 2905667133</p>
      </div>
    </div>

    <p className={`${p} mb-10`}>
      Please include <span className="font-semibold text-white">“TOP 1000”</span> in the payment reference.
    </p>

    <h2 className={h}>2. Send your confirmation and participant details</h2>
    <p className={`${p} mb-4`}>
      Once you have made the transfer, please email <Mail /> with your payment confirmation and the
      following details for each participant:
    </p>
    <ul className={`${p} mb-6 space-y-1`}>
      {participantDetails.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="shrink-0">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
    <p className={`${p} mb-6`}>
      Our team will confirm your registration by email once payment has been received and matched to
      your participant details.
    </p>
    <p className={`${p} mb-6`}>
      If you have any questions, please contact us at <Mail />.
    </p>
    <p className="font-inter font-light text-sm md:text-base text-white leading-relaxed">
      We look forward to welcoming you to Silicon Valley!
    </p>
  </div>
);

export default BankTransferDetails;

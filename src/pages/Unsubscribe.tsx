import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

type State = "loading" | "valid" | "invalid" | "already" | "done";

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token") || "";
  const [state, setState] = useState<State>("loading");
  const [email, setEmail] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const validate = async () => {
      if (!token) {
        setState("invalid");
        return;
      }
      try {
        const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`;
        const res = await fetch(url, {
          headers: { apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY },
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok || data?.valid === false) {
          setState(data?.alreadyUnsubscribed ? "already" : "invalid");
          return;
        }
        if (data?.email) setEmail(data.email);
        setState(data?.alreadyUnsubscribed ? "already" : "valid");
      } catch {
        setState("invalid");
      }
    };
    validate();
  }, [token]);

  const confirm = async () => {
    setSubmitting(true);
    const { error } = await supabase.functions.invoke("handle-email-unsubscribe", {
      body: { token },
    });
    setSubmitting(false);
    setState(error ? "invalid" : "done");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#002266] text-white font-sans px-6">
      <div className="max-w-[520px] w-full text-center border border-white/15 bg-white/5 p-10">
        <h1 className="text-2xl font-light tracking-tight mb-4">Email preferences</h1>

        {state === "loading" && <p className="text-white/70">Checking your link…</p>}

        {state === "valid" && (
          <>
            <p className="text-white/70 mb-6">
              {email ? `Unsubscribe ${email} from` : "Unsubscribe from"} emails from TOP 1000
              Innovators of Poland in Silicon Valley?
            </p>
            <Button
              onClick={confirm}
              disabled={submitting}
              className="rounded-none bg-white text-[#002266] hover:bg-white/90"
            >
              {submitting ? "Processing…" : "Confirm unsubscribe"}
            </Button>
          </>
        )}

        {state === "already" && (
          <p className="text-white/70">You're already unsubscribed. No further emails will be sent.</p>
        )}

        {state === "done" && (
          <p className="text-white/70">You've been unsubscribed. Sorry to see you go.</p>
        )}

        {state === "invalid" && (
          <p className="text-white/70">This unsubscribe link is invalid or has expired.</p>
        )}
      </div>
    </div>
  );
};

export default Unsubscribe;

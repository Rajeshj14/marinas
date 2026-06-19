"use client";

import { useEffect, useRef, useState } from "react";

type Form = { name: string; email: string; phone: string; concern: string };
type Status = "idle" | "loading" | "error";

export function BookingModal() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<Form>({ name: "", email: "", phone: "", concern: "" });
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const firstRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function openModal(e: Event) {
      const target = (e as MouseEvent).target as HTMLElement;
      const link = target.closest('a[href="#book"]');
      if (link) {
        e.preventDefault();
        setSubmitted(false);
        setOpen(true);
      }
    }
    document.addEventListener("click", openModal);
    return () => document.removeEventListener("click", openModal);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setTimeout(() => firstRef.current?.focus(), 60);
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function change(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function submit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "Hernia-LP",
          name: form.name,
          phone: form.phone,
          email: form.email,
          concern: form.concern,
          pageUrl: window.location.href,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setStatus("idle");
    }
  }

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && setOpen(false)}>
      <div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="modal-close" onClick={() => setOpen(false)} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {submitted ? (
          <div className="modal-success">
            <div className="modal-success-icon">✓</div>
            <h3>We&apos;ll be in touch soon!</h3>
            <p>Thank you. Dr. Preethi Mrinalini&apos;s team will contact you within 24 hours to confirm your consultation.</p>
            <button className="btn" style={{ marginTop: 24 }} onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <span className="eyebrow" style={{ marginBottom: 8 }}>Book a consultation</span>
              <h2 id="modal-title" className="modal-title">Get clarity on your condition</h2>
              <p className="modal-sub">Rs.800 · Reviewed personally by Dr. Preethi Mrinalini</p>
            </div>

            <form className="modal-form" onSubmit={submit} noValidate>
              <div className="modal-field">
                <label className="modal-label" htmlFor="m-name">Full name</label>
                <input
                  ref={firstRef}
                  id="m-name"
                  className="modal-input"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={change}
                  required
                />
              </div>

              <div className="modal-field">
                <label className="modal-label" htmlFor="m-phone">Phone number</label>
                <input
                  id="m-phone"
                  className="modal-input"
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={change}
                  required
                />
              </div>

              <div className="modal-field">
                <label className="modal-label" htmlFor="m-email">Email address</label>
                <input
                  id="m-email"
                  className="modal-input"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={change}
                  required
                />
              </div>

              <div className="modal-field">
                <label className="modal-label" htmlFor="m-concern">Your concern</label>
                <textarea
                  id="m-concern"
                  className="modal-input modal-textarea"
                  name="concern"
                  placeholder="Briefly describe your symptoms or what you'd like to discuss..."
                  value={form.concern}
                  onChange={change}
                  rows={2}
                />
              </div>

              {errorMsg && <p className="modal-error">{errorMsg}</p>}
              <button type="submit" className="btn modal-submit" disabled={status === "loading"}>
                {status === "loading" ? "Sending…" : "Request my consultation slot"}
              </button>
              <p className="modal-fine">We will call you to confirm the appointment time.</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

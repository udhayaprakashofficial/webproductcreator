"use client";

import { useActionState, useEffect, useRef } from "react";
import {
  submitInquiry,
  type InquiryState,
} from "@/app/actions/inquiry";

const initialState: InquiryState = {
  ok: false,
  message: "",
};

function fieldClass(hasError?: string) {
  return `field ${hasError ? "!border-accent ring-2 ring-accent/20" : ""}`;
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitInquiry,
    initialState,
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.ok) formRef.current?.reset();
  }, [state.ok]);

  return (
    <form
      key={state.ok ? "sent" : "form"}
      ref={formRef}
      action={formAction}
      className="grid gap-4 rounded-2xl border border-line bg-bg-card p-6 sm:p-8"
    >
      <h3 className="font-display text-2xl font-bold">
        Let&apos;s start a conversation
      </h3>

      <label className="grid gap-1.5 text-sm font-semibold">
        Your name
        <input
          name="name"
          required
          minLength={2}
          defaultValue={state.values?.name ?? ""}
          className={fieldClass(state.errors?.name)}
          placeholder="Full name"
        />
        {state.errors?.name && (
          <span className="text-xs text-accent">{state.errors.name}</span>
        )}
      </label>

      <label className="grid gap-1.5 text-sm font-semibold">
        Email or phone
        <input
          name="contact"
          required
          minLength={3}
          defaultValue={state.values?.contact ?? ""}
          className={fieldClass(state.errors?.contact)}
          placeholder="you@company.com or mobile"
        />
        {state.errors?.contact && (
          <span className="text-xs text-accent">{state.errors.contact}</span>
        )}
      </label>

      <label className="grid gap-1.5 text-sm font-semibold">
        What do you need?
        <select
          name="need"
          className={fieldClass(state.errors?.need)}
          defaultValue={state.values?.need || "Both"}
        >
          <option>Digital marketing</option>
          <option>Website or web app</option>
          <option>SaaS development</option>
          <option>Both</option>
        </select>
      </label>

      <label className="grid gap-1.5 text-sm font-semibold">
        Project details
        <textarea
          name="message"
          required
          minLength={3}
          defaultValue={state.values?.message ?? ""}
          className={`${fieldClass(state.errors?.message)} min-h-[120px] resize-y`}
          placeholder="Business type, goals, timeline"
        />
        {state.errors?.message && (
          <span className="text-xs text-accent">{state.errors.message}</span>
        )}
      </label>

      <button type="submit" disabled={pending} className="btn w-full">
        {pending ? "Sending…" : "Send"}
      </button>

      {state.message && (
        <p
          role="status"
          className={`text-sm ${state.ok ? "text-white" : "text-accent"}`}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}

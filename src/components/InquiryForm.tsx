"use client";

import { useActionState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  submitInquiry,
  type InquiryState,
} from "@/app/actions/inquiry";
import { SocialLinks } from "./SocialLinks";

const initialState: InquiryState = {
  ok: false,
  message: "",
};

function fieldClass(hasError?: string) {
  return `field ${hasError ? "!border-rust ring-2 ring-rust/20" : ""}`;
}

export function InquiryForm() {
  const [state, formAction, pending] = useActionState(
    submitInquiry,
    initialState,
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.ok) {
      formRef.current?.reset();
    }
  }, [state.ok]);

  return (
    <section id="contact" className="bg-plum py-16 text-[#f0ebe8] sm:py-24">
      <div className="wrap grid items-start gap-12 lg:grid-cols-2 lg:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display max-w-[16ch] text-[clamp(2rem,5vw,3.4rem)] font-extrabold">
            Tell us what you want to build.
          </h2>
          <p className="mt-4 max-w-[48ch] text-[#d8c6d2]">
            Share a few details and we will reply with ideas and next steps.
            Prefer to talk? Email or message us.
          </p>
          <p className="mt-7 text-[#d8c6d2]">
            Email:{" "}
            <a
              href="mailto:webproductcreator@gmail.com"
              className="text-[#f0ebe8] underline-offset-4 hover:underline"
            >
              webproductcreator@gmail.com
            </a>
            <br />
            Phone:{" "}
            <a
              href="tel:+916382166740"
              className="text-[#f0ebe8] underline-offset-4 hover:underline"
            >
              +91 6382166740
            </a>
          </p>
          <div className="mt-6">
            <p className="mb-3 text-sm font-semibold text-[#f0ebe8]">
              Follow us
            </p>
            <SocialLinks iconClassName="border-white/20 text-[#f0ebe8] hover:border-orange hover:text-orange" />
          </div>
        </motion.div>

        <motion.form
          key={state.ok ? "sent" : "form"}
          ref={formRef}
          action={formAction}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-3.5 rounded-[6px_28px_6px_28px] border border-line bg-surface p-7 text-ink sm:p-8"
        >
          <label className="grid gap-1.5 text-[15px] font-bold">
            Your name
            <input
              name="name"
              required
              minLength={2}
              autoComplete="name"
              defaultValue={state.values?.name ?? ""}
              className={fieldClass(state.errors?.name)}
              placeholder="Full name"
            />
            {state.errors?.name && (
              <span className="text-xs font-medium text-rust">
                {state.errors.name}
              </span>
            )}
          </label>

          <label className="grid gap-1.5 text-[15px] font-bold">
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
              <span className="text-xs font-medium text-rust">
                {state.errors.contact}
              </span>
            )}
          </label>

          <label className="grid gap-1.5 text-[15px] font-bold">
            What do you need?
            <select
              name="need"
              className={fieldClass(state.errors?.need)}
              defaultValue={state.values?.need || "Both"}
            >
              <option>Website or web app</option>
              <option>Digital marketing</option>
              <option>Software development</option>
              <option>Both</option>
            </select>
            {state.errors?.need && (
              <span className="text-xs font-medium text-rust">
                {state.errors.need}
              </span>
            )}
          </label>

          <label className="grid gap-1.5 text-[15px] font-bold">
            Project details
            <textarea
              name="message"
              required
              minLength={3}
              defaultValue={state.values?.message ?? ""}
              className={`${fieldClass(state.errors?.message)} min-h-[110px] resize-y`}
              placeholder="Business type, goals, timeline"
            />
            {state.errors?.message && (
              <span className="text-xs font-medium text-rust">
                {state.errors.message}
              </span>
            )}
          </label>

          <button type="submit" disabled={pending} className="btn mt-1 w-full">
            {pending ? "Sending…" : "Send enquiry"}
          </button>

          {state.message && (
            <p
              role="status"
              className={`text-sm ${state.ok ? "text-violet" : "text-rust"}`}
            >
              {state.message}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

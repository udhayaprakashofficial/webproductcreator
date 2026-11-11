"use client";

import { motion } from "framer-motion";

const points = [
  {
    title: "Built and marketed together",
    text: "Most agencies do one or the other. We do both, so nothing gets lost between the website and the campaign.",
  },
  {
    title: "Clear conversation first",
    text: "No pricing pressure until goals are clear. You get a written plan before work starts.",
  },
  {
    title: "Made for search and speed",
    text: "Every site we build is mobile-first and structured to rank — and to convert.",
  },
  {
    title: "Plain-language reporting",
    text: "You see what was done, what moved, and what to improve next — without jargon.",
  },
  {
    title: "Direct contact",
    text: "You talk to the people doing the work, not a rotating account manager.",
  },
  {
    title: "One stack, fewer handoffs",
    text: "Marketing, websites and software share the same product thinking from day one.",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="relative overflow-hidden py-16 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-cream/80 to-transparent"
      />

      <div className="wrap relative grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:sticky lg:top-28"
        >
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-orange">
            <span className="inline-block h-2 w-2 rotate-45 bg-violet" />
            Why us
          </p>
          <h2 className="font-display mt-4 max-w-[13ch] text-[clamp(2rem,5vw,3.4rem)] font-extrabold leading-[1.05] text-ink">
            Built and marketed by the same people.
          </h2>
          <p className="mt-5 max-w-[38ch] text-[1.05rem] leading-relaxed text-muted">
            Strategy, design, engineering and growth sit in one team — so your
            brand story, product experience and campaigns stay aligned.
          </p>
          <a href="#contact" className="btn mt-8">
            Talk to us
          </a>
        </motion.div>

        <dl className="m-0 grid gap-3 sm:grid-cols-2 sm:gap-4">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="rounded-[14px] border border-line/80 bg-surface/70 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-orange/30 hover:bg-surface hover:shadow-[0_18px_40px_-28px_rgba(48,10,40,0.4)] sm:p-6"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="font-display text-xs font-bold tracking-[0.14em] text-orange">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-line to-transparent" />
              </div>
              <dt className="font-display text-[1.15rem] font-extrabold leading-snug text-ink sm:text-[1.2rem]">
                {p.title}
              </dt>
              <dd className="mt-2 text-[0.95rem] leading-relaxed text-muted">
                {p.text}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Logo3D } from "./Logo3D";

const floats = [
  {
    title: "Campaign live",
    value: "+38% leads",
    meta: "Paid · SEO · Social",
    className: "left-0 top-4 sm:left-2 sm:top-8",
    delay: 0.35,
  },
  {
    title: "Product sprint",
    value: "Build → Launch",
    meta: "Web · Apps · APIs",
    className: "right-0 top-[28%] sm:right-1",
    delay: 0.45,
  },
  {
    title: "Conversion",
    value: "2.4× uplift",
    meta: "Site + funnel synced",
    className: "bottom-6 left-[8%] sm:bottom-10 sm:left-6",
    delay: 0.55,
  },
];

export function Hero() {
  return (
    <section id="top" className="hero-glow overflow-hidden pb-12 pt-12 sm:pb-16 sm:pt-16">
      <div className="wrap grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex max-w-full items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-[12px] font-semibold tracking-[0.02em] text-violet sm:text-[13px]"
          >
            <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-orange" />
            Digital marketing and SaaS development service
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display mt-5 max-w-[13ch] text-[clamp(2.4rem,6.5vw,5.2rem)] font-extrabold leading-[0.98]"
          >
            We build your product, then bring the customers.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="mt-6 max-w-[42ch] text-[clamp(1.05rem,2vw,1.25rem)] text-muted"
          >
            Web Product Creator is one team for digital marketing, website
            development, and software. The people who build your product also
            plan how it gets found.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3.5"
          >
            <a href="#contact" className="btn">
              Start your project
            </a>
            <a href="#services" className="btn btn-alt">
              See what we do
            </a>
          </motion.div>
        </div>

        {/* Digital right panel */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-[540px]"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-violet/20 via-transparent to-orange/20 blur-2xl" />

          <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-surface/80 p-3 shadow-[0_30px_80px_-40px_rgba(48,10,40,0.55)] backdrop-blur sm:p-4">
            <div className="mb-3 flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-orange" />
                <span className="h-2.5 w-2.5 rounded-full bg-lilac" />
                <span className="h-2.5 w-2.5 rounded-full bg-violet" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
                Live product stack
              </span>
            </div>

            <div className="relative overflow-hidden rounded-[1.25rem] bg-gradient-to-b from-cream to-bg">
              <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(133,84,192,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,90,52,0.1)_1px,transparent_1px)] [background-size:28px_28px]" />

              <div className="relative min-h-[320px] sm:min-h-[380px]">
                <Logo3D className="relative mx-auto h-[300px] w-full sm:h-[360px]" />

                {floats.map((card) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: card.delay, duration: 0.55 }}
                    className={`absolute z-20 max-w-[160px] rounded-2xl border border-white/70 bg-surface/95 p-3 shadow-[0_16px_40px_-20px_rgba(48,10,40,0.5)] backdrop-blur ${card.className}`}
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
                      {card.title}
                    </p>
                    <p className="font-display mt-1 text-[1.05rem] font-extrabold text-ink">
                      {card.value}
                    </p>
                    <p className="mt-1 text-[11px] text-muted">{card.meta}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2 px-1">
              {[
                { label: "Marketing", tone: "text-violet" },
                { label: "Website", tone: "text-lilac" },
                { label: "Software", tone: "text-orange" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-line bg-bg/70 px-2 py-2 text-center"
                >
                  <p className={`text-[11px] font-bold ${item.tone}`}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

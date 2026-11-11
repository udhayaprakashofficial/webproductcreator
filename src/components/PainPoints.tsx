"use client";

import { motion } from "framer-motion";

const challenges = [
  {
    accent: "from-violet to-lilac",
    title: "Customers never discover you",
    text: "If you rarely show up on Google or social, the right people never reach your offer. We fix visibility with SEO, content and paid reach.",
    cta: "Get discovered",
    href: "#services",
  },
  {
    accent: "from-lilac to-orange",
    title: "Attention does not turn into sales",
    text: "Visits and likes mean little without a clear next step. We connect campaigns to landing pages and follow-ups that create real enquiries.",
    cta: "Improve conversion",
    href: "#contact",
  },
  {
    accent: "from-orange to-rust",
    title: "Your website works against you",
    text: "Slow load times, unclear offers or outdated design push buyers away. We rebuild sites that feel trustworthy and convert on every device.",
    cta: "Rebuild my site",
    href: "#services",
  },
  {
    accent: "from-rust to-deep",
    title: "Day-to-day work is stuck in chaos",
    text: "Spreadsheets, manual follow-ups and scattered tools waste hours. We build practical software that keeps delivery and reporting in one place.",
    cta: "Simplify the work",
    href: "#contact",
  },
];

export function PainPoints() {
  return (
    <section id="problems" className="relative overflow-hidden bg-plum py-16 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-violet/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-orange/20 blur-3xl"
      />

      <div className="wrap relative">
        <div className="grid items-end gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-lilac">
              <span className="inline-block h-2 w-2 rotate-45 bg-orange" />
              Growth blockers
            </p>
            <h2 className="font-display mt-4 max-w-[14ch] text-[clamp(2rem,5vw,3.35rem)] font-extrabold text-[#f0ebe8]">
              What is getting in the way of growth?
            </h2>
            <p className="mt-4 max-w-[38ch] text-[#d8c6d2]">
              Skip the jargon. Point to the friction that feels most familiar —
              then we map marketing, web or software to fix it.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-[42ch] text-sm text-[#c9b6c2] lg:justify-self-end lg:text-right"
          >
            Most teams do not need “more digital.” They need the one bottleneck
            removed — discovery, conversion, trust, or operations.
          </motion.p>
        </div>

        <div
          className="mt-12 grid gap-4 sm:grid-cols-2"
          style={{ perspective: "1100px" }}
        >
          {challenges.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="group relative overflow-hidden rounded-[8px_28px_8px_28px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_50px_-30px_rgba(0,0,0,0.75)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-orange/40 hover:bg-white/[0.07] sm:p-7"
              onPointerMove={(e) => {
                if (!window.matchMedia("(hover: hover)").matches) return;
                const el = e.currentTarget;
                const b = el.getBoundingClientRect();
                const x = (e.clientX - b.left) / b.width - 0.5;
                const y = (e.clientY - b.top) / b.height - 0.5;
                el.style.transform = `translateY(-4px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg)`;
              }}
              onPointerLeave={(e) => {
                e.currentTarget.style.transform = "";
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className={`mb-5 h-1.5 w-14 rounded-full bg-gradient-to-r ${item.accent}`}
              />
              <h3 className="font-display text-[1.45rem] font-extrabold leading-tight text-[#f0ebe8] sm:text-[1.55rem]">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#d8c6d2]">
                {item.text}
              </p>
              <a
                href={item.href}
                className="mt-6 inline-flex items-center gap-2 text-[15px] font-bold text-orange transition group-hover:gap-3 group-hover:text-lilac"
              >
                {item.cta}
                <span
                  aria-hidden
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-orange/15 text-sm"
                >
                  →
                </span>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

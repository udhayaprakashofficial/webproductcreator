"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const industries = [
  {
    title: "Music Education",
    text: "Schools, tutors and academies growing enrolments with clearer offers and simple booking journeys.",
    code: "01",
    image:
      "https://images.unsplash.com/photo-1514320291840-b9a56d1c2e20?auto=format&fit=crop&w=900&q=80",
    accent: "from-violet/90 via-plum/70 to-plum/95",
  },
  {
    title: "Interior Design & Home Decor",
    text: "Studios and retailers that sell through strong visuals, local search and polished websites.",
    code: "02",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80",
    accent: "from-lilac/80 via-plum/65 to-plum/95",
  },
  {
    title: "Construction & Engineering",
    text: "Project-led firms needing clear service pages, scope storytelling and trusted lead capture.",
    code: "03",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
    accent: "from-orange/85 via-rust/70 to-plum/95",
  },
  {
    title: "Building Materials & Supplies",
    text: "Suppliers and dealers growing through product discovery, dealer journeys and B2B enquiries.",
    code: "04",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80",
    accent: "from-rust/80 via-deep/75 to-plum/95",
  },
  {
    title: "SaaS & Technology",
    text: "Product teams aligning websites, onboarding and growth loops with how the software sells.",
    code: "05",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
    accent: "from-plum/90 via-violet/70 to-plum/95",
  },
];

function IndustryCard({ item }: { item: (typeof industries)[number] }) {
  return (
    <article className="group relative h-[420px] w-[300px] shrink-0 overflow-hidden rounded-[1.75rem] border border-white/10 bg-plum shadow-[0_24px_50px_-28px_rgba(0,0,0,0.65)] sm:h-[460px] sm:w-[360px]">
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="360px"
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      <div
        className={`absolute inset-0 bg-gradient-to-t ${item.accent}`}
      />

      <div className="relative flex h-full flex-col p-6 sm:p-7">
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-bold tracking-[0.16em] text-white backdrop-blur-sm">
            {item.code}
          </span>
          <span className="h-2 w-2 rotate-45 bg-orange" />
        </div>

        <div className="mt-auto">
          <h3 className="font-display text-[1.55rem] font-extrabold leading-tight text-white sm:text-[1.7rem]">
            {item.title}
          </h3>
          <p className="mt-3 max-w-[28ch] text-[14px] leading-relaxed text-white/80 sm:text-[15px]">
            {item.text}
          </p>
          <div className="mt-5 h-1 w-14 rounded-full bg-gradient-to-r from-orange to-lilac transition-all duration-300 group-hover:w-24" />
        </div>
      </div>
    </article>
  );
}

export function Industries() {
  const loop = [...industries, ...industries];

  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-plum py-16 text-[#f0ebe8] sm:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 top-10 h-64 w-64 rounded-full bg-violet/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-orange/25 blur-3xl"
      />

      <div className="wrap relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-lilac">
              <span className="h-2 w-2 rotate-45 bg-orange" />
              Current client industries
            </p>
            <h2 className="font-display mt-4 text-[clamp(2rem,5vw,3.3rem)] font-extrabold">
              Sectors we already understand.
            </h2>
            <p className="mt-4 max-w-[40ch] text-[#d8c6d2]">
              Real industries, real context — shown as they move through the
              work we ship every week.
            </p>
          </motion.div>

          <p className="text-sm text-[#c9b6c2]">
            Photo reel · scrolls right → left
          </p>
        </div>
      </div>

      <div className="relative mt-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-plum to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-plum to-transparent sm:w-28" />

        <div className="industries-track flex w-max gap-5 py-2 pl-6 sm:gap-6 sm:pl-10">
          {loop.map((item, i) => (
            <IndustryCard key={`${item.code}-${i}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

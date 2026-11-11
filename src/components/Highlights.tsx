"use client";

import { motion } from "framer-motion";

const items = [
  {
    tag: "Marketing",
    title: "Campaigns that feed the product",
    text: "SEO, ads and content planned around the same journeys your website and software already support.",
  },
  {
    tag: "Web",
    title: "Sites built to convert",
    text: "Clear structure, fast pages and messaging that matches how you actually sell.",
  },
  {
    tag: "Software",
    title: "Tools that remove friction",
    text: "Dashboards, portals and automations that keep growth work from living in spreadsheets.",
  },
];

export function Highlights() {
  return (
    <section className="border-y border-line bg-cream py-16 sm:py-20">
      <div className="wrap">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display max-w-[16ch] text-[clamp(2rem,5vw,3rem)] font-extrabold"
        >
          Where the work compounds.
        </motion.h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="rounded-[6px_24px_6px_24px] border border-line bg-surface p-6 shadow-[0_20px_36px_-28px_rgba(48,10,40,0.55)]"
            >
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-orange">
                {item.tag}
              </span>
              <h3 className="font-display mt-3 text-[1.35rem] font-extrabold">
                {item.title}
              </h3>
              <p className="mt-2 text-[15px] text-muted">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

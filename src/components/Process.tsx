"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Discover",
    text: "We learn your business, customers and goals, then agree on scope and direction.",
  },
  {
    title: "Design",
    text: "You review layouts, messaging and flows before any code or ad spend.",
  },
  {
    title: "Build and launch",
    text: "We develop, test and publish your product, and set up your campaigns.",
  },
  {
    title: "Grow",
    text: "We track results and improve what brings in the most enquiries and revenue.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-plum py-16 text-[#f0ebe8] sm:py-24">
      <div className="wrap">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display max-w-[18ch] text-[clamp(2rem,5vw,3.4rem)] font-extrabold"
        >
          How a project runs.
        </motion.h2>
        <p className="mt-4 max-w-[56ch] text-[#d8c6d2]">
          Four steps, with a clear deliverable at the end of each.
        </p>

        <ol className="mt-12 grid list-none gap-5 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="step-panel"
            >
              <span className="font-display block text-[40px] font-extrabold text-orange">
                {i + 1}
              </span>
              <h3 className="font-display mt-1.5 text-[22px] font-extrabold text-[#f0ebe8]">
                {step.title}
              </h3>
              <p className="mt-2 text-base text-[#d8c6d2]">{step.text}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

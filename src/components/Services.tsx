"use client";

import { motion } from "framer-motion";
import { TiltCard } from "./TiltCard";

const services = [
  {
    side: "Demand side",
    sideTone: "bg-violet/10 text-violet",
    title: "Digital marketing",
    accent: "accent-violet",
    bullet: "",
    summary:
      "Campaigns that put your business in front of the people searching for it.",
    items: [
      "Search engine optimisation (SEO)",
      "Facebook and Instagram ads",
      "Google Ads and local search",
      "Social media content and management",
      "Email journeys and lifecycle campaigns",
      "Video ads and brand creatives",
    ],
  },
  {
    side: "The bridge",
    sideTone: "bg-lilac/15 text-plum",
    title: "Website development",
    accent: "accent-lilac",
    bullet: "orange",
    summary:
      "Fast, polished websites and landing experiences built to convert visitors.",
    items: [
      "Business websites and brand sites",
      "High-converting landing pages",
      "CMS setups for easy updates",
      "UI/UX design and accessibility",
      "Speed, SEO foundations, and polish",
      "Ongoing iteration after launch",
    ],
  },
  {
    side: "Product side",
    sideTone: "bg-orange/10 text-rust",
    title: "Software development",
    accent: "accent-orange",
    bullet: "orange",
    summary:
      "Web apps and business tools built to be fast, secure and easy to grow.",
    items: [
      "Custom web applications and dashboards",
      "E-commerce and booking systems",
      "Mobile-friendly apps and API integrations",
      "MVP builds for new product ideas",
      "Automation and internal tools",
      "Maintenance, hosting and support",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="wrap">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display max-w-[18ch] text-[clamp(2rem,5vw,3.4rem)] font-extrabold"
        >
          Marketing on one side. Software on the other.
        </motion.h2>
        <p className="lead mt-4 max-w-[56ch] text-muted">
          Digital marketing creates demand. Software runs the product. Website
          development connects both — so growth and delivery stay aligned.
        </p>

        <div
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          style={{ perspective: "1200px" }}
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
            >
              <TiltCard className={`h-full ${service.accent}`}>
                <span
                  className={`mb-4 inline-flex rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] ${service.sideTone}`}
                >
                  {service.side}
                </span>
                <h3 className="font-display mb-3 text-[1.7rem] font-extrabold sm:text-[1.85rem]">
                  {service.title}
                </h3>
                <p className="text-[15px] text-muted sm:text-base">
                  {service.summary}
                </p>
                <ul className="mt-5 list-none p-0">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className={`diamond-bullet text-[15px] ${service.bullet}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

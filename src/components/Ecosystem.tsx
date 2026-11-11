"use client";

import { motion } from "framer-motion";

const marketing = [
  { label: "SEO", x: "8%", y: "22%", icon: "search" },
  { label: "Social", x: "2%", y: "52%", icon: "social" },
  { label: "Ads", x: "18%", y: "78%", icon: "ads" },
  { label: "Content", x: "28%", y: "12%", icon: "content" },
  { label: "Local SEO", x: "32%", y: "62%", icon: "pin" },
];

const software = [
  { label: "Web apps", x: "72%", y: "18%", icon: "code" },
  { label: "Dashboards", x: "88%", y: "38%", icon: "grid" },
  { label: "APIs", x: "78%", y: "68%", icon: "api" },
  { label: "Automation", x: "92%", y: "72%", icon: "auto" },
  { label: "E‑commerce", x: "66%", y: "88%", icon: "bag" },
];

const points = [
  {
    title: "Marketing finds demand",
    text: "SEO, paid, social and content bring the right people to your brand.",
  },
  {
    title: "Software holds the experience",
    text: "Sites, apps and tools turn attention into enquiries, bookings and repeat use.",
  },
  {
    title: "One team connects both",
    text: "No handoff gap — campaigns and product decisions stay in the same plan.",
  },
];

function NodeIcon({ type }: { type: string }) {
  const common = {
    viewBox: "0 0 24 24",
    className: "h-4 w-4",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (type) {
    case "search":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
      );
    case "social":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="3.5" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
        </svg>
      );
    case "ads":
      return (
        <svg {...common}>
          <path d="M4 10v4M8 7v10M12 4v16M16 8v8M20 11v2" />
        </svg>
      );
    case "content":
      return (
        <svg {...common}>
          <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case "code":
      return (
        <svg {...common}>
          <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16" />
        </svg>
      );
    case "grid":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
        </svg>
      );
    case "api":
      return (
        <svg {...common}>
          <path d="M8 12h8M12 8v8M7 7l10 10M17 7 7 17" />
        </svg>
      );
    case "auto":
      return (
        <svg {...common}>
          <path d="M4 12a8 8 0 0 1 13-5.3M20 12a8 8 0 0 1-13 5.3" />
          <path d="M17 3v4h4M7 21v-4H3" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M6 7h12v12H6zM9 3h6v4H9z" />
        </svg>
      );
  }
}

function OrbitNode({
  label,
  x,
  y,
  icon,
  side,
  delay,
}: {
  label: string;
  x: string;
  y: string;
  icon: string;
  side: "marketing" | "software";
  delay: number;
}) {
  const isMarketing = side === "marketing";
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, type: "spring", stiffness: 180, damping: 16 }}
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: x, top: y }}
    >
      <div
        className={`flex min-w-[5.6rem] flex-col items-center gap-1.5 rounded-2xl border bg-surface px-2.5 py-2.5 shadow-[0_14px_30px_-18px_rgba(48,10,40,0.45)] ${
          isMarketing
            ? "border-violet/25 text-violet"
            : "border-orange/30 text-orange"
        }`}
      >
        <span
          className={`inline-flex h-9 w-9 items-center justify-center rounded-full ${
            isMarketing ? "bg-violet/10" : "bg-orange/10"
          }`}
        >
          <NodeIcon type={icon} />
        </span>
        <span className="text-[11px] font-bold text-ink">{label}</span>
      </div>
    </motion.div>
  );
}

export function Ecosystem() {
  return (
    <section id="ecosystem" className="relative overflow-hidden bg-cream py-16 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute left-[12%] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-violet/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[18%] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-orange/15 blur-3xl"
      />

      <div className="wrap relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        {/* Diagram */}
        <div className="relative mx-auto aspect-square w-full max-w-[560px]">
          {/* Split rings: marketing left (violet), software right (orange) */}
          <div className="absolute inset-[8%] rounded-full border border-dashed border-violet/25" />
          <div className="absolute inset-[22%] rounded-full border border-dashed border-line" />
          <div className="absolute inset-[36%] rounded-full border border-dashed border-orange/30" />

          {/* Hemisphere tints */}
          <div className="absolute inset-[8%] overflow-hidden rounded-full">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-violet/10 to-transparent" />
            <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-orange/10 to-transparent" />
          </div>

          {/* Side labels */}
          <div className="absolute left-0 top-3 rounded-full bg-violet px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-sm sm:top-6">
            Digital marketing
          </div>
          <div className="absolute right-0 top-3 rounded-full bg-orange px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#1d0618] shadow-sm sm:top-6">
            Software development
          </div>

          {/* Bridge chip */}
          <div className="absolute bottom-2 left-1/2 z-20 -translate-x-1/2 rounded-full border border-lilac/40 bg-surface px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-plum shadow-sm">
            Website as the bridge
          </div>

          {marketing.map((n, i) => (
            <OrbitNode key={n.label} {...n} side="marketing" delay={0.05 + i * 0.05} />
          ))}
          {software.map((n, i) => (
            <OrbitNode key={n.label} {...n} side="software" delay={0.08 + i * 0.05} />
          ))}

          {/* Core */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute left-1/2 top-1/2 z-10 flex h-[132px] w-[132px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-line bg-surface text-center shadow-[0_20px_50px_-20px_rgba(133,84,192,0.55)] sm:h-[150px] sm:w-[150px]"
          >
            <span className="mb-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet to-orange text-white">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                <path d="M13 3 4 14h7l-1 7 10-12h-7l1-6z" />
              </svg>
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
              Your brand
            </span>
            <span className="font-display text-sm font-extrabold text-ink">
              Growth core
            </span>
          </motion.div>
        </div>

        {/* Copy */}
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-violet">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            The growth ecosystem
          </p>
          <h2 className="font-display mt-4 text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold leading-[1.05] text-ink">
            Marketing and software,{" "}
            <span className="bg-gradient-to-r from-violet via-lilac to-orange bg-clip-text text-transparent">
              clearly separated
            </span>
            — tightly connected.
          </h2>
          <p className="mt-4 max-w-[44ch] text-muted">
            Digital marketing sits on one side of the brand. Software
            development sits on the other. Your website bridges them so demand
            and product never pull apart.
          </p>

          <ul className="mt-8 space-y-4">
            {points.map((p, i) => (
              <motion.li
                key={p.title}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex gap-3"
              >
                <span
                  className={`mt-1 h-2.5 w-2.5 shrink-0 rotate-45 ${
                    i === 0 ? "bg-violet" : i === 1 ? "bg-orange" : "bg-lilac"
                  }`}
                />
                <div>
                  <p className="font-display text-[1.05rem] font-extrabold text-ink">
                    {p.title}
                  </p>
                  <p className="mt-1 text-[15px] text-muted">{p.text}</p>
                </div>
              </motion.li>
            ))}
          </ul>

          <a
            href="#services"
            className="mt-8 inline-flex items-center gap-2 text-[15px] font-bold text-orange transition hover:gap-3 hover:text-violet"
          >
            See services by side →
          </a>
        </div>
      </div>
    </section>
  );
}

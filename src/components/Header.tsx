"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LogoMark } from "./LogoMark";
import { SocialLinks } from "./SocialLinks";

const links = [
  { href: "#problems", label: "Challenges" },
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#why", label: "Why us" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-[14px]">
      <div className="wrap flex h-[68px] items-center justify-between gap-4">
        <a
          href="#top"
          className="flex min-w-0 items-center gap-3 no-underline"
          onClick={() => setOpen(false)}
        >
          <LogoMark className="h-9 w-auto shrink-0 sm:h-11" />
          <span className="truncate font-display text-[16px] font-extrabold sm:text-[19px]">
            Web Product Creator
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-medium no-underline transition hover:text-rust"
            >
              {link.label}
            </a>
          ))}
          <SocialLinks iconClassName="border-line text-ink hover:border-orange hover:text-orange" />
          <a href="#contact" className="btn !py-3 !text-[15px]">
            Get a quote
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-4">
            <span
              className={`absolute left-0 block h-0.5 w-full bg-ink transition ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-0.5 w-full bg-ink transition ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-full bg-ink transition ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-line bg-bg md:hidden"
          >
            <nav className="wrap flex flex-col gap-1 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 font-medium no-underline hover:bg-black/5"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 px-3">
                <SocialLinks iconClassName="border-line text-ink hover:border-orange hover:text-orange" />
              </div>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn mt-3 w-full"
              >
                Get a quote
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

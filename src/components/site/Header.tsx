"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 overflow-visible border-b border-line/80 bg-bg/90 backdrop-blur-md">
      <div className="wrap flex h-[76px] items-center justify-between gap-4 overflow-visible">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 overflow-visible no-underline"
        >
          <span className="relative flex h-11 w-16 shrink-0 items-center justify-center overflow-visible">
            <Image
              src="/logo.png"
              alt={site.name}
              width={128}
              height={88}
              className="h-full w-full object-contain"
              priority
            />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="font-display block text-sm font-bold tracking-[0.08em] uppercase sm:text-base">
              {site.name}
            </span>
            <span className="mt-0.5 block text-[10px] font-semibold tracking-[0.16em] text-accent uppercase sm:text-[11px]">
              {site.label}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium no-underline transition ${
                  active ? "text-accent" : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/contact" className="btn !px-5 !py-2.5 !text-xs">
            Let&apos;s Talk
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line md:hidden"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-4">
            <span
              className={`absolute left-0 block h-0.5 w-full bg-white transition ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-0.5 w-full bg-white transition ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-full bg-white transition ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-bg md:hidden">
          <nav className="wrap flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium no-underline hover:bg-white/5"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn mt-2 w-full"
            >
              Let&apos;s Talk
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

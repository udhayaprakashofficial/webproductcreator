import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";
import { nav, services, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg-soft">
      <div className="wrap grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Link
            href="/"
            className="inline-flex items-center gap-3 overflow-visible no-underline"
          >
            <span className="relative flex h-11 w-16 shrink-0 items-center justify-center">
              <Image
                src="/logo.png"
                alt={site.name}
                width={128}
                height={88}
                className="h-full w-full object-contain"
              />
            </span>
            <span className="font-display text-sm font-bold uppercase tracking-[0.08em]">
              {site.name}
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted">{site.tagline}</p>
          <SocialLinks
            className="mt-5"
            iconClassName="text-white/70 hover:text-accent border-line"
          />
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
            Navigation
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="no-underline hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
            Services
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href="/services"
                  className="no-underline hover:text-white"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
            Get in touch
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="hover:text-white">
                {site.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="wrap flex flex-col gap-2 py-5 text-xs text-muted sm:flex-row sm:justify-between">
          <p>© 2026 {site.name}. All Rights Reserved.</p>
          <p>Digital marketing and SaaS development</p>
        </div>
      </div>
    </footer>
  );
}

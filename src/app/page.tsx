import Image from "next/image";
import Link from "next/link";
import { industries, services, site, testimonials, values } from "@/lib/content";

const heroImage =
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1800&q=80";

export default function HomePage() {
  return (
    <>
      {/* Hero — Counterplay style */}
      <section className="relative min-h-[88vh] overflow-hidden border-b border-line">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-black/30" />
        </div>

        <div className="wrap relative flex min-h-[88vh] flex-col justify-end pb-16 pt-28 sm:pb-24">
          <p className="eyebrow mb-4">{site.label}</p>
          <p className="font-display text-[clamp(2.8rem,9vw,6.5rem)] font-bold uppercase leading-[0.92] tracking-[-0.04em]">
            {site.name.split(" ").slice(0, 2).join(" ")}
            <br />
            <span className="text-accent">{site.name.split(" ").slice(2).join(" ")}</span>
          </p>
          <p className="mt-6 max-w-[42ch] text-base text-white/80 sm:text-lg">
            {site.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn">
              Make your move
            </Link>
            <Link href="/services" className="btn btn-outline">
              See the system
            </Link>
          </div>
        </div>
      </section>

      {/* Partners / values intro */}
      <section className="section border-b border-line">
        <div className="wrap grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow">Growth partners</p>
            <h2 className="font-display mt-4 text-[clamp(2rem,4.5vw,3.4rem)] font-bold">
              More than marketers.
              <br />
              We&apos;re your growth partners.
            </h2>
          </div>
          <p className="max-w-[48ch] text-muted">
            Web Product Creator is a digital marketing and SaaS consultancy built
            for brands that play the long game — where revenue is the goal and
            consistency is the strategy.
          </p>
        </div>

        <div className="wrap mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <article
              key={v.title}
              className="border-t border-accent/60 pt-5"
            >
              <h3 className="font-display text-lg font-bold">{v.title}</h3>
              <p className="mt-3 text-sm text-muted">{v.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Services pieces */}
      <section className="section border-b border-line bg-bg-soft">
        <div className="wrap">
          <p className="eyebrow">Our pieces</p>
          <h2 className="font-display mt-3 text-[clamp(2rem,4vw,3.2rem)] font-bold">
            Our services
          </h2>
          <p className="mt-3 max-w-[48ch] text-muted">
            What everything protects and drives — marketing and product under one
            system.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((s, i) => (
              <article
                key={s.slug}
                className="group relative overflow-hidden rounded-2xl border border-line bg-bg"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                      0{i + 1}
                    </p>
                    <h3 className="font-display mt-2 text-2xl font-bold">
                      {s.title}
                    </h3>
                    <p className="mt-2 max-w-[40ch] text-sm text-white/75">
                      {s.summary}
                    </p>
                    <Link
                      href="/services"
                      className="mt-4 inline-flex text-sm font-bold uppercase tracking-wider text-white underline-offset-4 hover:underline"
                    >
                      Get started
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Industries marquee */}
      <section className="section overflow-hidden border-b border-line">
        <div className="wrap">
          <p className="eyebrow">Boards we&apos;ve played on</p>
          <h2 className="font-display mt-3 text-[clamp(2rem,4vw,3.2rem)] font-bold">
            Trusted by leaders
          </h2>
        </div>

        <div className="mt-10 flex w-max animate-[marquee_40s_linear_infinite] gap-4 px-4">
          {[...industries, ...industries].map((item, idx) => (
            <figure
              key={`${item.title}-${idx}`}
              className="relative h-52 w-72 shrink-0 overflow-hidden rounded-xl border border-line"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="288px"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-4 text-sm font-semibold">
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section border-b border-line bg-bg-soft">
        <div className="wrap">
          <p className="eyebrow">What our clients say</p>
          <h2 className="font-display mt-3 text-[clamp(2rem,4vw,3.2rem)] font-bold">
            Trusted by ambitious businesses
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="flex flex-col justify-between rounded-2xl border border-line bg-bg p-6 sm:p-8"
              >
                <p className="text-[15px] leading-relaxed text-white/85">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-6 border-t border-line pt-4">
                  <p className="font-display font-bold">{t.name}</p>
                  <p className="text-sm text-muted">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="wrap flex flex-col items-start justify-between gap-8 rounded-3xl border border-line bg-bg-card p-8 sm:p-12 lg:flex-row lg:items-center">
          <div>
            <p className="eyebrow">Next move</p>
            <h2 className="font-display mt-3 text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold">
              Let&apos;s start a conversation
            </h2>
            <p className="mt-3 max-w-[40ch] text-muted">
              Tell us where you are and what you need — marketing, product, or
              both.
            </p>
          </div>
          <Link href="/contact" className="btn shrink-0">
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}

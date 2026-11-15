import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/site/PageHero";
import { services, site } from "@/lib/content";

export const metadata = {
  title: `Services | ${site.name}`,
  description:
    "Digital marketing, websites, SaaS development and brand strategy for long-term growth.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="The pieces that protect and drive growth"
        text="Marketing systems and product software — designed together so every channel and every screen supports revenue."
        image="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section border-b border-line">
        <div className="wrap space-y-20">
          {services.map((s, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={s.slug}
                id={s.slug}
                className="grid gap-10 lg:grid-cols-2 lg:items-center"
              >
                <div className={reverse ? "lg:order-2" : undefined}>
                  <p className="eyebrow">0{i + 1}</p>
                  <h2 className="font-display mt-3 text-[clamp(1.8rem,3.2vw,2.6rem)] font-bold">
                    {s.title}
                  </h2>
                  <p className="mt-2 text-accent font-semibold">{s.summary}</p>
                  <p className="mt-4 text-muted">{s.text}</p>
                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {s.items.map((item) => (
                      <li
                        key={item}
                        className="border-l-2 border-accent/70 pl-3 text-sm text-white/85"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="btn mt-8">
                    Get started
                  </Link>
                </div>
                <div
                  className={`relative aspect-[5/4] overflow-hidden rounded-2xl border border-line ${
                    reverse ? "lg:order-1" : ""
                  }`}
                >
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section bg-bg-soft">
        <div className="wrap flex flex-col items-start justify-between gap-6 rounded-3xl border border-line bg-bg p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Ready to build the system?
            </h2>
            <p className="mt-2 max-w-[40ch] text-muted">
              Tell us what you need — we&apos;ll map the fastest path to clarity
              and traction.
            </p>
          </div>
          <Link href="/contact" className="btn shrink-0">
            Let&apos;s talk
          </Link>
        </div>
      </section>
    </>
  );
}

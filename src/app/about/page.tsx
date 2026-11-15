import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/site/PageHero";
import { site, values } from "@/lib/content";

export const metadata = {
  title: `About | ${site.name}`,
  description:
    "Strategic digital marketing and SaaS development partners built for long-term growth.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Built for brands that play the long game"
        text="We combine digital marketing and SaaS development so strategy, creative and product move in the same direction."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section border-b border-line">
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 className="font-display mt-4 text-[clamp(1.9rem,3.5vw,2.8rem)] font-bold">
              Digital marketing and SaaS under one roof
            </h2>
            <p className="mt-5 text-muted">
              Web Product Creator exists for businesses that want compounding
              growth — not short spikes. We start with revenue goals, then
              design the marketing system and software that make those goals
              achievable.
            </p>
            <p className="mt-4 text-muted">
              From SEO and paid media to websites, funnels and SaaS products, we
              stay close to outcomes: clearer demand, stronger conversion, and
              tools your team can actually run.
            </p>
            <Link href="/contact" className="btn mt-8">
              Work with us
            </Link>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line sm:aspect-[5/4]">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
              alt="Team collaboration"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="section border-b border-line bg-bg-soft">
        <div className="wrap">
          <p className="eyebrow">How we think</p>
          <h2 className="font-display mt-3 text-[clamp(1.9rem,3.5vw,2.8rem)] font-bold">
            Principles that guide every project
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <article
                key={v.title}
                className="rounded-2xl border border-line bg-bg p-6 sm:p-8"
              >
                <h3 className="font-display text-xl font-bold text-accent">
                  {v.title}
                </h3>
                <p className="mt-3 text-muted">{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line">
            <Image
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
              alt="Strategy workshop"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
          <div>
            <p className="eyebrow">The approach</p>
            <h2 className="font-display mt-3 text-[clamp(1.9rem,3.5vw,2.8rem)] font-bold">
              Strategy before execution
            </h2>
            <p className="mt-4 text-muted">
              We map the market, audience and offer first. Then we build the
              channels and product surfaces that support the plan — measured
              against growth, not vanity metrics.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/85">
              <li className="flex gap-3">
                <span className="text-accent">01</span>
                Diagnose goals, funnel and product gaps
              </li>
              <li className="flex gap-3">
                <span className="text-accent">02</span>
                Design the marketing + software system
              </li>
              <li className="flex gap-3">
                <span className="text-accent">03</span>
                Launch, measure and compound results
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";
import { SocialLinks } from "@/components/SocialLinks";
import { PageHero } from "@/components/site/PageHero";
import { site } from "@/lib/content";

export const metadata = {
  title: `Contact Us | ${site.name}`,
  description: `Get in touch with ${site.name} for digital marketing and SaaS development.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let's start a conversation"
        text="Share where you are and what you need. We'll respond with clear next steps."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section">
        <div className="wrap grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Contact information</p>
            <h2 className="font-display mt-3 text-[clamp(1.8rem,3vw,2.4rem)] font-bold">
              Reach the team
            </h2>

            <dl className="mt-10 space-y-8">
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                  Email
                </dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${site.email}`}
                    className="text-lg text-white hover:text-accent"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                  Phone
                </dt>
                <dd className="mt-2">
                  <a
                    href={site.phoneHref}
                    className="text-lg text-white hover:text-accent"
                  >
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                  Hours
                </dt>
                <dd className="mt-2 whitespace-pre-line text-lg text-white/90">
                  {site.hours}
                </dd>
              </div>
            </dl>

            <div className="mt-10">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                Social
              </p>
              <SocialLinks
                className="mt-4"
                iconClassName="text-white/80 hover:text-accent border-line"
              />
            </div>

            <p className="mt-10 text-sm text-muted">
              Prefer email? Write to{" "}
              <Link
                href={`mailto:${site.email}`}
                className="text-white underline-offset-2 hover:underline"
              >
                {site.email}
              </Link>
              .
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}

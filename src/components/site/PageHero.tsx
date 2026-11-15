import Image from "next/image";

type Props = {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
};

export function PageHero({ eyebrow, title, text, image }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/90 to-bg/55" />
      </div>
      <div className="wrap relative py-20 sm:py-28">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="font-display mt-4 max-w-[14ch] text-[clamp(2.4rem,6vw,4.6rem)] font-bold">
          {title}
        </h1>
        <p className="mt-5 max-w-[48ch] text-lg text-muted">{text}</p>
      </div>
    </section>
  );
}

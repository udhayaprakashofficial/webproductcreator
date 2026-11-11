import { LogoMark } from "./LogoMark";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="bg-plum py-9 text-[15px] text-[#d8c6d2]">
      <div className="wrap flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <a href="#top" className="inline-flex items-center gap-3 no-underline">
          <LogoMark className="h-8 w-auto" />
          <span className="font-display text-sm font-extrabold text-[#f0ebe8]">
            Web Product Creator
          </span>
        </a>

        <SocialLinks iconClassName="border-white/20 text-[#f0ebe8] hover:border-orange hover:text-orange" />

        <div className="flex flex-col gap-1 sm:items-end">
          <span>© 2026 Web Product Creator</span>
          <span>Software development and digital marketing</span>
        </div>
      </div>
    </footer>
  );
}

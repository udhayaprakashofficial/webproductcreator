const socials = [
  {
    href: "https://www.instagram.com/webproductcreator/",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 1.75A3.75 3.75 0 0 0 3.75 7.5v9a3.75 3.75 0 0 0 3.75 3.75h9a3.75 3.75 0 0 0 3.75-3.75v-9a3.75 3.75 0 0 0-3.75-3.75h-9Zm9.25 1.5a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25ZM12 7.25A4.75 4.75 0 1 1 7.25 12 4.75 4.75 0 0 1 12 7.25Zm0 1.75A3 3 0 1 0 15 12a3 3 0 0 0-3-3Z" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/profile.php?id=61589323490801",
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M14.5 8.5V6.75c0-.7.45-1 1.1-1H17V3h-2.2C12.1 3 11 4.5 11 6.55V8.5H9v2.75h2V21h3.5v-9.75h2.35l.35-2.75H14.5Z" />
      </svg>
    ),
  },
] as const;

type Props = {
  className?: string;
  iconClassName?: string;
};

export function SocialLinks({
  className = "",
  iconClassName = "text-current hover:text-orange",
}: Props) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {socials.map((social) => (
        <a
          key={social.href}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20 transition ${iconClassName}`}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}

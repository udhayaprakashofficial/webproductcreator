export function LogoMark({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1930 900"
      className={className}
      role="img"
      aria-label="Web Product Creator logo"
    >
      <path fill="#300a28" d="M321 0 643 300 321 600 0 300z" />
      <path fill="#8554c0" d="M643 300 965 600 643 900 321 600z" />
      <path fill="#b877f2" d="M965 0 1287 300 965 600 643 300z" />
      <path fill="#d1442a" d="M1287 300 1609 600 1287 900 965 600z" />
      <path fill="#ff5a34" d="M1609 0 1930 300 1609 600 1287 300z" />
      <path fill="#ae3622" d="M965 600 1287 900H643z" />
    </svg>
  );
}

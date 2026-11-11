"use client";

import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function TiltCard({ children, className = "" }: Props) {
  const ref = useRef<HTMLElement>(null);

  return (
    <article
      ref={ref}
      className={`card-3d ${className}`}
      onPointerMove={(e) => {
        if (!window.matchMedia("(hover: hover)").matches) return;
        const el = ref.current;
        if (!el) return;
        const b = el.getBoundingClientRect();
        const x = (e.clientX - b.left) / b.width - 0.5;
        const y = (e.clientY - b.top) / b.height - 0.5;
        el.style.transform = `rotateX(${-y * 8}deg) rotateY(${x * 8}deg)`;
      }}
      onPointerLeave={() => {
        if (ref.current) ref.current.style.transform = "";
      }}
    >
      {children}
    </article>
  );
}

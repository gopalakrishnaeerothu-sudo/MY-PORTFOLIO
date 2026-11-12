import type { ReactNode } from "react";

export function ContactButton({ href = "#contact", label = "Contact Me" }: { href?: string; label?: string }) {
  return (
    <a
      href={href}
      className="inline-block rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-white transition-transform duration-200 hover:scale-105"
      style={{
        background: "linear-gradient(123deg, #1D2128 5%, #215E61 40%, #C9781A 78%, #FF9E20 100%)",
        boxShadow: "0px 4px 4px rgba(255, 158, 32, 0.25), 4px 4px 12px #215E61 inset",
        outline: "2px solid white",
        outlineOffset: "-3px",
      }}
    >
      {label}
    </a>
  );
}

export function LiveProjectButton({ href, children = "Live Project" }: { href: string; children?: ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border-2 border-fg px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-fg transition-colors duration-200 hover:bg-fg/10"
    >
      {children}
    </a>
  );
}

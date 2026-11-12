import { useEffect, useRef, useState } from "react";
import { accentFor, projects, skills, type Project } from "../data";

// Row 1: your projects. Row 2: your technologies. Each row is tripled for a seamless strip.
const techTiles = Object.entries(skills).flatMap(([group, list]) => list.slice(0, 2).map((name) => ({ name, group })));

function ProjectTile({ p, index }: { p: Project; index: number }) {
  const [c1, c2] = accentFor(index);
  return (
    <div
      className="relative flex h-[270px] w-[420px] shrink-0 flex-col justify-end overflow-hidden rounded-2xl p-7"
      style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}
    >
      <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/15 blur-2xl" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
      <span className="relative text-sm uppercase tracking-widest text-white/85">{p.category}</span>
      <span className="relative text-4xl font-black uppercase leading-none text-white">{p.name}</span>
    </div>
  );
}

function TechTile({ t }: { t: { name: string; group: string } }) {
  return (
    <div className="flex h-[270px] w-[420px] shrink-0 flex-col justify-between rounded-2xl border border-fg/15 bg-gradient-to-br from-surface to-page p-7">
      <span className="text-sm uppercase tracking-widest text-hl">{t.group}</span>
      <span className="hero-heading text-5xl font-black uppercase leading-none">{t.name}</span>
    </div>
  );
}

export default function MarqueeSection() {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const top = ref.current?.offsetTop ?? 0;
      setOffset((window.scrollY - top + window.innerHeight) * 0.3);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={ref} className="flex flex-col gap-3 overflow-hidden bg-page pb-10 pt-24 sm:pt-32 md:pt-40">
      <div className="flex w-max gap-3" style={{ transform: `translateX(${offset - 200 - 1400}px)`, willChange: "transform" }}>
        {[...projects, ...projects, ...projects].map((p, i) => (
          <ProjectTile key={i} p={p} index={i % projects.length} />
        ))}
      </div>
      <div className="flex w-max gap-3" style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: "transform" }}>
        {[...techTiles, ...techTiles, ...techTiles].map((t, i) => (
          <TechTile key={i} t={t} />
        ))}
      </div>
    </section>
  );
}

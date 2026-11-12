import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import FadeIn from "../components/FadeIn";
import { LiveProjectButton } from "../components/Buttons";
import { projects, type Project } from "../data";

const featured = projects.filter((p) => p.featured);
const others = projects.filter((p) => !p.featured);
const radius = "rounded-[40px] sm:rounded-[50px] md:rounded-[60px]";

function Card({ p, index, total, progress }: { p: Project; index: number; total: number; progress: MotionValue<number> }) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="sticky top-24 flex h-[85vh] items-start justify-center md:top-32">
      <motion.article
        style={{ scale, top: `${index * 28}px` }}
        className={`relative w-full max-w-6xl origin-top border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 ${radius}`}
      >
        {/* Top row */}
        <div className="mb-4 flex flex-wrap items-center gap-x-6 gap-y-3 px-2 sm:mb-6 md:px-4">
          <span className="hero-heading font-black leading-none" style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="mr-auto flex flex-col">
            <span className="text-xs uppercase tracking-widest text-[#B600A8] sm:text-sm">{p.category}</span>
            <h3 className="font-medium uppercase text-[#D7E2EA]" style={{ fontSize: "clamp(1.2rem, 2.6vw, 2.4rem)" }}>
              {p.name}
            </h3>
          </div>
          <div className="flex gap-2">
            {p.live && <LiveProjectButton href={p.live} />}
            {p.repo && (
              <LiveProjectButton href={p.repo}>
                <Github size={16} /> Code
              </LiveProjectButton>
            )}
          </div>
        </div>

        {/* Bottom grid */}
        <div className="flex gap-3 sm:gap-4">
          <div className="flex w-[40%] flex-col gap-3 sm:gap-4">
            <div className={`flex flex-col justify-center overflow-hidden bg-[#16161a] p-5 sm:p-8 ${radius}`} style={{ height: "clamp(130px, 16vw, 230px)" }}>
              <p className="font-light leading-snug text-[#D7E2EA]" style={{ fontSize: "clamp(0.7rem, 1.2vw, 1.05rem)" }}>
                {p.description}
              </p>
            </div>
            <div className={`overflow-hidden bg-[#D7E2EA] p-5 sm:p-8 ${radius}`} style={{ height: "clamp(160px, 22vw, 340px)" }}>
              <ul className="flex flex-col gap-1 sm:gap-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[#0C0C0C]" style={{ fontSize: "clamp(0.65rem, 1.1vw, 1rem)" }}>
                    <span className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#B600A8]" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className={`relative flex w-[60%] flex-col justify-between overflow-hidden p-5 sm:p-8 ${radius}`}
            style={{ background: `linear-gradient(140deg, ${p.accent[0]}, ${p.accent[1]} 60%, #18011F)` }}
          >
            {p.image ? (
              <img src={p.image} alt={`${p.name} screenshot`} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            ) : (
              <>
                <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
                <span className="relative font-black uppercase leading-[0.9] text-white" style={{ fontSize: "clamp(1.8rem, 5vw, 5rem)" }}>
                  {p.name}
                </span>
                <div className="relative flex flex-wrap gap-1.5 sm:gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full bg-black/25 px-3 py-1 text-[0.65rem] text-white backdrop-blur sm:text-sm">
                      {s}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section id="projects" className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-4 pb-24 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-28">
      <FadeIn as="h2" y={40} className="hero-heading mb-10 text-center font-black uppercase leading-none tracking-tight" style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}>
        Projects
      </FadeIn>

      <div ref={ref}>
        {featured.map((p, i) => (
          <Card key={p.name} p={p} index={i} total={featured.length} progress={scrollYProgress} />
        ))}
      </div>

      {others.length > 0 && (
        <div className="mx-auto mt-24 max-w-6xl">
          <FadeIn as="h3" className="mb-8 text-center text-2xl font-medium uppercase tracking-widest text-[#D7E2EA] sm:text-3xl">
            More projects
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p, i) => (
              <FadeIn key={p.name} delay={(i % 3) * 0.08} className="group flex flex-col gap-3 rounded-[32px] border border-[#D7E2EA]/20 p-6 transition-colors hover:border-[#D7E2EA]/60">
                <div className="h-2 w-16 rounded-full" style={{ background: `linear-gradient(90deg, ${p.accent[0]}, ${p.accent[1]})` }} />
                <span className="text-xs uppercase tracking-widest text-[#B600A8]">{p.category}</span>
                <h4 className="text-2xl font-medium uppercase text-[#D7E2EA]">{p.name}</h4>
                <p className="flex-1 font-light text-[#D7E2EA]/70">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full border border-[#D7E2EA]/15 px-3 py-0.5 text-xs text-[#D7E2EA]/80">
                      {s}
                    </span>
                  ))}
                </div>
                {(p.live || p.repo) && (
                  <div className="flex gap-4 pt-2 text-sm uppercase tracking-widest text-[#D7E2EA]">
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:opacity-70">
                        Live <ArrowUpRight size={16} />
                      </a>
                    )}
                    {p.repo && (
                      <a href={p.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:opacity-70">
                        <Github size={16} /> Code
                      </a>
                    )}
                  </div>
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

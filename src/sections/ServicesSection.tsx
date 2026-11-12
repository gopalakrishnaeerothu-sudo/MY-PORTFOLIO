import FadeIn from "../components/FadeIn";
import { services, skills } from "../data";

export default function ServicesSection() {
  return (
    <section className="rounded-t-[40px] bg-white px-5 pb-36 pt-20 sm:rounded-t-[50px] sm:px-8 sm:pt-24 md:rounded-t-[60px] md:px-10 md:pt-32">
      <FadeIn as="h2" className="mb-16 text-center font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20 md:mb-28" style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}>
        Services
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {services.map((s, i) => (
          <FadeIn
            key={s.name}
            delay={i * 0.1}
            className="flex items-center gap-6 py-8 sm:gap-10 sm:py-10 md:gap-14 md:py-12"
            style={{ borderTop: i === 0 ? undefined : "1px solid rgba(12, 12, 12, 0.15)" }}
          >
            <span className="shrink-0 font-black leading-none text-[#0C0C0C]" style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex flex-col gap-2 text-[#0C0C0C]">
              <h3 className="font-medium uppercase" style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}>
                {s.name}
              </h3>
              <p className="max-w-2xl font-light leading-relaxed opacity-60" style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}>
                {s.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <div id="skills" className="mx-auto mt-24 max-w-5xl scroll-mt-10 sm:mt-32">
        <FadeIn as="h2" className="mb-12 text-center font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-16" style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}>
          Skills
        </FadeIn>
        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {Object.entries(skills).map(([group, list], i) => (
            <FadeIn key={group} delay={(i % 2) * 0.1}>
              <h3 className="mb-3 text-lg font-medium uppercase tracking-wider text-[#0C0C0C]">{group}</h3>
              <div className="flex flex-wrap gap-2">
                {list.map((s) => (
                  <span key={s} className="rounded-full border border-[#0C0C0C]/15 px-4 py-1.5 text-sm font-light text-[#0C0C0C] transition-colors hover:bg-[#0C0C0C] hover:text-white">
                    {s}
                  </span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

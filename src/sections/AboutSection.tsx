import FadeIn from "../components/FadeIn";
import AnimatedText from "../components/AnimatedText";
import { ContactButton } from "../components/Buttons";
import { profile } from "../data";

/* Decorative 3D-style objects drawn in CSS, using the brand palette (orange #FF9E20, teal #215E61, ink #1D2128). */
function Orb() {
  return (
    <div
      className="float-slow aspect-square w-full rounded-full"
      style={{
        background: "radial-gradient(circle at 32% 28%, #ffe2bb 0%, #FF9E20 32%, #C9781A 62%, #5a3208 100%)",
        boxShadow: "0 30px 60px rgba(255,158,32,.35)",
      }}
    />
  );
}
function Ring() {
  return (
    <div className="float-slow" style={{ animationDelay: "-2s" }}>
      <div
        className="aspect-square w-full rounded-full"
        style={{
          background: "conic-gradient(from 200deg, #FF9E20, #215E61, #3d8f92, #FF9E20)",
          WebkitMask: "radial-gradient(circle, transparent 38%, #000 39%)",
          mask: "radial-gradient(circle, transparent 38%, #000 39%)",
          transform: "perspective(500px) rotateX(55deg)",
        }}
      />
    </div>
  );
}
function Cube() {
  const face = "absolute inset-0 rounded-xl border border-white/20";
  const faces = [
    { t: "translateZ(var(--h))", bg: "#215E61" },
    { t: "rotateY(180deg) translateZ(var(--h))", bg: "#FF9E20" },
    { t: "rotateY(90deg) translateZ(var(--h))", bg: "#3d8f92" },
    { t: "rotateY(-90deg) translateZ(var(--h))", bg: "#FF9E20" },
    { t: "rotateX(90deg) translateZ(var(--h))", bg: "#215E61" },
    { t: "rotateX(-90deg) translateZ(var(--h))", bg: "#2A303B" },
  ];
  return (
    <div className="aspect-square w-full [perspective:600px]">
      <div className="spin-cube relative mx-auto h-[60%] w-[60%] translate-y-[30%] [transform-style:preserve-3d]" style={{ ["--h" as string]: "calc(var(--s) / 2)" }}>
        {faces.map((f, i) => (
          <div key={i} className={face} style={{ transform: f.t, background: `linear-gradient(135deg, ${f.bg}, #1D2128)` }} />
        ))}
      </div>
    </div>
  );
}
function Pill() {
  return (
    <div className="float-slow" style={{ animationDelay: "-4s" }}>
      <div
        className="mx-auto aspect-[1/2] w-1/2 rotate-[30deg] rounded-full"
        style={{
          background: "linear-gradient(160deg, #7fc3c5 0%, #215E61 45%, #1D2128 100%)",
          boxShadow: "0 30px 60px rgba(33,94,97,.4)",
        }}
      />
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-20 sm:px-8 md:px-10">
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute left-[1%] top-[4%] w-[120px] sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]">
        <Orb />
      </FadeIn>
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] w-[100px] sm:left-[6%] sm:w-[140px] md:left-[10%] md:w-[180px]">
        <Pill />
      </FadeIn>
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="cube-size absolute right-[1%] top-[4%] w-[120px] sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]">
        <Cube />
      </FadeIn>
      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] w-[130px] sm:right-[6%] sm:w-[170px] md:right-[10%] md:w-[220px]">
        <Ring />
      </FadeIn>

      <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn as="h2" delay={0} y={40} className="hero-heading text-center font-black uppercase leading-none tracking-tight" style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}>
            About me
          </FadeIn>
          <AnimatedText
            text={profile.about}
            className="max-w-[560px] text-center font-medium leading-relaxed text-fg"
            style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
          />
          <div className="grid w-full max-w-[640px] grid-cols-1 gap-3 sm:grid-cols-2">
            {profile.facts.map((f, i) => (
              <FadeIn key={f.label} delay={i * 0.08} className="rounded-2xl border border-fg/15 bg-fg/[0.03] px-5 py-4 backdrop-blur">
                <div className="text-xs uppercase tracking-widest text-hl">{f.label}</div>
                <div className="font-light text-fg">{f.value}</div>
              </FadeIn>
            ))}
          </div>
        </div>
        <FadeIn delay={0.2}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}

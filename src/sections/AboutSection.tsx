import FadeIn from "../components/FadeIn";
import AnimatedText from "../components/AnimatedText";
import { ContactButton } from "../components/Buttons";
import { profile } from "../data";

/* Decorative 3D-style objects drawn in CSS, using the contact-button palette. */
function Orb() {
  return (
    <div
      className="float-slow aspect-square w-full rounded-full"
      style={{
        background: "radial-gradient(circle at 32% 28%, #ffd1f5 0%, #B600A8 35%, #7621B0 65%, #18011F 100%)",
        boxShadow: "0 30px 60px rgba(182,0,168,.35)",
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
          background: "conic-gradient(from 200deg, #BE4C00, #B600A8, #7621B0, #BE4C00)",
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
    { t: "translateZ(var(--h))", bg: "#B600A8" },
    { t: "rotateY(180deg) translateZ(var(--h))", bg: "#7621B0" },
    { t: "rotateY(90deg) translateZ(var(--h))", bg: "#BE4C00" },
    { t: "rotateY(-90deg) translateZ(var(--h))", bg: "#7621B0" },
    { t: "rotateX(90deg) translateZ(var(--h))", bg: "#e05cd6" },
    { t: "rotateX(-90deg) translateZ(var(--h))", bg: "#18011F" },
  ];
  return (
    <div className="aspect-square w-full [perspective:600px]">
      <div className="spin-cube relative mx-auto h-[60%] w-[60%] translate-y-[30%] [transform-style:preserve-3d]" style={{ ["--h" as string]: "calc(var(--s) / 2)" }}>
        {faces.map((f, i) => (
          <div key={i} className={face} style={{ transform: f.t, background: `linear-gradient(135deg, ${f.bg}, #0C0C0C)` }} />
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
          background: "linear-gradient(160deg, #ffe0c2 0%, #BE4C00 40%, #B600A8 100%)",
          boxShadow: "0 30px 60px rgba(190,76,0,.35)",
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
            className="max-w-[560px] text-center font-medium leading-relaxed text-[#D7E2EA]"
            style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
          />
          <div className="grid w-full max-w-[640px] grid-cols-1 gap-3 sm:grid-cols-2">
            {profile.facts.map((f, i) => (
              <FadeIn key={f.label} delay={i * 0.08} className="rounded-2xl border border-[#D7E2EA]/15 bg-white/[0.03] px-5 py-4 backdrop-blur">
                <div className="text-xs uppercase tracking-widest text-[#B600A8]">{f.label}</div>
                <div className="font-light text-[#D7E2EA]">{f.value}</div>
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

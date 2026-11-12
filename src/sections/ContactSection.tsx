import { Github, Linkedin, Mail, Phone } from "lucide-react";
import FadeIn from "../components/FadeIn";
import { ContactButton, LiveProjectButton } from "../components/Buttons";
import { profile } from "../data";

export default function ContactSection() {
  return (
    <section id="contact" className="flex flex-col items-center gap-10 px-5 pb-16 pt-24 text-center sm:px-8 md:px-10">
      <FadeIn className="relative">
        <div className="absolute -inset-3 rounded-full blur-xl" style={{ background: "linear-gradient(123deg, #215E61, #FF9E20)" }} />
        <img src={profile.photo} alt={profile.fullName} className="relative h-40 w-40 rounded-full border-4 border-page object-cover object-top sm:h-48 sm:w-48" />
      </FadeIn>

      <FadeIn as="h2" y={40} className="hero-heading font-black uppercase leading-none tracking-tight" style={{ fontSize: "clamp(2.5rem, 9vw, 120px)" }}>
        Let&apos;s talk
      </FadeIn>
      <FadeIn delay={0.1}>
        <p className="text-xl font-medium uppercase tracking-wide text-fg">{profile.fullName}</p>
        <p className="font-light text-fg/70">{profile.role}</p>
      </FadeIn>

      <FadeIn delay={0.2} className="flex flex-wrap justify-center gap-3">
        {profile.email && <ContactButton href={`mailto:${profile.email}`} label="Email Me" />}
        {profile.phone && (
          <LiveProjectButton href={`tel:${profile.phone.replace(/\s/g, "")}`}>
            <Phone size={16} /> Call
          </LiveProjectButton>
        )}
        {profile.linkedin && (
          <LiveProjectButton href={profile.linkedin}>
            <Linkedin size={16} /> LinkedIn
          </LiveProjectButton>
        )}
        {profile.github && (
          <LiveProjectButton href={profile.github}>
            <Github size={16} /> GitHub
          </LiveProjectButton>
        )}
        {!profile.email && profile.githubOrg && (
          <LiveProjectButton href={profile.githubOrg}>
            <Mail size={16} /> Work GitHub
          </LiveProjectButton>
        )}
      </FadeIn>

      <footer className="mt-16 text-sm font-light uppercase tracking-widest text-fg/40">
        © {new Date().getFullYear()} {profile.fullName} · Signitives Technologies LLC
      </footer>
    </section>
  );
}

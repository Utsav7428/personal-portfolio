import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { contact, personal } from "../data/portfolio";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".footer-item", {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <footer
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden bg-[#0a0a0f] border-t border-white/5 px-5 py-24 sm:px-10"
    >
      {/* Faint grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,159,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,159,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* CTA */}
        <div className="mb-16 text-center">
          <p className="footer-item font-mono text-xs tracking-[0.35em] text-[#00ff9f] uppercase mb-4">
            Let's Connect
          </p>
          <h2 className="footer-item text-4xl font-black uppercase text-[#e8e0d4] md:text-6xl leading-tight">
            Open to&nbsp;
            <span className="text-[#00ff9f]">Opportunities</span>
          </h2>
          <p className="footer-item mt-5 font-mono text-sm text-[#a09a90]">
            {contact.cta}
          </p>

          {/* Email CTA */}
          <a
            href={`mailto:${contact.email}`}
            className="footer-item mt-8 inline-block border border-[#00ff9f]/50 bg-[#00ff9f]/10 px-8 py-3 font-mono text-sm uppercase tracking-widest text-[#00ff9f] rounded transition-all hover:bg-[#00ff9f] hover:text-black duration-200"
          >
            {contact.email}
          </a>
        </div>

        {/* Divider */}
        <div className="footer-item h-px w-full bg-white/5 mb-12" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Name + role */}
          <div className="footer-item text-center md:text-left">
            <p className="font-black text-2xl uppercase text-[#e8e0d4]">
              {personal.name}
            </p>
            <p className="font-mono text-xs text-[#a09a90] uppercase tracking-widest mt-1">
              {personal.title} · {personal.location}
            </p>
          </div>

          {/* Links */}
          <div className="footer-item flex flex-wrap items-center justify-center gap-6">
            <a
              href={contact.socials[0].url}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs uppercase tracking-widest text-[#a09a90] hover:text-[#00ff9f] transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href={contact.socials[1].url}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs uppercase tracking-widest text-[#a09a90] hover:text-[#0a8cff] transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href={contact.socials[2].url}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs uppercase tracking-widest text-[#a09a90] hover:text-[#ffd700] transition-colors"
            >
              LeetCode ↗
            </a>
          </div>

          {/* LeetCode badge */}
          <div className="footer-item">
            <div className="border border-[#ffd700]/25 bg-[#ffd700]/5 rounded-lg px-5 py-3 text-center">
              <p className="font-mono text-[9px] uppercase tracking-widest text-[#ffd700]/60 mb-1">
                Competitive Programming
              </p>
              <p className="font-mono text-sm font-bold text-[#ffd700]">
                300+ LeetCode Problems
              </p>
              <p className="font-mono text-[10px] text-[#ffd700]/70 mt-0.5">
                Rating · 1665
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="footer-item mt-12 text-center font-mono text-[10px] text-[#3a3a4a] uppercase tracking-widest">
          © {new Date().getFullYear()} {personal.name} · Built with React, Tailwind CSS & GSAP
        </p>
      </div>
    </footer>
  );
};

export default Footer;

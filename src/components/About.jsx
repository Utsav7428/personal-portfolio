import { useRef } from "react";

import { useGSAP } from "@gsap/react";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";

import { skills, personal } from "../data/portfolio";



gsap.registerPlugin(ScrollTrigger);



// ─── Scrolling marquee row ────────────────────────────────────────────────────

const MarqueeRow = ({ items, direction = 1, speed = 40 }) => {

  const rowRef = useRef(null);



  // Duplicate items for seamless loop

  const doubled = [...items, ...items];



  useGSAP(

    () => {

      const totalWidth = rowRef.current.scrollWidth / 2;

      gsap.fromTo(

        rowRef.current,

        { x: direction === 1 ? 0 : -totalWidth },

        {

          x: direction === 1 ? -totalWidth : 0,

          duration: speed,

          ease: "none",

          repeat: -1,

        }

      );

    },

    { scope: rowRef }

  );



  return (

    <div className="overflow-hidden">

      <div ref={rowRef} className="flex gap-6 whitespace-nowrap">

        {doubled.map((item, i) => (

          <span

            key={i}

            className="inline-flex items-center gap-3 border border-white/5 bg-[#0d0d12] px-5 py-3 rounded font-mono text-sm uppercase tracking-widest text-[#a09a90] hover:text-[#00ff9f] hover:border-[#00ff9f]/30 transition-colors duration-200 cursor-default"

          >

            <span className="text-[#00ff9f]/40 text-xs">◆</span>

            {item}

          </span>

        ))}

      </div>

    </div>

  );

};



// ─── ABOUT / SKILLS SECTION ───────────────────────────────────────────────────

const About = () => {

  const sectionRef = useRef(null);



  useGSAP(

    () => {

      gsap.from(".about-text", {

        opacity: 0,

        y: 50,

        stagger: 0.15,

        duration: 1,

        ease: "power3.out",

        scrollTrigger: {

          trigger: sectionRef.current,

          start: "top 80%",

        },

      });

    },

    { scope: sectionRef }

  );



  return (

    <section

      ref={sectionRef}

      id="about"

      className="bg-[#12121a] py-32 overflow-hidden"

    >

      {/* ── Label + heading ── */}

      <div className="px-5 sm:px-10 mb-20 text-center">

        <p className="about-text font-mono text-xs tracking-[0.35em] text-[#00ff9f] uppercase mb-4">

          Stack

        </p>

        <h2 className="about-text text-4xl font-black uppercase text-[#e8e0d4] md:text-6xl leading-tight">

          The Tech,&nbsp;

          <span className="text-[#00ff9f]">No Fluff</span>

        </h2>

        <p className="about-text mt-6 max-w-xl mx-auto font-mono text-sm text-[#a09a90] leading-relaxed">

          {personal.tagline}

        </p>

      </div>



      {/* ── Marquee rows ── */}

      <div className="space-y-4">

        {/* Row 1 — all skills LTR */}

        <MarqueeRow items={skills.marquee} direction={1} speed={50} />



        {/* Row 2 — databases + devops RTL (reversed) */}

        <MarqueeRow

          items={[...skills.databases, ...skills.devops, ...skills.languages]}

          direction={-1}

          speed={40}

        />



        {/* Row 3 — languages LTR, slower */}

        <MarqueeRow

          items={[...skills.frontend, ...skills.tools, ...skills.languages]}

          direction={1}

          speed={65}

        />

      </div>



      {/* ── Skill category breakdown ── */}

      <div className="mt-24 px-5 sm:px-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">

        {[

          {

            label: "Languages",

            color: "#00ff9f",

            items: skills.languages,

          },

          {

            label: "Frameworks & DBs",

            color: "#ff6b35",

            items: [...skills.databases, "Spring Boot"],

          },

          {

            label: "DevOps & Tools",

            color: "#4fc3f7",

            items: skills.devops,

          },

          {

            label: "Frontend",

            color: "#ffd700",

            items: [...skills.frontend, ...skills.tools],

          },

        ].map(({ label, color, items }) => (

          <div

            key={label}

            className="about-text rounded-xl border border-white/5 bg-[#0d0d12] p-5"

          >

            <p

              className="font-mono text-[10px] uppercase tracking-widest mb-4"

              style={{ color }}

            >

              {label}

            </p>

            <div className="flex flex-wrap gap-2">

              {items.map((item) => (

                <span

                  key={item}

                  className="rounded border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[#a09a90]"

                  style={{ borderColor: `${color}20` }}

                >

                  {item}

                </span>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>

  );

};



export default About;
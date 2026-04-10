import { useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { projects } from "../data/portfolio";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from(".project-card", {
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    gsap.from(".projects-heading", {
      opacity: 0,
      x: -80,
      duration: 1,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".projects-heading",
        start: "top 90%",
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="bg-[#12121a] px-5 pb-24 pt-12 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="font-mono text-xs tracking-[0.35em] text-[#00ff9f] uppercase">
            Key backend projects
          </p>
          <h2 className="projects-heading mt-4 text-4xl font-black uppercase text-[#e8e0d4] md:text-5xl">
            Production-ready systems
          </h2>
          <p className="mt-4 max-w-2xl font-mono text-sm leading-relaxed text-[#a09a90]">
            Two flagship backend projects that demonstrate scalable event orchestration, low-latency matching, and operational observability.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              style={{
                borderColor: project.accentColor,
                boxShadow: `0 0 0 1px ${project.accentColor}20`,
              }}
              className="project-card rounded-3xl bg-[#0c0c0f] p-7"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p
                    className="font-mono text-[11px] uppercase tracking-[0.4em] mb-1"
                    style={{ color: `${project.accentColor}bf` }}
                  >
                    {project.category}
                  </p>
                  <h3 className="mt-4 text-2xl font-black uppercase text-[#e8e0d4]">
                    {project.title}
                  </h3>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                  style={{ color: project.accentColor }}
                >
                  <FiArrowUpRight size={20} />
                </a>
              </div>

              <p className="mt-5 font-mono text-sm leading-relaxed text-[#a09a90]">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border px-3 py-1 text-[11px] uppercase tracking-widest"
                    style={{
                      color: project.accentColor,
                      borderColor: `${project.accentColor}40`,
                      backgroundColor: `${project.accentColor}12`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="mt-6 space-y-2 text-[#8a8a7d]">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 text-sm leading-relaxed">
                    <span
                      className="mt-[3px]"
                      style={{ color: project.accentColor }}
                    >
                      •
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

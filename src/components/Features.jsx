import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { personal } from "../data/portfolio";

gsap.registerPlugin(ScrollTrigger);

// ─── Small reusable bento tile ───────────────────────────────────────────────
const BentoTilt = ({ children, className = "" }) => {
  const itemRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;
    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();
    const relX = (e.clientX - left) / width - 0.5;
    const relY = (e.clientY - top) / height - 0.5;
    gsap.to(itemRef.current, {
      rotateX: relY * -10,
      rotateY: relX * 10,
      transformPerspective: 800,
      duration: 0.4,
      ease: "power1.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(itemRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power1.inOut",
    });
  };

  return (
    <div
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </div>
  );
};

// ─── Metric badge inside a card ───────────────────────────────────────────────
const MetricBadge = ({ metric, direction, label, customColor }) => {
  const arrow = direction === "down" ? "↓" : direction === "up" ? "↑" : "◆";
  
  // Use custom color if provided, otherwise default to the standard logic
  const color = customColor 
    ? customColor
    : direction === "down"
    ? "text-[#00ff9f]"
    : direction === "up"
    ? "text-[#ff6b35]"
    : "text-[#a09a90]";

  return (
    <div className="flex items-baseline gap-2">
      <span className={`font-mono text-3xl font-bold ${color}`}>
        {metric}
        {direction !== "neutral" && <span className="ml-1 text-xl">{arrow}</span>}
      </span>
      <span className="font-mono text-xs text-[#a09a90] uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
};

const Features = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".bento-card", {
        opacity: 0,
        y: 60,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".features-heading", {
        opacity: 0,
        clipPath: "inset(0 100% 0 0)",
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".features-heading",
          start: "top 85%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="features"
      className="bg-[#09090b] pb-24 px-5 sm:px-10"
    >
      {/* ── Section label ── */}
      <div className="flex flex-col items-center gap-5 py-10 pb-24">
        <p className="font-mono text-xs tracking-[0.35em] text-[#00ff9f] uppercase">
          Experience &amp; Engineering Impact
        </p>
        <h2 className="features-heading text-center text-4xl font-black uppercase text-[#e8e0d4] md:text-6xl">
          Backend at&nbsp;
          <span className="text-[#00ff9f]">Scale</span>
        </h2>
        <p className="max-w-2xl text-center font-mono text-sm text-[#a09a90] leading-relaxed">
          Currently a Backend Developer at{" "}
          <span className="text-[#e8e0d4] font-semibold">
            Tata Consultancy Services
          </span>{" "}
          in {personal?.location || "Bengaluru, India"}. These are the numbers that matter.
        </p>
      </div>

      {/* ── Bento Grid ── 
          Removed h-dvh and updated rows to accommodate 7 cards perfectly. 
      */}
      <div className="grid w-full grid-cols-1 gap-7 md:grid-cols-3 auto-rows-[minmax(280px,_auto)]">

        {/* ROW 1 & 2 */}
        {/* CARD 1 — Event Orchestrator (tall, spanning 2 rows) */}
        <BentoTilt className="bento-card md:col-span-1 md:row-span-2 flex flex-col justify-between overflow-hidden rounded-2xl border border-[#1e2a1e] bg-[#0d120d] p-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#00ff9f]/60 mb-4">
              Spring Boot · Kafka
            </p>
            <h3 className="text-xl font-black uppercase text-[#e8e0d4] leading-tight">
              Event Orchestrator
            </h3>
            <p className="mt-3 font-mono text-xs text-[#a09a90] leading-relaxed">
              Designed and built a centralized event orchestration layer to modernize a highly coupled microservices ecosystem. By moving away from synchronous REST and adopting an event-driven architecture using Kafka, I successfully decoupled inter-service communication.
            </p>
          </div>

          <div className="mt-6 space-y-4">
            <MetricBadge
              metric="60%"
              direction="down"
              label="Service-to-service calls"
            />
            <div className="h-px w-full bg-[#1e2a1e]" />
            <div className="flex flex-wrap gap-2">
              {["Java", "Spring Boot", "Apache Kafka", "Microservices"].map((t) => (
                <span
                  key={t}
                  className="rounded border border-[#00ff9f]/20 bg-[#00ff9f]/5 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-[#00ff9f]"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="font-mono text-[10px] text-[#3a4a3a] uppercase tracking-widest">
              TCS · Production
            </p>
          </div>
        </BentoTilt>

        {/* CARD 2 — ETL Partitioning */}
        <BentoTilt className="bento-card md:col-span-2 flex flex-col justify-between overflow-hidden rounded-2xl border border-[#2a1e0d] bg-[#120d08] p-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#ff6b35]/60 mb-4">
              Spring Batch · Remote Partitioning
            </p>
            <h3 className="text-xl font-black uppercase text-[#e8e0d4] leading-tight">
              Distributed ETL Engine
            </h3>
            <p className="mt-3 font-mono text-xs text-[#a09a90] leading-relaxed">
              Architected the refactoring of a legacy, monolithic batch processing job into a highly concurrent, parallelized architecture. Implemented Remote Batch Partitioning to distribute workload partitions across multiple JVM worker nodes dynamically.
            </p>
          </div>

          <div className="mt-6">
            <MetricBadge
              metric="4h → &lt;1h"
              direction="down"
              label="ETL execution time"
            />
            <div className="mt-4 flex items-center gap-2">
              <div className="h-2 flex-1 rounded bg-[#2a1e0d] overflow-hidden">
                <div className="h-full rounded bg-[#ff6b35]" style={{ width: "25%" }} />
              </div>
              <span className="font-mono text-[10px] text-[#ff6b35]">75% faster</span>
            </div>
            <p className="mt-3 font-mono text-[10px] text-[#3a2a1a] uppercase tracking-widest">
              TCS · Production
            </p>
          </div>
        </BentoTilt>

        {/* CARD 3 — ELK Reconciliation */}
        <BentoTilt className="bento-card md:col-span-1 flex flex-col justify-between overflow-hidden rounded-2xl border border-[#1a1a2e] bg-[#0d0d18] p-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#4fc3f7]/60 mb-4">
              Elasticsearch · Logstash · Kibana
            </p>
            <h3 className="text-xl font-black uppercase text-[#e8e0d4] leading-tight">
              ELK Reconciliation
            </h3>
            <p className="mt-3 font-mono text-xs text-[#a09a90] leading-relaxed">
              Engineered a near-real-time event audit and reconciliation pipeline to monitor the health of distributed transactions.
            </p>
          </div>
          <div className="mt-6 rounded-3xl bg-[#10121c] p-5 border border-[#1a1a2e]">
            <p className="font-mono text-xs font-semibold text-[#4fc3f7]">
              Recovery Workflow
            </p>
            <p className="mt-2 text-xs leading-relaxed text-[#a09a90]">
              Improved manual recovery to <strong>85%</strong> automated remediation via instant Kibana anomaly detection.
            </p>
          </div>
        </BentoTilt>

        {/* CARD 4 — Docs-as-Code Pipeline */}
        <BentoTilt className="bento-card md:col-span-1 flex flex-col justify-between overflow-hidden rounded-2xl border border-[#1a2e25] bg-[#09120e] p-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#00ff9f]/60 mb-4">
              AsciiDoc · Maven · CI/CD
            </p>
            <h3 className="text-xl font-black uppercase text-[#e8e0d4] leading-tight">
              Docs-as-Code Pipeline
            </h3>
            <p className="mt-3 font-mono text-xs text-[#a09a90] leading-relaxed">
              Spearheaded the migration of enterprise documentation from static Word files to version-controlled AsciiDoc (<code className="bg-[#1a2e25] text-[#00ff9f] px-1 rounded">.adoc</code>).
            </p>
            <p className="mt-3 font-mono text-xs text-[#a09a90] leading-relaxed">
              Integrated <strong>AsciidoctorJ</strong> directly into the Maven build lifecycle, automating the generation of system specs during the CI/CD pipeline to eliminate documentation drift.
            </p>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between rounded-xl bg-[#0d1a14] p-3 border border-[#1a2e25]">
               <span className="font-mono text-[9px] text-[#00ff9f] bg-[#00ff9f]/10 px-2 py-1 rounded opacity-50 line-through decoration-[#00ff9f]/50">.docx</span>
               <span className="text-[#00ff9f]/50 text-xs">→</span>
               <span className="font-mono text-[9px] text-[#00ff9f] bg-[#00ff9f]/10 px-2 py-1 rounded border border-[#00ff9f]/30">.adoc</span>
               <span className="text-[#00ff9f]/50 text-xs">→</span>
               <span className="font-mono text-[9px] text-[#110a1f] bg-[#00ff9f] px-2 py-1 rounded font-bold">CI/CD Build</span>
            </div>
            <div className="mt-4 flex gap-2">
              <span className="font-mono text-[9px] text-[#a09a90] border border-[#a09a90]/20 px-2 py-1 rounded">AsciidoctorJ</span>
              <span className="font-mono text-[9px] text-[#a09a90] border border-[#a09a90]/20 px-2 py-1 rounded">Mermaid.js</span>
            </div>
          </div>
        </BentoTilt>


        {/* ROW 3 & 4 (New Content Integration) */}
        
        {/* CARD 5 — Data Orchestrator & Polymorphic Serialization */}
        <BentoTilt className="bento-card md:col-span-2 flex flex-col justify-between overflow-hidden rounded-2xl border border-[#2d1b36] bg-[#1a0f2e] p-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#b39ddb]/60 mb-4">
              Dynamic POJO-to-Schema · Envelope Pattern
            </p>
            <h3 className="text-xl font-black uppercase text-[#e8e0d4] leading-tight">
              Runtime Avro Converter
            </h3>
            <p className="mt-3 font-mono text-xs text-[#a09a90] leading-relaxed">
              Engineered a dynamic Avro serialization engine utilizing the Envelope pattern to handle highly polymorphic payloads. The converter safely processes lists of <strong>N</strong> size containing <strong>k</strong> unknown event types by dynamically generating Avro schemas directly from POJOs at runtime, eliminating the need for hardcoded schema registries.
            </p>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between rounded-xl bg-[#110a1f] p-4 border border-[#2d1b36]">
               <span className="font-mono text-[10px] text-[#b39ddb] bg-[#b39ddb]/10 px-2 py-1 rounded">List&lt;Unknown POJOs&gt;</span>
               <span className="text-[#b39ddb]/50">→</span>
               <span className="font-mono text-[10px] text-[#b39ddb] bg-[#b39ddb]/10 px-2 py-1 rounded border border-[#b39ddb]/30">Runtime Schema Gen</span>
               <span className="text-[#b39ddb]/50">→</span>
               <span className="font-mono text-[10px] text-[#b39ddb] bg-[#b39ddb]/10 px-2 py-1 rounded">Avro Binary</span>
            </div>
          </div>
        </BentoTilt>

        {/* CARD 6 — Distributed Timeout Management (Tall Card) */}
        <BentoTilt className="bento-card md:col-span-1 md:row-span-2 flex flex-col justify-between overflow-hidden rounded-2xl border border-[#331111] bg-[#1a0808] p-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#ff5252]/60 mb-4">
              Redis Keyspace · KStreams State Store
            </p>
            <h3 className="text-xl font-black uppercase text-[#e8e0d4] leading-tight">
              Event-Based Timeout Engine
            </h3>
            <p className="mt-3 font-mono text-xs text-[#a09a90] leading-relaxed">
              Engineered a dual-engine timeout management system for reliable event delivery to destination microservices. Leveraged <strong>Redis TTL Keyspace Notifications</strong> and <strong>KStreams State Stores</strong> as interchangeable timeout strategies.
            </p>
            <p className="mt-3 font-mono text-xs text-[#a09a90] leading-relaxed">
              Wrapped the logic in a <strong>Facade</strong> layer utilizing <strong>Strategy Patterns</strong> and <strong>Feature Flags</strong>, enabling seamless runtime toggling between Redis and Kafka engines without deployments.
            </p>
          </div>

          <div className="mt-6 space-y-2">
            {["Facade Pattern", "Strategy Pattern", "Feature Flags"].map((t) => (
              <div key={t} className="border-l-2 border-[#ff5252] pl-3 py-1 bg-[#ff5252]/5">
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#e8e0d4]">
                  {t}
                </p>
              </div>
            ))}
          </div>
        </BentoTilt>

        {/* CARD 7 — Self-Healing Systems via Circuit Breaker */}
        <BentoTilt className="bento-card md:col-span-2 flex flex-col justify-between overflow-hidden rounded-2xl border border-[#002b33] bg-[#00141a] p-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#00e5ff]/60 mb-4">
              Resilience4j · Toxiproxy
            </p>
            <h3 className="text-xl font-black uppercase text-[#e8e0d4] leading-tight">
              Resilience State Machine
            </h3>
            <p className="mt-3 font-mono text-xs text-[#a09a90] leading-relaxed max-w-xl">
              Implemented an advanced resilience layer where circuit-breaking functions as a state machine. Leveraged transition events to trigger self-recovery workflows and fallback degradation strategies. Rigorously tested via Chaos Engineering (Toxiproxy) to simulate network partitions.
            </p>
          </div>

          <div className="mt-6">
            <MetricBadge
              metric="35%"
              direction="down"
              label="Incident-driven downtime"
              customColor="text-[#00e5ff]"
            />
            <div className="mt-4 flex gap-4">
              <span className="font-mono text-[10px] px-2 py-1 bg-[#00e5ff]/10 text-[#00e5ff] rounded border border-[#00e5ff]/20">STATE: CLOSED</span>
              <span className="font-mono text-[10px] px-2 py-1 bg-[#ff6b35]/10 text-[#ff6b35] rounded border border-[#ff6b35]/20">STATE: HALF-OPEN</span>
              <span className="font-mono text-[10px] px-2 py-1 bg-[#ff5252]/10 text-[#ff5252] rounded border border-[#ff5252]/20">STATE: OPEN</span>
            </div>
          </div>
        </BentoTilt>

      </div>
    </section>
  );
};

export default Features;
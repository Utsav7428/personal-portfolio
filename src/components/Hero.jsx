import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Button from "./Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const [hasVideoError, setHasVideoError] = useState(false);

  // For a backend engineer: abstract, data-heavy loop visuals
  // Replace these paths with actual video files or use the geometric canvas below
  const totalVideos = 3;
  const nextVideoRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  const handleVideoError = () => {
    setHasVideoError(true);
  };

  useEffect(() => {
    if (loadedVideos === totalVideos - 1 || hasVideoError) {
      setIsLoading(false);
    }
  }, [loadedVideos, hasVideoError]);

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex((prev) => (prev % totalVideos) + 1);
  };

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVideoRef.current?.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
      borderRadius: "0 0 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const getVideoSrc = (index) =>
    `/videos/hero-${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {isLoading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-[#0a0a0a]">
          {/* Brutalist loading state */}
          <div className="flex flex-col items-center gap-4">
            <div className="three-body">
              <div className="three-body__dot" />
              <div className="three-body__dot" />
              <div className="three-body__dot" />
            </div>
            <p className="font-mono text-xs tracking-[0.3em] text-[#00ff9f] uppercase opacity-60">
              Initializing...
            </p>
          </div>
        </div>
      )}

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-[#0a0a0f]"
      >
        {/* Geometric grid overlay — backend / data-heavy aesthetic */}
        <div
          className="pointer-events-none absolute inset-0 z-20 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,255,159,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,159,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Mini clickable preview */}
        <div
          id="mini-video"
          onClick={handleMiniVdClick}
          className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg"
        >
          <div className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in [.mini-video_&]:scale-100 [.mini-video_&]:opacity-100">
            <video
              ref={nextVideoRef}
              src={getVideoSrc((currentIndex % totalVideos) + 1)}
              loop
              muted
              playsInline
              id="current-video"
              className="size-64 origin-center scale-150 object-cover object-center"
              onLoadedData={handleVideoLoad}
              onError={handleVideoError}
            />
          </div>
        </div>

        <video
          ref={nextVideoRef}
          src={getVideoSrc(currentIndex)}
          loop
          muted
          playsInline
          id="next-video"
          className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
        />

        {/* Background video — abstract server/data visual */}
        <video
          src={getVideoSrc(
            currentIndex === totalVideos - 1 ? 1 : currentIndex
          )}
          autoPlay
          loop
          muted
          playsInline
          className="absolute left-0 top-0 size-full object-cover object-center opacity-40"
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
        />

        {/* ── HERO TEXT ── */}
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-[#e8e0d4]">
          B<b>A</b>CK<b>E</b>ND
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            {/* Eyebrow */}
            <p className="font-mono text-xs tracking-[0.35em] text-[#00ff9f] uppercase mb-2">
              Utsav Agarwal &nbsp;/&nbsp; Backend Developer
            </p>

            {/* Main headline */}
            <h1 className="hero-heading text-[#e8e0d4]">
              Infra<b>str</b>ucture
            </h1>

            {/* Tagline */}
            <p className="mt-5 max-w-xl font-mono text-sm leading-relaxed text-[#a09a90]">
              Building scalable infrastructure, high-performance matching
              engines, and distributed event-driven systems.
            </p>

            {/* Stat badges — data-heavy accent */}
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "60% ↓ Service Calls",
                "4h → &lt;1h ETL",
                "Sub-ms Matching",
                "300+ LeetCode",
              ].map((badge) => (
                <span
                  key={badge}
                  className="border border-[#00ff9f]/30 bg-[#00ff9f]/5 px-3 py-1 font-mono text-[10px] tracking-widest text-[#00ff9f] uppercase rounded"
                  dangerouslySetInnerHTML={{ __html: badge }}
                />
              ))}
            </div>

            <div className="mt-10">
              <Button
                id="watch-trailer"
                href="#features"
                title="Explore Work"
                leftIcon={<TiLocationArrow />}
                containerClass="!bg-[#00ff9f] flex-center gap-1 text-black font-bold"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom hero label */}
      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        D<b>E</b>V
      </h1>
    </div>
  );
};

export default Hero;

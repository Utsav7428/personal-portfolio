import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import { contact } from "../data/portfolio";

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-5 sm:px-10">
      {/* Updated the background to a dark, brutalist theme 
        Removed the image clipping placeholders
      */}
      <div className="relative rounded-3xl border border-[#1a1a24] bg-[#0c0c0f] py-24 px-5 text-[#e8e0d4] sm:overflow-hidden">
        
        {/* Subtle background glow effect (replaces the need for images) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[80%] opacity-10 bg-[#00ff9f] blur-[120px] pointer-events-none rounded-full" />

        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          <p className="mb-10 font-mono text-xs tracking-[0.35em] text-[#00ff9f] uppercase">
            Backend systems, engineered.
          </p>

          <AnimatedTitle
            title="let&#39;s build the <br /> next era of <br /> backend platforms."
            className="w-full font-black uppercase !text-5xl md:!text-7xl leading-[0.9] text-[#e8e0d4]"
          />

          <Button
            title="Email me"
            href={`mailto:${contact.email}`}
            containerClass="mt-12 cursor-pointer bg-[#00ff9f] text-[#0c0c0f] hover:bg-white transition-colors"
          />

          {/* Styled the contact links like a terminal/code block */}
          <div className="mt-16 w-full max-w-2xl rounded-xl border border-[#1a1a24] bg-[#090909] p-6 text-left sm:p-8">
            <div className="grid gap-y-4 font-mono text-sm sm:grid-cols-2">
              
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-[#a09a90]">Email</span>
                <a href={`mailto:${contact.email}`} className="text-[#00ff9f] hover:underline hover:text-white transition-colors break-all">
                  {contact.email}
                </a>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-[#a09a90]">Phone</span>
                <a href={`tel:${contact.phone}`} className="text-[#00ff9f] hover:underline hover:text-white transition-colors">
                  {contact.phone}
                </a>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-[#a09a90]">GitHub</span>
                <a href={contact.github} target="_blank" rel="noreferrer" className="text-[#e8e0d4] hover:underline transition-colors">
                  github.com/utsav
                </a>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-[#a09a90]">LinkedIn</span>
                <a href={contact.linkedin} target="_blank" rel="noreferrer" className="text-[#e8e0d4] hover:underline transition-colors">
                  Connect on LinkedIn
                </a>
              </div>

              {/* LeetCode spans both columns at the bottom */}
              <div className="col-span-full flex flex-col gap-1 pt-4 mt-2 border-t border-[#1a1a24]">
                <span className="text-[10px] uppercase tracking-widest text-[#ffd700]">Competitive Programming</span>
                <a 
                  href={contact.socials?.find((item) => item.label === "LeetCode")?.url || "#"} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                  <span className="text-[#e8e0d4]">LeetCode Profile</span>
                  <span className="rounded border border-[#ffd700]/30 bg-[#ffd700]/10 px-2 py-0.5 text-[10px] text-[#ffd700]">
                    Rating 1665 (300+ Solved)
                  </span>
                </a>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
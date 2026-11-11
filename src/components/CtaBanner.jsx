import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BRAND } from "@/content/site";
import { ButtonPrimary } from "./Buttons";
import { Reveal, Eyebrow } from "./Motion";

const CtaBanner = ({ testid = "cta-banner" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} data-testid={testid} className="relative overflow-hidden bg-[#111111] text-white">
      <motion.div className="absolute inset-0" style={{ y }}>
        <img
          src={BRAND.skylineImage}
          alt=""
          aria-hidden="true"
          className="h-[120%] w-full object-cover opacity-25"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-[#111111]/60" />
      </motion.div>
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <Eyebrow onDark>Begin Today</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 max-w-3xl font-serif-display text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
            Your Next Chapter Could Begin <span className="italic text-[#D71920]">Anywhere</span> in the World.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65">
            One honest conversation can change how you see your options. Tell us where you want to go —
            we'll tell you exactly what it takes to get there.
          </p>
        </Reveal>
        <Reveal delay={0.3} className="mt-9">
          <ButtonPrimary to="/contact#enquiry" testid="cta-talk-to-counsellors">
            Talk to Our Counsellors
          </ButtonPrimary>
        </Reveal>
      </div>
    </section>
  );
};

export default CtaBanner;

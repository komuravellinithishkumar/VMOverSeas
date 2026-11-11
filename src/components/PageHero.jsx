import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Eyebrow, MaskedLines } from "./Motion";

const PageHero = ({ eyebrow, titleLines, description, image, imageAlt, note }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section ref={ref} data-testid="page-hero" className="relative flex min-h-[62vh] items-end overflow-hidden bg-[#111111] text-white">
      <motion.div className="absolute inset-0" style={{ y }}>
        {image && (
          <img src={image} alt={imageAlt || ""} className="h-[115%] w-full object-cover opacity-50" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-[#111111]/30" />
      </motion.div>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-40 sm:px-8">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <Eyebrow onDark>{eyebrow}</Eyebrow>
        </motion.div>
        <h1 className="mt-5 font-serif-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
          <MaskedLines lines={titleLines} delay={0.25} />
        </h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            {description}
          </motion.p>
        )}
        {note && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="mt-6 font-mono-alt text-[10px] uppercase leading-relaxed tracking-[0.2em] text-white/70 sm:text-[11px] sm:tracking-[0.25em]"
          >
            {note}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageHero;

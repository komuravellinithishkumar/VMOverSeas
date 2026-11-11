import { motion } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1];

export const Reveal = ({ children, delay = 0, y = 36, className = "", once = true }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once, margin: "-80px" }}
    transition={{ duration: 0.9, delay, ease: EASE }}
  >
    {children}
  </motion.div>
);

export const Eyebrow = ({ children, onDark = false, className = "" }) => (
  <span
    className={`inline-flex items-center gap-3 text-[11px] font-mono-alt font-semibold uppercase tracking-[0.3em] ${onDark ? "text-white/85" : "text-[#D71920]"} ${className}`}
  >
    <span className="h-px w-8 bg-[#D71920]" aria-hidden="true" />
    {children}
  </span>
);

export const MaskedLines = ({ lines, className = "", lineClassName = "", delay = 0 }) => (
  <span className={className}>
    {lines.map((line, i) => (
      <span key={i} className="block overflow-hidden pb-[0.08em]">
        <motion.span
          className={`block ${lineClassName}`}
          initial={{ y: "110%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1, delay: delay + i * 0.12, ease: EASE }}
        >
          {line}
        </motion.span>
      </span>
    ))}
  </span>
);

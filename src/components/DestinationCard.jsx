import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { EASE } from "./Motion";

const DestinationCard = ({ destination, index = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 44 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.8, delay: (index % 3) * 0.12, ease: EASE }}
  >
    <Link
      to={destination.path}
      data-testid={`destination-card-${destination.id}`}
      className="group relative block aspect-[3/4] overflow-hidden bg-[#111111]"
      aria-label={`Study in ${destination.name}`}
    >
      <img
        src={destination.image}
        alt={destination.imageAlt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/10 transition-opacity duration-500" />
      <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[#D71920] transition-transform duration-500 ease-out group-hover:scale-x-100" />
      <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-7">
        <span className="w-fit font-mono-alt text-[10px] tracking-[0.35em] text-white/70">
          {destination.tag} — {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <h3 className="font-serif-display text-2xl font-semibold text-white sm:text-3xl">
            {destination.name}
          </h3>
          <p className="mt-2 max-w-[92%] text-[13px] leading-relaxed text-white/70 opacity-0 transition-all duration-500 group-hover:opacity-100 line-clamp-3">
            {destination.blurb}
          </p>
          <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 group-hover:text-[#D71920]">
            Explore
            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
        </div>
      </div>
    </Link>
  </motion.div>
);

export default DestinationCard;

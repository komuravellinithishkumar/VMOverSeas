import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const ButtonPrimary = ({ to, children, testid, className = "" }) => (
  <Link
    to={to}
    data-testid={testid}
    className={`group inline-flex items-center gap-3 bg-[#D71920] px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-white hover:text-[#111111] ${className}`}
  >
    {children}
    <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
  </Link>
);

export const ButtonGhost = ({ to, children, testid, dark = false, className = "" }) => (
  <Link
    to={to}
    data-testid={testid}
    className={`group inline-flex items-center gap-3 border px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 ${
      dark
        ? "border-white/30 text-white hover:border-[#D71920] hover:text-[#D71920]"
        : "border-[#111111]/30 text-[#111111] hover:border-[#D71920] hover:text-[#D71920]"
    } ${className}`}
  >
    {children}
    <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
  </Link>
);

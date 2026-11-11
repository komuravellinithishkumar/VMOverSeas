const Logo = ({ light = false, className = "" }) => (
  <div className={`flex items-center gap-3 ${className}`} data-testid="nav-logo-mark">
    <img
      src={light ? "/logo-white.png" : "/logo.png"}
      alt="VM Overseas — Fly High"
      className="h-12 w-auto shrink-0 sm:h-14"
    />
    <span
      className={`font-serif-display text-base font-bold leading-none tracking-[0.08em] sm:text-lg ${
        light ? "text-white" : "text-[#111111]"
      }`}
    >
      VM OVERSEAS
    </span>
  </div>
);

export default Logo;

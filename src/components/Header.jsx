import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { NAV_LINKS } from "@/content/site";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const base = "bg-white text-[#111111] border-black/10";
  const idle = "text-[#111111]/70 hover:text-[#111111]";

  return (
    <>
      <header
        data-testid="site-header"
        className={`fixed top-0 inset-x-0 z-50 border-b backdrop-blur-xl transition-colors duration-500 ${
          scrolled || open ? base : "bg-white text-[#111111] border-black/10"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex h-[76px] items-center justify-between gap-4">
            <Link to="/" aria-label="VM Overseas — Home">
              <Logo light={false} />
            </Link>

            <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
              {NAV_LINKS.map((l) => (
                <NavLink
                  key={l.id}
                  to={l.to}
                  end={l.to === "/"}
                  data-testid={`nav-link-${l.id}`}
                  className={({ isActive }) =>
                    `relative text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                      isActive ? "text-[#D71920]" : idle
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Link
                to="/contact#enquiry"
                data-testid="nav-cta-book-consultation"
                className="hidden md:inline-flex items-center gap-2 bg-[#D71920] px-5 py-2.5 text-[12px] font-semibold tracking-[0.12em] text-white uppercase transition-all duration-300 hover:bg-[#111111] hover:text-white border border-[#D71920] hover:border-[#111111]"
              >
                Book a Consultation
              </Link>

              <button
                type="button"
                onClick={() => setOpen(!open)}
                data-testid="mobile-menu-toggle"
                aria-label={open ? "Close menu" : "Open menu"}
                className={`lg:hidden p-2 text-[#111111]`}
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        data-testid="mobile-menu"
        className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } bg-white`}
      >
        <div className="flex h-full flex-col justify-center px-8 pt-16">
          <nav className="flex flex-col gap-2" aria-label="Mobile">
            {NAV_LINKS.map((l, i) => (
              <NavLink
                key={l.id}
                to={l.to}
                end={l.to === "/"}
                data-testid={`mobile-nav-link-${l.id}`}
                style={{ transitionDelay: `${i * 60}ms` }}
                className={({ isActive }) =>
                  `font-serif-display text-4xl py-3 border-b transition-all duration-500 ${
                    open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
                  } border-black/10 ${
                    isActive ? "text-[#D71920]" : "text-[#111111]"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <Link
            to="/contact#enquiry"
            data-testid="mobile-cta-book-consultation"
            className="mt-10 inline-flex w-fit items-center bg-[#D71920] px-7 py-3.5 text-sm font-semibold tracking-[0.12em] text-white uppercase"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;

import { Link } from "react-router-dom";
import Logo from "./Logo";
import { BRAND, DESTINATIONS, NAV_LINKS, CONTACT, DISCLAIMER } from "@/content/site";

const Footer = () => (
  <footer data-testid="site-footer" className="bg-[#0C0C0C] text-white relative">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:py-20">
        <div>
          <Logo light />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
            An independent international education consultancy guiding students toward the right universities,
            the right destinations and the right decisions — with transparency at every step since {BRAND.est}.
          </p>
        </div>

        <div>
          <h3 className="text-[11px] font-mono-alt font-semibold uppercase tracking-[0.3em] text-[#D71920]">Navigate</h3>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <Link
                  to={l.to}
                  data-testid={`footer-link-${l.id}`}
                  className="text-sm text-white/60 transition-colors duration-300 hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[11px] font-mono-alt font-semibold uppercase tracking-[0.3em] text-[#D71920]">Destinations</h3>
          <ul className="mt-5 space-y-3">
            {DESTINATIONS.map((d) => (
              <li key={d.id}>
                <Link
                  to={d.path}
                  data-testid={`footer-destination-${d.id}`}
                  className="text-sm text-white/60 transition-colors duration-300 hover:text-white"
                >
                  Study in {d.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[11px] font-mono-alt font-semibold uppercase tracking-[0.3em] text-[#D71920]">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/60">
            <li data-testid="footer-phone"><a href={`tel:${CONTACT.phoneTel}`} className="transition-colors duration-300 hover:text-white">{CONTACT.phone}</a></li>
            <li data-testid="footer-email"><a href={`mailto:${CONTACT.email}`} className="transition-colors duration-300 hover:text-white">{CONTACT.email}</a></li>
            <li data-testid="footer-address" className="leading-relaxed"><a href={CONTACT.mapUrl} target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-white">{CONTACT.address}</a></li>
          </ul>
          <Link
            to="/contact#enquiry"
            data-testid="footer-cta"
            className="mt-6 inline-flex items-center gap-2 bg-[#D71920] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-white hover:text-[#111111]"
          >
            Book a Consultation
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="text-[11px] leading-relaxed text-white/40" data-testid="footer-disclaimer">
          {DISCLAIMER}
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono-alt tracking-wider text-white/40">
          <span>© {new Date().getFullYear()} {BRAND.name}. All rights reserved. <Link to="/privacy" data-testid="footer-privacy" className="ml-3 underline underline-offset-4 hover:text-white">Privacy Policy</Link></span>
          <span className="tracking-[0.35em] text-[#D71920]">{BRAND.tagline}</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

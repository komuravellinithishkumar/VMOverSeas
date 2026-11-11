import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import { Reveal, Eyebrow } from "@/components/Motion";
import { BRAND, SERVICES } from "@/content/site";
import Icon from "@/components/Icon";

const Services = () => {

  return (
    <>
      <Seo
        title="Our Services — VM Overseas | Profile Assessment, Shortlisting, Applications & Visa Guidance"
        description="From student profile assessment and university shortlisting to application assistance, documentation, visa process guidance and pre-departure briefings — structured support at every stage."
      />
      <div data-testid="services-page">
        <PageHero
          eyebrow="Our Services"
          titleLines={["Structured Support,", "Start to Departure."]}
          description="Seven services, one goal: a study-abroad journey that is planned, transparent and built around you. Every engagement begins with understanding — never with a sales pitch."
          image={BRAND.graduationImage}
          imageAlt={BRAND.graduationImageAlt}
        />

        <section data-testid="services-grid-section" className={`bg-white text-[#111111] transition-colors duration-700`}>
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
            <Reveal>
              <Eyebrow>What We Offer</Eyebrow>
              <h2 className="mt-5 max-w-2xl font-serif-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Seven Services. One Seamless Journey.
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-px overflow-hidden border sm:grid-cols-2" style={{ borderColor: "rgba(0,0,0,0.1)", backgroundColor: "rgba(0,0,0,0.1)" }}>
              {SERVICES.map((s, i) => (
                <Reveal key={s.title} delay={(i % 2) * 0.08} className="h-full">
                  <div
                    data-testid={`services-page-card-${i + 1}`}
                    className={`group flex h-full flex-col p-8 transition-colors duration-500 sm:p-10 ${
                      "bg-white hover:bg-[#F9F9F9]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[#D71920] transition-transform duration-500 group-hover:-translate-y-1">
                        <Icon name={s.icon} />
                      </span>
                      <span className={`font-mono-alt text-[11px] tracking-[0.3em] text-[#111111]/30`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-6 font-serif-display text-xl font-semibold sm:text-2xl">{s.title}</h3>
                    <p className={`mt-3 text-sm leading-relaxed sm:text-base text-[#111111]/60`}>{s.text}</p>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={0.08} className="h-full">
                <Link
                  to="/contact#enquiry"
                  data-testid="services-page-card-cta"
                  className="group flex h-full flex-col justify-between bg-[#D71920] p-8 text-white transition-colors duration-500 hover:bg-[#B01419] sm:p-10"
                >
                  <span className="font-serif-display text-xl font-semibold sm:text-2xl">
                    Every journey begins with a conversation.
                  </span>
                  <span className="mt-8 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em]">
                    Book a Consultation
                    <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        <CtaBanner />
      </div>
    </>
  );
};

export default Services;

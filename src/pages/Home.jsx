import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Seo from "@/components/Seo";
import Marquee from "@/components/Marquee";
import DestinationCard from "@/components/DestinationCard";
import CtaBanner from "@/components/CtaBanner";
import Testimonials from "@/components/Testimonials";
import { ButtonPrimary, ButtonGhost } from "@/components/Buttons";
import { Reveal, Eyebrow, MaskedLines } from "@/components/Motion";
import { BRAND, DESTINATIONS, SERVICES, WHY_CHOOSE } from "@/content/site";
import Icon from "@/components/Icon";

const Seal = () => {
  const reduce = useReducedMotion();
  return (
    <div className="relative h-[88px] w-[88px] shrink-0 sm:h-24 sm:w-24" aria-hidden="true">
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full text-white/80"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      >
        <defs>
          <path id="seal-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <text fill="currentColor" fontSize="17" fontWeight="600" className="font-mono-alt uppercase">
          <textPath href="#seal-circle" textLength="486" lengthAdjust="spacing">Students successfully sent abroad •</textPath>
        </text>
      </motion.svg>
      <div className="absolute inset-[18px] flex items-center justify-center rounded-full bg-[#D71920] text-white shadow-[0_8px_24px_-6px_rgba(215,25,32,0.7)] sm:inset-[20px]">
        <Check size={22} strokeWidth={2.6} />
      </div>
    </div>
  );
};

const TrustBar = () => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 1.4 }}
    data-testid="trust-bar"
    className="mt-14 flex flex-col gap-6 border-t border-white/15 pt-8 sm:mt-16 md:flex-row md:items-center md:gap-10"
  >
    <div className="flex items-center gap-5">
      <Seal />
      <div>
        <div className="font-serif-display text-5xl font-bold leading-none tracking-tight sm:text-6xl">
          1000<span className="text-[#D71920]">+</span>
        </div>
        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/75 sm:text-xs">
          Students successfully sent abroad
        </p>
      </div>
    </div>

    <div className="hidden h-12 w-px bg-white/15 md:block" />

    <dl className="flex gap-10">
      <div>
        <dt className="font-mono-alt text-[10px] uppercase tracking-[0.22em] text-white/50">Guiding since</dt>
        <dd className="mt-1.5 font-serif-display text-2xl font-semibold">{BRAND.est}</dd>
      </div>
      <div>
        <dt className="font-mono-alt text-[10px] uppercase tracking-[0.22em] text-white/50">Destinations</dt>
        <dd className="mt-1.5 font-serif-display text-2xl font-semibold">{DESTINATIONS.length}</dd>
      </div>
    </dl>
  </motion.div>
);

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section ref={ref} data-testid="hero-section" className="relative flex min-h-[100svh] items-end overflow-hidden bg-[#111111] text-white">
      <motion.div className="absolute inset-0" style={{ y }}>
        <img
          src={BRAND.heroImage}
          alt={BRAND.heroImageAlt}
          className="h-[115%] w-full object-cover opacity-55"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/45 to-[#111111]/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/80 via-[#111111]/40 to-transparent" />
      </motion.div>


      <motion.div style={{ opacity }} className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 pt-40 sm:px-8 sm:pb-16">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-mono-alt text-[10px] uppercase leading-relaxed tracking-[0.22em] text-white/80 sm:text-[11px] sm:tracking-[0.3em]"
          data-testid="hero-since"
        >
          Guiding Global Aspirations Since {BRAND.est}
        </motion.p>

        <h1 className="mt-6 max-w-4xl font-serif-display text-4xl font-bold leading-[1.06] tracking-tight sm:text-6xl lg:text-7xl" data-testid="hero-headline">
          <MaskedLines lines={["Your Global Education", "Journey Starts", "Here."]} delay={0.35} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.95 }}
          className="mt-7 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg"
          data-testid="hero-description"
        >
          Every dream deserves the right direction. Discover international education opportunities with
          personalised university shortlisting, transparent guidance, and support throughout your journey.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.15 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <ButtonPrimary to="/contact#enquiry" testid="hero-cta-consult">
            Start Your Journey
          </ButtonPrimary>
          <ButtonGhost to="/destinations" testid="hero-cta-explore" dark>
            Explore Destinations
          </ButtonGhost>
        </motion.div>

        <TrustBar />
      </motion.div>
    </section>
  );
};

const Intro = () => (
  <section data-testid="intro-section" className={`bg-white text-[#111111] transition-colors duration-700`}>
    <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <Reveal>
          <Eyebrow>Our Philosophy</Eyebrow>
          <h2 className="mt-5 font-serif-display text-3xl font-bold leading-[1.14] tracking-tight sm:text-4xl lg:text-5xl">
            Big Dreams Deserve <span className="italic text-[#D71920]">the Right</span> Guidance.
          </h2>
        </Reveal>
        <div className="flex flex-col justify-end">
          <Reveal delay={0.15}>
            <p className={`text-base leading-relaxed sm:text-lg text-[#111111]/70`}>
              Studying abroad is one of the biggest decisions a family makes. We put the student at the centre of
              every recommendation — understanding aspirations before destinations, profiles before promises,
              and budgets before brochures.
            </p>
            <p className={`mt-5 text-base leading-relaxed sm:text-lg text-[#111111]/70`}>
              No pressure, no inflated claims. Just structured, honest guidance from people who believe that the
              right university is the one that fits you.
            </p>
            <Link
              to="/about"
              data-testid="intro-read-story"
              className="group mt-7 inline-flex w-fit items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#D71920]"
            >
              Read Our Story
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

const DestinationsSection = () => (
  <section data-testid="destinations-section" className={`bg-[#F4F4F4] text-[#111111] transition-colors duration-700`}>
    <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <Reveal>
          <Eyebrow>Where Will You Go</Eyebrow>
          <h2 className="mt-5 font-serif-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Six Destinations.<br />One That's Yours.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <ButtonGhost to="/destinations" testid="destinations-view-all">
            All Destinations
          </ButtonGhost>
        </Reveal>
      </div>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {DESTINATIONS.map((d, i) => (
          <DestinationCard key={d.id} destination={d} index={i} />
        ))}
      </div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section data-testid="services-section" className={`bg-[#F4F4F4] text-[#111111] transition-colors duration-700`}>
    <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <Reveal>
          <Eyebrow>What We Do</Eyebrow>
          <h2 className="mt-5 font-serif-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Guidance at Every Stage
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <ButtonGhost to="/services" testid="services-view-all">
            Our Services
          </ButtonGhost>
        </Reveal>
      </div>
      <div className="mt-14 grid gap-px overflow-hidden border sm:grid-cols-2 lg:grid-cols-4" style={{ borderColor: "rgba(0,0,0,0.1)", backgroundColor: "rgba(0,0,0,0.1)" }}>
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 0.08} className="h-full">
            <div
              data-testid={`service-card-${i + 1}`}
              className={`group flex h-full flex-col p-8 transition-colors duration-500 ${
                "bg-[#F4F4F4] hover:bg-white"
              }`}
            >
              <span className="text-[#D71920] transition-transform duration-500 group-hover:-translate-y-1">
                <Icon name={s.icon} />
              </span>
              <h3 className="mt-5 font-serif-display text-lg font-semibold sm:text-xl">{s.title}</h3>
              <p className={`mt-3 text-sm leading-relaxed text-[#111111]/60`}>{s.text}</p>
            </div>
          </Reveal>
        ))}
        <Reveal delay={0.16} className="h-full">
          <Link
            to="/contact#enquiry"
            data-testid="services-card-cta"
            className="group flex h-full flex-col justify-between bg-[#D71920] p-8 text-white transition-colors duration-500 hover:bg-[#B01419]"
          >
            <span className="font-serif-display text-lg font-semibold sm:text-xl">
              Not sure where to begin?
            </span>
            <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em]">
              Book a Consultation
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </Reveal>
      </div>
    </div>
  </section>
);

const WhySection = () => (
  <section data-testid="why-section" className={`relative overflow-hidden bg-white text-[#111111] transition-colors duration-700`}>
    <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <Reveal>
        <Eyebrow>The Difference</Eyebrow>
        <h2 className="mt-5 max-w-2xl font-serif-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Why Students Choose <span className="italic text-[#D71920]">VM Overseas</span>
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {WHY_CHOOSE.map((w, i) => (
          <Reveal key={w.title} delay={(i % 3) * 0.1}>
            <div data-testid={`why-card-${i + 1}`} className="group">
              <div className={`flex h-12 w-12 items-center justify-center border transition-colors duration-500 group-hover:border-[#D71920] border-black/15`}>
                <span className="text-[#D71920]">
                  <Icon name={w.icon} size={20} />
                </span>
              </div>
              <h3 className="mt-5 font-serif-display text-lg font-semibold">{w.title}</h3>
              <p className={`mt-2.5 text-sm leading-relaxed text-[#111111]/60`}>{w.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const Home = () => {

  return (
    <>
      <Seo
        title="VM Overseas — International Education Consultancy | Study Abroad Guidance Since 2021"
        description="VM Overseas guides students to study abroad with personalised university shortlisting, transparent counselling and end-to-end application support across USA, UK, Australia, Germany, Singapore and Europe."
      />
      <div data-testid="home-page">
        <Hero />
        <Marquee
items={["Personalised Shortlisting", "USA", "Transparent Guidance", "United Kingdom", "Since 2021", "Australia", "Student-First", "Germany", "FLY HIGH", "Singapore", "Honest Counsel", "Europe"]}
        />
        <Intro />
        <DestinationsSection />
        <ServicesSection />
        <WhySection />
        <Testimonials />
        <CtaBanner />
      </div>
    </>
  );
};

export default Home;

import { useParams, Navigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import Seo from "@/components/Seo";
import DestinationCard from "@/components/DestinationCard";
import { ButtonPrimary, ButtonGhost } from "@/components/Buttons";
import { Reveal, Eyebrow, MaskedLines } from "@/components/Motion";
import { DESTINATIONS } from "@/content/site";

const ListBlock = ({ items, testid }) => (
  <ul className="space-y-4">
    {items.map((item, i) => (
      <Reveal key={i} delay={i * 0.06}>
        <li data-testid={`${testid}-${i + 1}`} className="flex items-start gap-4">
          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center bg-[#D71920]">
            <Check size={12} className="text-white" strokeWidth={3} />
          </span>
          <span className={`text-sm leading-relaxed sm:text-base text-[#111111]/70`}>{item}</span>
        </li>
      </Reveal>
    ))}
  </ul>
);

const DestinationPage = () => {
  const { id } = useParams();
  const destination = DESTINATIONS.find((d) => d.id === id);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  if (!destination) return <Navigate to="/404" replace />;

  const others = DESTINATIONS.filter((d) => d.id !== id).slice(0, 3);

  return (
    <>
      <Seo
        title={`Study in ${destination.name} — VM Overseas | Universities, Planning & Guidance`}
        description={`${destination.blurb} Learn why students choose ${destination.name}, popular fields of study, admission planning, and how VM Overseas supports your journey.`}
      />
      <div data-testid={`destination-page-${id}`}>
        <section ref={heroRef} className="relative flex min-h-[70vh] items-end overflow-hidden bg-[#111111] text-white">
          <motion.div className="absolute inset-0" style={{ y }}>
            <img src={destination.image} alt={destination.imageAlt} className="h-[115%] w-full object-cover opacity-55" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/55 to-[#111111]/25" />
          </motion.div>
          <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-44 sm:px-8">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-mono-alt text-[11px] uppercase tracking-[0.35em] text-[#D71920]"
            >
              Study Destination — {destination.tag}
            </motion.p>
            <h1 className="mt-5 font-serif-display text-4xl font-bold leading-[1.06] tracking-tight sm:text-6xl lg:text-7xl">
              <MaskedLines lines={["Study in", destination.name]} delay={0.3} />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.8 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg"
            >
              {destination.blurb}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 1 }}
              className="mt-5 max-w-xl font-mono-alt text-[11px] uppercase leading-relaxed tracking-[0.2em] text-[#D71920]"
            >
              {destination.heroNote}
            </motion.p>
          </div>
        </section>

        <section data-testid="why-destination-section" className={`bg-white text-[#111111] transition-colors duration-700`}>
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
              <Reveal>
                <Eyebrow>The Case For</Eyebrow>
                <h2 className="mt-5 font-serif-display text-3xl font-bold tracking-tight sm:text-4xl">
                  Why Students Choose {destination.name}
                </h2>
              </Reveal>
              <ListBlock items={destination.why} testid="why-point" />
            </div>
          </div>
        </section>

        <section data-testid="fields-section" className={`bg-[#F4F4F4] text-[#111111] transition-colors duration-700`}>
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
            <Reveal>
              <Eyebrow>Popular Fields of Study</Eyebrow>
              <h2 className="mt-5 font-serif-display text-3xl font-bold tracking-tight sm:text-4xl">
                Where Students Thrive in {destination.name}
              </h2>
            </Reveal>
            <div className="mt-12 flex flex-wrap gap-3">
              {destination.fields.map((f, i) => (
                <Reveal key={f} delay={i * 0.05}>
                  <span
                    data-testid={`field-tag-${i + 1}`}
                    className={`inline-block border px-5 py-2.5 text-sm transition-colors duration-300 hover:border-[#D71920] hover:text-[#D71920] ${
                      "border-black/15 text-[#111111]/80"
                    }`}
                  >
                    {f}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section data-testid="considerations-section" className={`bg-white text-[#111111] transition-colors duration-700`}>
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
              <Reveal>
                <Eyebrow>Before You Apply</Eyebrow>
                <h2 className="mt-5 font-serif-display text-3xl font-bold tracking-tight sm:text-4xl">
                  University Selection, Considered Carefully
                </h2>
              </Reveal>
              <ListBlock items={destination.considerations} testid="consideration-point" />
            </div>
          </div>
        </section>

        <section data-testid="planning-section" className="relative overflow-hidden bg-[#0C0C0C] text-white">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
            <div className="max-w-3xl">
              <Reveal>
                <Eyebrow>Admission Planning</Eyebrow>
                <h2 className="mt-5 font-serif-display text-3xl font-bold tracking-tight sm:text-4xl">
                  Timing Is Half the Application
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">{destination.planning}</p>
              </Reveal>
            </div>
          </div>
        </section>

        <section data-testid="support-section" className={`bg-white text-[#111111] transition-colors duration-700`}>
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
            <div className="max-w-3xl">
              <div>
                <Reveal>
                  <Eyebrow>How VM Overseas Supports You</Eyebrow>
                  <h2 className="mt-5 font-serif-display text-3xl font-bold tracking-tight sm:text-4xl">
                    From Shortlist to Touchdown in {destination.name}
                  </h2>
                </Reveal>
                <Reveal delay={0.15}>
                  <p className={`mt-6 text-base leading-relaxed text-[#111111]/70`}>
                    Every service we offer applies to your {destination.name} plan — shaped around this
                    destination's specific systems, deadlines and requirements. You'll work with counsellors
                    who know what universities here actually look for.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <ButtonPrimary to="/contact#enquiry" testid="destination-consultation-cta">
                      Request a Consultation
                    </ButtonPrimary>
                    <ButtonGhost to="/destinations" testid="destination-back-link">
                      All Destinations
                    </ButtonGhost>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section data-testid="more-destinations-section" className={`bg-[#F4F4F4] text-[#111111] transition-colors duration-700`}>
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
            <Reveal>
              <Eyebrow>Keep Exploring</Eyebrow>
              <h2 className="mt-5 font-serif-display text-3xl font-bold tracking-tight sm:text-4xl">
                Other Destinations to Consider
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((d, i) => (
                <DestinationCard key={d.id} destination={d} index={i} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DestinationPage;

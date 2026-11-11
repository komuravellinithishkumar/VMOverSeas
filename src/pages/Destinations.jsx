import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import DestinationCard from "@/components/DestinationCard";
import CtaBanner from "@/components/CtaBanner";
import { Reveal, Eyebrow } from "@/components/Motion";
import { BRAND, DESTINATIONS } from "@/content/site";

const COMPARISONS = [
  { label: "Academic breadth", text: "USA offers the widest choice of institutions; Germany and Europe excel in focused, specialised programmes." },
  { label: "Duration & cost", text: "UK degrees are typically shorter; German public universities can be tuition-free; Australia and Singapore sit in between." },
  { label: "Post-study pathways", text: "Work options after graduation differ by country — we factor them into your shortlist from the very first conversation." },
];

const Destinations = () => {

  return (
    <>
      <Seo
        title="Study Destinations — VM Overseas | USA, UK, Australia, Germany, Singapore & Europe"
        description="Compare six leading study destinations — USA, UK, Australia, Germany, Singapore and Europe — and find the country that fits your academic profile, aspirations and budget."
      />
      <div data-testid="destinations-page">
        <PageHero
          eyebrow="Study Destinations"
          titleLines={["The World Is Wide.", "Choose It Well."]}
          description="Six destinations, six very different systems. We help you compare them honestly — academics, cost, lifestyle and post-study pathways — so your choice is deliberate, not default."
          image={BRAND.skylineImage}
          imageAlt={BRAND.skylineImageAlt}
        />

        <section data-testid="comparison-section" className={`bg-white text-[#111111] transition-colors duration-700`}>
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
            <Reveal>
              <Eyebrow>Choosing a Country</Eyebrow>
              <h2 className="mt-5 max-w-2xl font-serif-display text-3xl font-bold tracking-tight sm:text-4xl">
                There's No "Best" Country — Only the Best Fit
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {COMPARISONS.map((c, i) => (
                <Reveal key={c.label} delay={i * 0.1}>
                  <div data-testid={`comparison-card-${i + 1}`} className={`border-t-2 border-[#D71920] pt-6`}>
                    <h3 className="font-serif-display text-lg font-semibold">{c.label}</h3>
                    <p className={`mt-3 text-sm leading-relaxed text-[#111111]/60`}>{c.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section data-testid="destination-grid-section" className={`bg-[#F4F4F4] text-[#111111] transition-colors duration-700`}>
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
            <Reveal>
              <Eyebrow>Explore Each Destination</Eyebrow>
              <h2 className="mt-5 font-serif-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Where Could Your Story Unfold?
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {DESTINATIONS.map((d, i) => (
                <DestinationCard key={d.id} destination={d} index={i} />
              ))}
            </div>
          </div>
        </section>

        <CtaBanner />
      </div>
    </>
  );
};

export default Destinations;

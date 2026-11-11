import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import { Reveal, Eyebrow } from "@/components/Motion";
import { BRAND } from "@/content/site";

const About = () => {

  return (
    <>
      <Seo
        title="About Us — VM Overseas | Student-First Study Abroad Consultancy Since 2021"
        description="VM Overseas is an independent international education consultancy established in 2021, built on personalised guidance, honest assessments and budget-aligned university recommendations."
      />
      <div data-testid="about-page">
        <PageHero
          eyebrow="About VM Overseas"
          titleLines={["Guidance That Puts", "the Student First."]}
          description="Since 2021, we've helped students and families navigate international education with clarity — personalised shortlisting, honest assessments and structured support at every step."
          image={BRAND.secondaryHero}
          imageAlt={BRAND.secondaryHeroAlt}
        />

        <section data-testid="vision-section" className={`bg-white text-[#111111] transition-colors duration-700`}>
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
            <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
              <Reveal>
                <Eyebrow>Our Vision</Eyebrow>
                <h2 className="mt-5 font-serif-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                  A World Where Every Student's Plan Is as Individual as Their Dream
                </h2>
                <p className={`mt-6 text-base leading-relaxed text-[#111111]/70`}>
                  Studying abroad is a dream for many students and families. But navigating international
                  education can be confusing — generic advice, incomplete information, and recommendations
                  that don't align with a student's academic background or financial situation.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className={`border-l-2 border-[#D71920] pl-8 `}>
                  <Eyebrow>Our Mission</Eyebrow>
                  <h3 className="mt-5 font-serif-display text-2xl font-semibold leading-snug sm:text-3xl">
                    To make the overseas education journey smoother, clearer and more informed.
                  </h3>
                  <p className={`mt-6 text-base leading-relaxed text-[#111111]/70`}>
                    VM Overseas was established to provide a more personalised and structured approach. We
                    believe every student deserves guidance that considers their individual aspirations,
                    academic profile and budget. We act as a bridge between students and international
                    education opportunities — and we never promise what we cannot control.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section data-testid="journey-section" className={`bg-[#F4F4F4] text-[#111111] transition-colors duration-700`}>
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
              <Reveal>
                <div className="relative">
                  <div className="absolute -right-4 -top-4 h-full w-full border border-[#D71920]" aria-hidden="true" />
                  <img
                    src={BRAND.storyImage}
                    alt={BRAND.storyImageAlt}
                    loading="lazy"
                    className="relative aspect-[4/5] w-full object-cover"
                  />
                </div>
              </Reveal>
              <div>
                <Reveal delay={0.1}>
                  <Eyebrow>Since 2021</Eyebrow>
                  <h2 className="mt-5 font-serif-display text-3xl font-bold tracking-tight sm:text-4xl">
                    Why We Exist
                  </h2>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className={`mt-6 text-base leading-relaxed text-[#111111]/70`}>
                    Our answer is a consultancy built on three commitments: understand before advising,
                    align every recommendation with the student's budget, and communicate with complete
                    transparency — including about what we cannot guarantee.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <CtaBanner />
      </div>
    </>
  );
};

export default About;

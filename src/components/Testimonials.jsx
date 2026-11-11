import { Quote } from "lucide-react";
import { Reveal, Eyebrow } from "./Motion";
import { TESTIMONIALS, TESTIMONIALS_ARE_SAMPLE } from "@/content/site";

const Testimonials = () => (
  <section data-testid="testimonials-section" className="bg-[#F4F4F4] text-[#111111]">
    <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <Reveal>
        <Eyebrow>Kind Words</Eyebrow>
        <h2 className="mt-5 max-w-2xl font-serif-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          What Students and Families <span className="italic text-[#D71920]">Say</span>
        </h2>
        {TESTIMONIALS_ARE_SAMPLE && (
          <p data-testid="testimonials-sample-note" className="mt-4 font-mono-alt text-[11px] uppercase tracking-[0.2em] text-[#111111]/50">
            Sample reviews — replace with real ones before launch
          </p>
        )}
      </Reveal>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.1} className="h-full">
            <figure data-testid={`testimonial-${i + 1}`} className="flex h-full flex-col border border-black/10 bg-white p-8">
              <Quote size={26} strokeWidth={1.5} className="text-[#D71920]" aria-hidden="true" />
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-[#111111]/75">“{t.quote}”</blockquote>
              <figcaption className="mt-7 border-t border-black/10 pt-5">
                <span className="block font-serif-display text-lg font-semibold">{t.name}</span>
                <span className="block text-xs text-[#111111]/50">{t.detail}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;

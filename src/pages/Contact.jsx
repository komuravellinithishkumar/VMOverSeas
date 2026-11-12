import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, ChevronDown } from "lucide-react";
import { toast } from "sonner";
import Seo from "@/components/Seo";
import { Reveal, Eyebrow, MaskedLines } from "@/components/Motion";
import { CONTACT, FAQS, DESTINATIONS } from "@/content/site";

const LEVELS = ["High School (Grade 11–12)", "Undergraduate", "Postgraduate", "Doctorate / Research", "Diploma / Certificate"];
// Budget field is hidden for now. Set to true to bring it back.
const SHOW_BUDGET = false;
const BUDGETS = ["Under ₹15 lakhs", "₹15–25 lakhs", "₹25–40 lakhs", "₹40–60 lakhs", "Above ₹60 lakhs", "Not sure yet"];
const COURSES = ["Business & Management", "Computer Science & IT", "Engineering", "Medicine & Health Sciences", "Law & Social Sciences", "Arts, Design & Media", "Natural Sciences", "Other / Undecided"];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    course: "",
    level: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const validate = (values) => {
    const e = {};
    if (!values.name.trim() || values.name.trim().length < 2) e.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = "Please enter a valid email address.";
    if (!/^\+?[0-9\s\-()]{8,16}$/.test(values.phone.trim())) e.phone = "Please enter a valid phone number.";
    if (!values.destination) e.destination = "Please select a preferred destination.";
    if (!values.course) e.course = "Please select a course interest.";
    if (!values.level) e.level = "Please select your education level.";
    if (SHOW_BUDGET && !values.budget) e.budget = "Please select an approximate budget.";
    return e;
  };

  const set = (key) => (ev) => {
    const value = ev.target.value;
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((er) => {
      const next = { ...er };
      delete next[key];
      return next;
    });
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    const e = validate(form);
    setErrors(e);
    if (Object.keys(e).length > 0) {
      toast.error("Please review the highlighted fields.");
      return;
    }
    setSending(true);
    try {
      const text = [
        "New Enquiry — VM Overseas Website",
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone}`,
        `Preferred destination: ${form.destination}`,
        `Course interest: ${form.course}`,
        `Education level: ${form.level}`,
        SHOW_BUDGET ? `Approximate budget: ${form.budget}` : null,
        form.message ? `Message: ${form.message}` : null,
      ]
        .filter(Boolean)
        .join("\n");
      window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
      setSent(true);
    } catch {
      toast.error("Something went wrong. Please try WhatsApp instead.");
    } finally {
      setSending(false);
    }
  };

  const inputCls = (key) =>
    `vm-input w-full border bg-transparent px-4 py-3.5 text-sm transition-all duration-300 ${
      errors[key]
        ? "border-[#D71920]"
        : "border-black/20 text-[#111111] placeholder:text-[#111111]/40"
    }`;

  const labelCls = `mb-2 block text-[11px] font-mono-alt font-semibold uppercase tracking-[0.2em] text-[#D71920]`;

  return (
    <>
      <Seo
        title="Contact Us — VM Overseas | Book a Study Abroad Consultation"
        description="Book a consultation with VM Overseas counsellors. Share your academic profile, preferred destination, course interest — we'll respond with honest, personalised guidance."
      />
      <div data-testid="contact-page">
        <section className={`relative overflow-hidden pt-40 pb-20 bg-[#F4F4F4] text-[#111111] transition-colors duration-700`}>
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.15 }}>
              <Eyebrow>Contact Us</Eyebrow>
            </motion.div>
            <h1 className="mt-5 max-w-3xl font-serif-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              <MaskedLines lines={["Let's Plan Your", "Journey, Together."]} delay={0.3} />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.75 }}
              className={`mt-6 max-w-2xl text-base leading-relaxed sm:text-lg text-[#111111]/70`}
            >
              Tell us about your goals and your circumstances. A counsellor will respond with an honest,
              personalised assessment — no pressure, no obligations.
            </motion.p>
          </div>
        </section>

        <section className={`bg-white text-[#111111] transition-colors duration-700`}>
          <div className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:pb-32">
            <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
              <Reveal>
                {sent ? (
                  <div data-testid="contact-success" className={`border p-10 border-black/15`}>
                    <span className="flex h-12 w-12 items-center justify-center bg-[#D71920]">
                      <Send size={20} className="text-white" />
                    </span>
                    <h2 className="mt-6 font-serif-display text-2xl font-bold sm:text-3xl">
                      Your Enquiry Is Ready.
                    </h2>
                    <p className={`mt-4 text-base leading-relaxed text-[#111111]/70`}>
                      "We've opened WhatsApp with your enquiry pre-filled — just press send there and a counsellor will respond. If WhatsApp didn't open, tap the button below."
                    </p>
                    <a
                        href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent("Hello VM Overseas, I'd like to discuss studying abroad.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="contact-whatsapp-button"
                        className="mt-7 inline-flex items-center gap-2 bg-[#D71920] px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-[#B01419]"
                      >
                        <MessageCircle size={16} />
                        Open WhatsApp
                      </a>
                    <button
                      type="button"
                      onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", destination: "", course: "", level: "", budget: "", message: "" }); }}
                      data-testid="contact-send-another"
                      className={`mt-6 block text-[12px] font-semibold uppercase tracking-[0.14em] underline underline-offset-4 text-[#111111]/60 hover:text-[#111111]`}
                    >
                      Send another enquiry
                    </button>
                  </div>
                ) : (
                  <form id="enquiry" data-testid="contact-form" onSubmit={onSubmit} noValidate className="scroll-mt-28 space-y-7">
                    <div className="grid gap-7 sm:grid-cols-2">
                      <div>
                        <label htmlFor="contact-name" className={labelCls}>Full Name *</label>
                        <input id="contact-name" data-testid="contact-input-name" type="text" value={form.name} onChange={set("name")} placeholder="Your full name" className={inputCls("name")} />
                        {errors.name && <p data-testid="error-name" className="mt-2 text-xs text-[#D71920]">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="contact-email" className={labelCls}>Email *</label>
                        <input id="contact-email" data-testid="contact-input-email" type="email" value={form.email} onChange={set("email")} placeholder="you@example.com" className={inputCls("email")} />
                        {errors.email && <p data-testid="error-email" className="mt-2 text-xs text-[#D71920]">{errors.email}</p>}
                      </div>
                    </div>
                    <div className="grid gap-7 sm:grid-cols-2">
                      <div>
                        <label htmlFor="contact-phone" className={labelCls}>Phone *</label>
                        <input id="contact-phone" data-testid="contact-input-phone" type="tel" value={form.phone} onChange={set("phone")} placeholder="+91 98765 43210" className={inputCls("phone")} />
                        {errors.phone && <p data-testid="error-phone" className="mt-2 text-xs text-[#D71920]">{errors.phone}</p>}
                      </div>
                      <div>
                        <label htmlFor="contact-destination" className={labelCls}>Preferred Destination *</label>
                        <select id="contact-destination" data-testid="contact-select-destination" value={form.destination} onChange={set("destination")} className={`${inputCls("destination")} `}>
                          <option value="">Select a destination</option>
                          {DESTINATIONS.map((d) => (
                            <option key={d.id} value={d.name}>{d.name}</option>
                          ))}
                          <option value="Not sure yet">Not sure yet</option>
                        </select>
                        {errors.destination && <p data-testid="error-destination" className="mt-2 text-xs text-[#D71920]">{errors.destination}</p>}
                      </div>
                    </div>
                    <div className="grid gap-7 sm:grid-cols-2">
                      <div>
                        <label htmlFor="contact-course" className={labelCls}>Course Interest *</label>
                        <select id="contact-course" data-testid="contact-select-course" value={form.course} onChange={set("course")} className={`${inputCls("course")} `}>
                          <option value="">Select a field</option>
                          {COURSES.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                        {errors.course && <p data-testid="error-course" className="mt-2 text-xs text-[#D71920]">{errors.course}</p>}
                      </div>
                      <div>
                        <label htmlFor="contact-level" className={labelCls}>Education Level *</label>
                        <select id="contact-level" data-testid="contact-select-level" value={form.level} onChange={set("level")} className={`${inputCls("level")} `}>
                          <option value="">Select your level</option>
                          {LEVELS.map((l) => (
                            <option key={l} value={l}>{l}</option>
                          ))}
                        </select>
                        {errors.level && <p data-testid="error-level" className="mt-2 text-xs text-[#D71920]">{errors.level}</p>}
                      </div>
                    </div>
                    {SHOW_BUDGET && (
                    <div>
                      <label htmlFor="contact-budget" className={labelCls}>Approximate Budget *</label>
                      <select id="contact-budget" data-testid="contact-select-budget" value={form.budget} onChange={set("budget")} className={`${inputCls("budget")} `}>
                        <option value="">Select a range</option>
                        {BUDGETS.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                      {errors.budget && <p data-testid="error-budget" className="mt-2 text-xs text-[#D71920]">{errors.budget}</p>}
                    </div>
                    )}
                    <div>
                      <label htmlFor="contact-message" className={labelCls}>Message</label>
                      <textarea id="contact-message" data-testid="contact-input-message" rows={5} value={form.message} onChange={set("message")} placeholder="Tell us anything else — your goals, timeline, or questions." className={`${inputCls("message")} resize-none`} />
                    </div>
                    <div>
                      <button
                        type="submit"
                        disabled={sending}
                        data-testid="contact-submit-button"
                        className="group inline-flex items-center gap-3 bg-[#D71920] px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-[#111111] hover:text-white disabled:opacity-60 border border-[#D71920] hover:border-[#111111]"
                      >
                        {sending ? "Sending…" : "Send via WhatsApp"}
                        <Send size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                      <p className={`mt-4 text-xs leading-relaxed text-[#111111]/40`} data-testid="contact-form-note">
                        Submitting opens WhatsApp with your enquiry pre-filled — nothing is sent until you press send in WhatsApp.
                      </p>
                    </div>
                  </form>
                )}
              </Reveal>

              <div>
                <Reveal delay={0.15}>
                  <div className={`border p-8 border-black/15`}>
                    <h2 className="font-serif-display text-xl font-bold">Reach Us Directly</h2>
                    <ul className={`mt-6 space-y-4 text-sm text-[#111111]/70`}>
                      <li data-testid="contact-info-phone"><span className="font-mono-alt text-[10px] uppercase tracking-[0.25em] text-[#D71920] block mb-1">Phone</span><a href={`tel:${CONTACT.phoneTel}`} className="hover:text-[#D71920]">{CONTACT.phone}</a></li>
                      <li data-testid="contact-info-email"><span className="font-mono-alt text-[10px] uppercase tracking-[0.25em] text-[#D71920] block mb-1">Email</span><a href={`mailto:${CONTACT.email}`} className="hover:text-[#D71920]">{CONTACT.email}</a></li>
                      <li data-testid="contact-info-address"><span className="font-mono-alt text-[10px] uppercase tracking-[0.25em] text-[#D71920] block mb-1">Office</span><a href={CONTACT.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#D71920]">{CONTACT.address}</a></li>
                    </ul>
                  </div>
                </Reveal>

                <Reveal delay={0.25} className="mt-10">
                  <h2 className="font-serif-display text-xl font-bold">Common Questions</h2>
                  <div className="mt-5">
                    {FAQS.map((f, i) => (
                      <div key={i} data-testid={`faq-item-${i + 1}`} className={`border-t border-black/10`}>
                        <button
                          type="button"
                          onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                          data-testid={`faq-toggle-${i + 1}`}
                          aria-expanded={openFaq === i}
                          className="flex w-full items-center justify-between gap-4 py-4 text-left"
                        >
                          <span className="text-sm font-semibold">{f.q}</span>
                          <ChevronDown size={16} className={`shrink-0 text-[#D71920] transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                        </button>
                        <div className={`overflow-hidden transition-all duration-500 ${openFaq === i ? "max-h-60 pb-4" : "max-h-0"}`}>
                          <p className={`text-sm leading-relaxed text-[#111111]/60`}>{f.a}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;

import Seo from "@/components/Seo";
import { Eyebrow } from "@/components/Motion";
import { BRAND, CONTACT } from "@/content/site";

const SECTIONS = [
  {
    title: "What we collect",
    text: "When you use the enquiry form, you may enter your name, email, phone number, preferred destination, course interest, education level, approximate budget and an optional message. Nothing is collected until you submit the form.",
  },
  {
    title: "How it is used",
    text: `This website has no server or database. Submitting the form opens WhatsApp with your enquiry pre-filled; it reaches ${BRAND.name} only if you choose to press send in WhatsApp. We use what you share solely to respond to your enquiry and to provide counselling.`,
  },
  {
    title: "Cookies and tracking",
    text: "We do not use advertising cookies or analytics on this website. Your browser may contact third parties such as Google Fonts and Unsplash to load fonts and images.",
  },
  {
    title: "Sharing",
    text: "We do not sell your information. We share it with universities or other parties only with your knowledge and as needed to carry out services you have asked for.",
  },
  {
    title: "Your choices",
    text: `To ask us to correct or delete information you have sent us, contact us on ${CONTACT.phone} or through WhatsApp.`,
  },
];

const Privacy = () => (
  <>
    <Seo
      title={`Privacy Policy — ${BRAND.name}`}
      description={`How ${BRAND.name} handles the information you share through this website.`}
    />
    <div data-testid="privacy-page" className="bg-white text-[#111111]">
      <div className="mx-auto max-w-3xl px-5 pb-24 pt-40 sm:px-8 lg:pb-32">
        <Eyebrow>Privacy Policy</Eyebrow>
        <h1 className="mt-5 font-serif-display text-4xl font-bold tracking-tight sm:text-5xl">Your information, handled with care.</h1>
        <div className="mt-12 space-y-10">
          {SECTIONS.map((s) => (
            <section key={s.title}>
              <h2 className="font-serif-display text-xl font-semibold">{s.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-[#111111]/70">{s.text}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  </>
);

export default Privacy;

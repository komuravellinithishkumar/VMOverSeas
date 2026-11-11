import Seo from "@/components/Seo";
import { ButtonPrimary, ButtonGhost } from "@/components/Buttons";

const NotFound = () => (
  <>
    <Seo title="Page Not Found — VM Overseas" description="The page you're looking for doesn't exist. Explore VM Overseas destinations, services and guidance for studying abroad." />
    <div data-testid="not-found-page" className="flex min-h-screen items-center bg-[#111111] text-white relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-40 sm:px-8">
        <p className="font-mono-alt text-[11px] uppercase tracking-[0.35em] text-[#D71920]" data-testid="not-found-eyebrow">
          Off Course
        </p>
        <h1 className="mt-5 font-serif-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl" data-testid="not-found-heading">
          This Page Has Flown.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
          The page you're looking for doesn't exist — but your destination might. Let's get you back on track.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonPrimary to="/" testid="not-found-home">
            Back to Home
          </ButtonPrimary>
          <ButtonGhost to="/destinations" testid="not-found-destinations" dark>
            Explore Destinations
          </ButtonGhost>
        </div>
      </div>
    </div>
  </>
);

export default NotFound;

const Marquee = ({ items }) => {
  const row = [...items, ...items, ...items];
  return (
    <div
      data-testid="editorial-marquee"
      className={`overflow-hidden border-y py-4 ${
        "border-black/10 bg-white"
      }`}
      aria-hidden="true"
    >
      <div className="vm-marquee-track flex w-max items-center gap-8">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-8">
            {row.map((item, i) => (
              <span key={`${half}-${i}`} className="flex items-center gap-8">
                <span
                  className={`whitespace-nowrap font-serif-display text-xl italic ${
                    "text-[#111111]/40"
                  }`}
                >
                  {item}
                </span>
                <span className="h-1.5 w-1.5 rotate-45 bg-[#D71920]" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;

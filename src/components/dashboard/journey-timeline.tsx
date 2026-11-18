import { trips } from "@/data/trips";

export function JourneyTimeline() {
  return (
    <section className="grid grid-cols-1 gap-6 bg-mist-deep px-5 py-[49px] sm:gap-[30px] sm:px-[clamp(25px,5vw,70px)] sm:py-16 sm:pb-[60px] min-[901px]:grid-cols-[minmax(220px,.72fr)_1.5fr] min-[901px]:gap-[clamp(35px,8vw,115px)]" id="journey-timeline" aria-labelledby="timeline-title">
      <div className="pt-[11px]">
        <p className="mb-3 text-[9px] font-bold tracking-[1.9px] text-olive">A LIFE MEASURED IN PLACES</p>
        <h2 id="timeline-title" className="m-0 font-display text-[40px] leading-[1.02] tracking-[-1.2px] text-olive sm:text-[clamp(36px,4vw,51px)]">Your journey<br className="hidden min-[901px]:block" /><em className="font-normal text-rust"> through the years.</em></h2>
        <p className="mt-[17px] max-w-[420px] font-display text-[15px] leading-[1.65] text-[#7e8984] min-[901px]:max-w-[260px]">Not a list of places. A collection of little versions of you, out in the world.</p>
      </div>
      <div className="relative before:absolute before:top-[14px] before:bottom-[14px] before:left-12 before:w-px before:bg-[#d5cebd] before:content-[''] sm:before:left-[56px]">
        {trips.map((trip) => (
          <article className="relative grid grid-cols-[98px_1fr] gap-[5px] pb-[17px] sm:grid-cols-[114px_1fr] sm:gap-[13px] sm:pb-[23px]" key={trip.year}>
            <div className="relative z-[1] flex items-start gap-3 pt-[7px] font-display text-[17px] text-[#8e794e] sm:gap-[17px] sm:text-[19px]"><span>{trip.year}</span><i className="mt-[5px] size-[9px] rounded-full border-2 border-mist-deep bg-rust shadow-[0_0_0_1px_#8daeb5]" /></div>
            <div className="flex min-w-0 items-center gap-[10px] bg-mist p-2 sm:gap-[15px] sm:px-[14px] sm:py-[10px]">
              <div className="h-[59px] w-16 shrink-0 bg-cover bg-center sm:h-[65px] sm:w-[82px]" role="img" aria-label={trip.imageAlt} style={{ backgroundImage: `url('${trip.image}')` }} />
              <div className="min-w-0"><p className="mb-1 text-[8px] text-[#8a9a98] sm:text-[9px]">{trip.country}</p><h3 className="m-0 overflow-hidden text-ellipsis whitespace-nowrap font-display text-[15px] leading-[1.2] text-olive sm:text-lg">{trip.place}</h3><span className="mt-[5px] block text-[7px] text-[#9ba09a] sm:text-[8px]">{trip.dates}</span></div>
            </div>
          </article>
        ))}
        <div className="relative z-[1] flex items-center gap-[18px] pl-2 text-[7px] font-bold tracking-[1.4px] text-[#aaa18b] sm:pl-[17px] sm:text-[8px]">MORE MEMORIES AHEAD<i className="size-[5px] rounded-full bg-clay" /></div>
      </div>
    </section>
  );
}

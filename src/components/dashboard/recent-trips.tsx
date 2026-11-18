import { trips } from "@/data/trips";
import { Icon } from "./icons";

export function RecentTrips() {
  return (
    <section className="py-[60px] sm:py-[82px] sm:pb-[78px]" id="stories" aria-labelledby="stories-title">
      <div className="mb-[21px] flex flex-col items-start gap-[13px] sm:mb-[30px] sm:flex-row sm:items-end sm:justify-between sm:gap-[25px]">
        <div>
          <p className="mb-3 text-[9px] font-bold tracking-[1.9px] text-olive">PLACES THAT STAY WITH YOU</p>
          <h2 id="stories-title" className="m-0 font-display text-[40px] leading-none tracking-[-1.3px] text-olive sm:text-[clamp(36px,4.2vw,54px)]">Your travel stories<span className="text-clay">.</span></h2>
        </div>
        <a className="inline-flex items-center gap-2 text-[11px] font-semibold text-rust transition-colors hover:text-olive sm:whitespace-nowrap sm:pb-[6px]" href="#journey-timeline">Wander through the years <Icon className="transition-transform group-hover:translate-x-1" name="arrow" size={16} /></a>
      </div>
      <div className="grid grid-cols-1 items-start gap-[29px] sm:grid-cols-2 sm:gap-[clamp(17px,2.2vw,32px)] min-[901px]:grid-cols-[1.12fr_.9fr_1.02fr]">
        {trips.map((trip, index) => (
          <article className={`min-w-0 transition-transform duration-300 hover:-translate-y-[5px] ${index === 2 ? "sm:col-start-1 min-[901px]:mt-[14px] min-[901px]:col-start-auto" : ""}`} key={trip.place}>
            <div className="relative h-[295px] overflow-hidden bg-[#b8c6bf] bg-cover bg-center transition-[filter] duration-300 after:absolute after:inset-x-0 after:top-[40%] after:bottom-0 after:bg-[linear-gradient(transparent,#061c2b66)] after:content-[''] hover:saturate-[1.12] sm:h-[290px] min-[901px]:h-[clamp(235px,27vw,355px)]" role="img" aria-label={trip.imageAlt} style={{ backgroundImage: `url('${trip.image}')` }}>
              <span className="absolute bottom-4 left-[17px] z-[1] font-display text-2xl text-white">{trip.year}</span>
              <span className="absolute right-[17px] bottom-4 z-[1] text-[9px] tracking-[1px] text-white/75">0{index + 1}</span>
            </div>
            <div className="px-[2px] pt-[13px] sm:pt-[17px]">
              <p className="mb-[9px] flex flex-wrap items-center gap-[6px] text-[9px] tracking-[.3px] text-[#819092]"><Icon className="text-rust" name="pin" size={14} /> {trip.country} <span className="text-[#c4bda9]">·</span> {trip.dates}</p>
              <h3 className="m-0 font-display text-[26px] leading-[1.12] tracking-[-.35px] text-olive sm:text-[clamp(22px,2.1vw,29px)]">{trip.place}</h3>
              <p className="my-[9px] mb-3 min-h-0 max-w-[340px] text-[11px] leading-[1.7] text-[#778582] sm:min-h-11">{trip.description}</p>
              <div className="flex items-center justify-between gap-[10px] border-t border-hairline pt-[10px] text-[9px] text-[#a0967b]"><span>{trip.companions.length} travelers</span><span className="inline-flex items-center gap-[6px] font-semibold text-rust">A story to revisit <Icon name="arrow" size={14} /></span></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

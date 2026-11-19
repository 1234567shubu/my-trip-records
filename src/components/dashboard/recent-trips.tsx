import { trips } from "@/data/trips";
import { Icon } from "./icons";
import { TripCard } from "./trip-card";

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
      <div className="grid grid-cols-1 items-start gap-[29px] sm:grid-cols-2 sm:gap-[clamp(17px,2.2vw,32px)] lg:grid-cols-3">
        {trips.map((trip, index) => (
          <TripCard trip={trip} index={index} key={`${index}-${trip.place}`}/>

        ))}
      </div>
    </section>
  );
}

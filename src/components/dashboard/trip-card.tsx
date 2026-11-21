import type { Trip } from "@/data/trips";

type TripCardProps = {
  trip: Trip;
  index?: number;
};

export function TripCard({trip, index=0} : TripCardProps) {
  const tripNumber = String(index + 1).padStart(2, "0");

  return (
    <article className="group w-full overflow-hidden rounded-md border border-hairline bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-[280px] overflow-hidden bg-cover bg-center">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url('${trip.image}')` }}
          aria-hidden="true"
        />

        {/* <div className="absolute inset-0 bg-gradient-to-t from-earth/80 via-earth/10 to-transparent" /> */}

        <div className="absolute inset-x-4 bottom-4 flex items-end justify-between text-white">
          <div>
            <p className="mb-2 text-[9px] font-bold tracking-[1.8px] text-clay">
              {trip.country} · {trip.place}
            </p>
            <h2 className="font-display text-2xl leading-tight">{trip.place}</h2>
          </div>
          <span className="text-[10px] tracking-widest text-white/80">{tripNumber}</span>
        </div>
      </div>

      <div className="p-5">
        <p className="mb-2 text-[10px] tracking-wide text-muted-earth">{trip.startDate}</p>
        <p className="text-sm leading-relaxed text-muted-earth">{trip.description}</p>

        <div className="mt-5 flex items-center justify-between border-t border-hairline pt-4 text-[11px]">
          <span className="text-muted-earth">
            {trip.companions?.length ?? 0} {(trip.companions?.length ?? 0) === 1 ? "traveler" : "travelers"}
            <span className="mx-2 text-clay">·</span>
            {trip.spent || "Not added"}
          </span>
          <a className="font-semibold text-rust transition-colors hover:text-olive" href="#journey-timeline">
            View trip <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </article>
  );
}

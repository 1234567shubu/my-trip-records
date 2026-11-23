import Link from "next/link";
import { Navigation } from "@/components/dashboard/navigation";
import { trips } from "@/data/trips";

// Keep the page backed by mock data for this first version.
// The separate ISO dates let us calculate a trip duration.
const trip = {
  ...trips[0],
  startDate: "2026-10-12",
  endDate: "2026-10-19",
};

const millisecondsPerDay = 24 * 60 * 60 * 1000;
const startDate = new Date(`${trip.startDate}T00:00:00Z`);
const endDate = new Date(`${trip.endDate}T00:00:00Z`);
const nights = Math.round((endDate.getTime() - startDate.getTime()) / millisecondsPerDay);
const days = nights + 1;

const dateFormatter = new Intl.DateTimeFormat("en", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

export default function TripDetailsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="px-5 py-7 sm:px-8 sm:py-10">
        <div className="mx-auto max-w-5xl">
          <Link
            className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-muted-earth transition hover:text-olive"
            href="/#stories"
          >
            <span aria-hidden="true">←</span>
            All trips
          </Link>

          <article>
            <header
              className="relative isolate flex min-h-[340px] items-end overflow-hidden rounded-md border border-hairline bg-earth shadow-[0_12px_35px_rgba(73,57,42,0.12)] sm:min-h-[460px]"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-cover bg-center"
                style={{ backgroundImage: `url('${trip.image}')` }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-gradient-to-t from-earth/85 via-earth/15 to-transparent"
              />

              <div className="p-6 text-white sm:p-10">
                <p className="mb-2 text-[10px] font-bold tracking-[2px] text-clay sm:text-xs">
                  {trip.country}
                </p>
                <h1 className="max-w-3xl font-display text-4xl leading-tight tracking-tight sm:text-6xl">
                  {trip.place}
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/85 sm:text-base">
                  {trip.description}
                </p>
              </div>
            </header>

            <div className="mt-5 grid gap-5 sm:mt-7 sm:grid-cols-[1.4fr_.8fr]">
              <section className="rounded-md border border-hairline bg-[#fffefa] p-5 shadow-sm sm:p-7">
                <p className="mb-3 text-[9px] font-bold tracking-[1.8px] text-rust">
                  THE JOURNEY
                </p>
                <h2 className="font-display text-2xl text-olive sm:text-3xl">
                  Trip overview
                </h2>

                <dl className="mt-5 grid grid-cols-1 gap-5 border-t border-hairline pt-5 sm:grid-cols-2">
                  <div>
                    <dt className="text-[10px] font-semibold tracking-wide text-muted-earth">
                      TRAVEL DATES
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-earth">
                      {dateFormatter.format(startDate)} – {dateFormatter.format(endDate)}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-semibold tracking-wide text-muted-earth">
                      DURATION
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-earth">
                      {days} days · {nights} {nights === 1 ? "night" : "nights"}
                    </dd>
                  </div>
                </dl>
              </section>

              <section className="rounded-md border border-hairline bg-[#fffefa] p-5 shadow-sm sm:p-7">
                <p className="mb-3 text-[9px] font-bold tracking-[1.8px] text-rust">
                  SHARED WITH
                </p>
                <h2 className="font-display text-2xl text-olive sm:text-3xl">
                  Travel companions
                </h2>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Travel companions">
                  {trip.companions.map((companion, index) => (
                    <li
                      className="grid size-10 place-items-center rounded-full border border-clay/70 bg-mist text-sm font-semibold text-olive"
                      key={`${companion}-${index}`}
                    >
                      {companion}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-muted-earth">
                  {trip.companions.length} {trip.companions.length === 1 ? "traveler" : "travelers"}
                </p>
              </section>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}

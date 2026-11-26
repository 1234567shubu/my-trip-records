import Link from "next/link";
import { Navigation } from "@/components/dashboard/navigation";
import { getTripDetails } from "@/lib/items";
import { ObjectId } from "mongodb";
import { notFound } from "next/navigation";

// Keep the page backed by mock data for this first version.
// The separate ISO dates let us calculate a trip duration.
// const trip = {
//   ...trips[0],
//   startDate: "2026-10-12",
//   endDate: "2026-10-19",
// };


const dateFormatter = new Intl.DateTimeFormat("en", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

const expenseDateFormatter = new Intl.DateTimeFormat("en", {
  month: "short",
  day: "numeric",
  timeZone: "UTC",
});

const amountFormatter = new Intl.NumberFormat("ja-JP", {
  style: "currency",
  currency: "JPY",
  maximumFractionDigits: 0,
});

export default async function TripDetailsPage({
  params,
}: {
  params: Promise<{ tripId: string }>
}) {
  const { tripId } = await params
  console.log('params tripid:', tripId)
  if (!ObjectId.isValid(tripId)) notFound();

  const trip = await getTripDetails(tripId);
  if (!trip) notFound();

  const expenses = trip?.expenses ?? [];

  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const startDate = new Date(`${trip?.startDate}T00:00:00Z`);
  const endDate = new Date(`${trip?.endDate}T00:00:00Z`);
  const nights = Math.round((endDate.getTime() - startDate.getTime()) / millisecondsPerDay);
  const days = nights + 1;

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
                style={{ backgroundImage: `url('${trip?.image}')` }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-gradient-to-t from-earth/85 via-earth/15 to-transparent"
              />

              <div className="p-6 text-white sm:p-10">
                <p className="mb-2 text-[10px] font-bold tracking-[2px] text-clay sm:text-xs">
                  {trip?.country}
                </p>
                <h1 className="max-w-3xl font-display text-4xl leading-tight tracking-tight sm:text-6xl">
                  {trip?.place}
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/85 sm:text-base">
                  {trip?.description}
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
                  {trip?.companions.map((companion, index) => (
                    <li
                      className="grid size-10 place-items-center rounded-full border border-clay/70 bg-mist text-sm font-semibold text-olive"
                      key={`${companion}-${index}`}
                    >
                      {companion}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-muted-earth">
                  {trip?.companions.length} {trip?.companions.length === 1 ? "traveler" : "travelers"}
                </p>
              </section>

            </div>

            <section
              aria-labelledby="trip-expenses-title"
              className="mt-5 rounded-md border border-hairline bg-[#fffefa] p-5 shadow-sm sm:mt-7 sm:p-7"
            >
              <header className="mb-5">
                <p className="mb-2 text-[9px] font-bold tracking-[1.8px] text-rust">
                  SHARED ALONG THE WAY
                </p>
                <h2
                  className="font-display text-2xl text-olive sm:text-3xl"
                  id="trip-expenses-title"
                >
                  The little costs of {trip?.place}
                </h2>
                <p className="mt-2 text-sm text-muted-earth">
                  Meals, rides, and small discoveries from the trip.
                </p>
              </header>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] border-collapse text-left text-sm">
                  <caption className="sr-only">
                    Expenses recorded during the Kyoto trip
                  </caption>
                  <thead className="text-[10px] font-semibold uppercase tracking-wide text-muted-earth">
                    <tr>
                      <th className="px-3 py-3" scope="col">Date</th>
                      <th className="px-3 py-3" scope="col">Expense</th>
                      <th className="px-3 py-3" scope="col">Paid by / split</th>
                      <th className="px-3 py-3 text-right" scope="col">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="text-earth">
                    {expenses.map((expense) => (
                      <tr className="border-t border-hairline" key={expense.id}>
                        <td className="whitespace-nowrap px-3 py-4 text-xs text-muted-earth">
                          <time dateTime={expense.date}>
                            {expenseDateFormatter.format(new Date(`${expense.date}T00:00:00Z`))}
                          </time>
                        </td>
                        <td className="px-3 py-4 font-semibold">{expense.title}</td>
                        <td className="px-3 py-4 text-xs text-muted-earth">
                          {expense.payer} &middot; {expense.note}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-right font-semibold text-olive">
                          {amountFormatter.format(expense.amount)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </article>
        </div>
      </main>
    </div>
  );
}

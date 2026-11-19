import { JourneyTimeline } from "@/components/dashboard/journey-timeline";
import { Navigation } from "@/components/dashboard/navigation";
import { NextAdventure } from "@/components/dashboard/next-adventure";
import { RecentTrips } from "@/components/dashboard/recent-trips";
import { TravelHero } from "@/components/dashboard/travel-hero";
import { TravelTogether } from "@/components/dashboard/travel-together";
import { TripExpenses } from "@/components/dashboard/trip-expenses";

export default function Home() {
  return (
    <div className="min-h-screen" id="top">
      <Navigation />
      <main>
        <TravelHero />
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-[clamp(22px,6vw,86px)]">
          <RecentTrips />
          <JourneyTimeline />
          <div className="grid grid-cols-1 items-center gap-7 py-[56px] sm:gap-[clamp(35px,8vw,112px)] sm:py-[83px] sm:pb-[78px] lg:grid-cols-[1.4fr_.8fr]">
            <TravelTogether />
            <TripExpenses />
          </div>
          <NextAdventure />
        </div>
      </main>
      <footer className="flex min-h-[100px] flex-wrap items-center justify-between gap-x-3 border-t border-hairline px-5 py-[17px] text-[10px] text-[#8f9995] sm:min-h-[82px] sm:flex-nowrap sm:gap-[18px] sm:px-[clamp(22px,6vw,86px)] sm:py-0">
        <a className="inline-flex items-center gap-[10px] font-bold text-[17px] tracking-[-.9px] text-olive" href="#top">trip<span className="font-normal text-rust">ledger</span></a>
        <span className="order-3 w-full sm:order-none sm:w-auto">For the places that change you.</span>
        <a className="text-rust" href="#top">Back to the beginning ↑</a>
      </footer>
    </div>
  );
}

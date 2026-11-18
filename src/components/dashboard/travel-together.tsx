import { travelCrew } from "@/data/trips";

const avatarColors: Record<string, string> = {
  clay: "bg-[#ead9cc]",
  sage: "bg-[#dce5d8]",
  blue: "bg-[#d9e8ec]",
  gold: "bg-[#f1e6c9]",
};

export function TravelTogether() {
  return (
    <section className="grid grid-cols-1 items-center gap-[19px] sm:grid-cols-[.86fr_1fr] sm:gap-[clamp(20px,3vw,42px)]" aria-labelledby="together-title">
      <div className="min-h-[230px] bg-[#bcc8be] bg-cover bg-center sm:min-h-[276px]" role="img" aria-label="Friends taking in a mountain view together" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=85')" }} />
      <div>
        <p className="mb-3 text-[9px] font-bold tracking-[1.9px] text-olive">THE BEST VIEWS ARE SHARED</p>
        <h2 id="together-title" className="m-0 font-display text-[35px] leading-[1.02] tracking-[-1.3px] text-olive sm:text-[clamp(30px,3vw,40px)]">Travel together.</h2>
        <p className="my-[13px] mb-[19px] max-w-[360px] font-display text-sm leading-[1.65] text-[#778582] sm:text-[15px]">The friends who know your coffee order in every time zone. The ones who turn a missed train into the best story of the trip.</p>
        <div className="grid max-w-[380px] grid-cols-2 gap-x-[13px] gap-y-[9px]" aria-label="Your travel companions">
          {travelCrew.map((person) => (
            <div className="flex items-center gap-2 text-[9px] text-[#687d7b]" key={person.name}>
              <span className={`grid size-[27px] shrink-0 place-items-center rounded-full font-display text-[13px] text-olive ${avatarColors[person.color]}`} aria-hidden="true">{person.initial}</span>
              <span>{person.name}</span>
            </div>
          ))}
        </div>
        <p className="mt-[14px] text-[9px] tracking-[.4px] text-[#aaa18b]">4 friends · too many photos to count</p>
      </div>
    </section>
  );
}

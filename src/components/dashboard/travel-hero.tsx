import { Icon } from "./icons";

const heroImage =
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2400&q=90";

export function TravelHero() {
  return (
    <section className="relative flex h-[590px] min-h-[min(650px,64vw)] items-center overflow-hidden bg-[#395565] bg-cover bg-[center_54%] text-white max-[900px]:h-[540px] max-[900px]:min-h-[500px] max-[640px]:h-[calc(88svh-66px)] max-[640px]:min-h-[610px] max-[640px]:max-h-[730px] max-[640px]:items-end max-[640px]:bg-[59%_center]" aria-labelledby="hero-title" style={{ backgroundImage: `linear-gradient(90deg, rgba(4, 30, 43, .68) 0%, rgba(4, 30, 43, .28) 48%, rgba(4, 30, 43, .03) 100%), url('${heroImage}')` }}>
      <div className="pointer-events-none absolute inset-0 border-b border-white/20 max-[640px]:bg-[linear-gradient(0deg,#061c2bd9_0%,#061c2b7a_46%,#061c2b0a_100%)]" />
      <div className="relative z-[1] mx-auto w-full max-w-[1440px] px-[clamp(22px,9vw,130px)] pt-[60px] pb-[77px] max-[640px]:px-[22px] max-[640px]:pt-0 max-[640px]:pb-[95px]">
        <p className="mb-[21px] flex items-center gap-[10px] text-[9px] font-bold tracking-[2.1px] text-[#f4e5dc] max-[640px]:mb-[15px] max-[640px]:text-[8px]"><span className="h-px w-6 bg-clay" /> YOUR NEXT STORY IS OUT THERE</p>
        <h1 id="hero-title" className="m-0 max-w-[740px] text-balance font-display text-[clamp(54px,7vw,92px)] leading-[.99] tracking-[-3px] text-mist max-[640px]:text-[clamp(52px,13vw,73px)] max-[640px]:tracking-[-2.3px]">Collect moments,<br /><em className="font-normal text-clay">not just miles.</em></h1>
        <p className="my-[22px] mb-[26px] max-w-[430px] text-sm leading-[1.8] text-[#f3f4f0] max-[640px]:my-[15px] max-[640px]:mb-5 max-[640px]:max-w-[340px] max-[640px]:text-xs">The winding roads, the long dinners, the people you meet along the way. Keep the good parts close.</p>
        <a className="inline-flex items-center gap-[18px] rounded-[3px] border border-white/50 bg-white/95 px-[17px] py-[14px] text-[11px] font-bold text-olive transition-[background,gap] hover:gap-6 hover:bg-white" href="#next-adventure">Plan Your Next Trip <Icon className="text-rust" name="arrow" size={17} /></a>
        <div className="absolute bottom-[33px] left-[clamp(22px,9vw,130px)] flex items-center gap-[10px] font-display text-[13px] italic text-[#f3efe6] max-[640px]:bottom-[27px] max-[640px]:left-[22px] max-[640px]:text-[11px]"><span className="h-px w-[21px] bg-clay" /> Somewhere worth remembering <span className="ml-[17px] font-body text-[8px] not-italic tracking-[1.2px] text-white/70 max-[640px]:hidden">46° 28′ N&nbsp; · &nbsp;9° 49′ E</span></div>
      </div>
      <div className="absolute right-[clamp(22px,6vw,86px)] bottom-9 z-[1] flex items-center gap-[9px] text-[8px] tracking-[1.4px] text-white/80 max-[640px]:hidden"><span className="font-display text-[15px] text-clay">01</span><i className="h-px w-[25px] bg-white/50" /> A JOURNAL FOR THE JOURNEY</div>
    </section>
  );
}

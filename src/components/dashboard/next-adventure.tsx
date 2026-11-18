import { Icon } from "./icons";

const adventureImage = "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=85";

export function NextAdventure() {
  return (
    <section className="relative mb-[49px] flex min-h-[490px] items-start overflow-hidden bg-olive text-white sm:mb-[71px] sm:min-h-[330px] sm:items-center" id="next-adventure" aria-labelledby="next-title">
      <div className="relative z-[2] w-full px-[23px] py-[38px] sm:w-[57%] sm:px-[clamp(25px,5.5vw,78px)] sm:py-[43px]">
        <p className="mb-3 text-[9px] font-bold tracking-[1.9px] text-clay">SOMEWHERE NEW IS CALLING</p>
        <h2 id="next-title" className="m-0 font-display text-[43px] leading-[1.02] tracking-[-1.2px] text-white sm:text-[clamp(37px,4.5vw,58px)]">Your next adventure<br /><em className="font-normal text-clay">is waiting.</em></h2>
        <p className="my-[14px] mb-[21px] max-w-[350px] text-xs leading-[1.7] text-[#d7e0e4]">Pick a place. Gather your people. Let the story find its way.</p>
        <a className="inline-flex items-center gap-[13px] rounded-[3px] bg-clay px-[15px] py-3 text-[10px] font-bold text-olive transition-[gap,background] hover:gap-[18px] hover:bg-rust" href="#top">Start a new trip <Icon name="arrow" size={16} /></a>
      </div>
      <div className="absolute inset-x-0 top-[42%] bottom-0 bg-cover bg-center opacity-90 before:absolute before:inset-0 before:bg-[linear-gradient(180deg,#736936_0%,#73693620_55%,#73693608_100%)] before:content-[''] sm:inset-y-0 sm:left-[53%] sm:bg-[linear-gradient(90deg,#736936_0%,#73693635_48%,#73693608_100%)]" role="img" aria-label="A sunlit coastal landscape waiting to be explored" style={{ backgroundImage: `url('${adventureImage}')` }} />
      <span className="absolute right-[1%] bottom-[-38px] z-[1] text-[125px] text-white/[.09] sm:right-[41%] sm:bottom-[-57px] sm:text-[180px]" aria-hidden="true">✳</span>
    </section>
  );
}

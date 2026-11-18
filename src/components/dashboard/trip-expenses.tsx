import { Icon } from "./icons";

export function TripExpenses() {
  return (
    <section className="relative grid grid-cols-[37px_1fr] gap-x-[17px] gap-y-3 border-l border-[#d9d3c5] py-[22px] pl-[17px] transition-transform hover:translate-x-[3px] sm:ml-auto sm:max-w-[540px] sm:pl-[25px]" id="expenses" aria-label="Trip expenses: 3,840 dollars shared across your journeys">
      <span className="grid size-[34px] place-items-center rounded-full border border-[#d9d2c2] text-rust"><Icon name="wallet" size={20} /></span>
      <span className="grid gap-[9px]"><span className="mb-0 text-[8px] font-bold tracking-[1.9px] text-olive">THE PRACTICAL SIDE, MADE SIMPLE</span><strong className="font-display text-[26px] leading-[1.06] text-olive sm:text-[29px]">Good memories.<br />Clear expenses.</strong><span className="inline-flex items-center gap-[7px] text-[10px] font-semibold text-rust">Your shared trip costs <Icon name="arrow" size={14} /></span></span>
      <span className="col-start-2 grid gap-1 border-t border-[#ded9cd] pt-[13px]"><small className="text-[7px] font-bold tracking-[1.25px] text-[#aaa18b]">SHARED ON YOUR JOURNEYS</small><strong className="font-display text-[31px] text-[#557478]">$3,840</strong><span className="text-[9px] text-[#9ba09a]">across 12 trips</span></span>
    </section>
  );
}

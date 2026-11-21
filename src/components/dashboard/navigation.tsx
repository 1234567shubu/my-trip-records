"use client";

import { useState } from "react";
import { Icon } from "./icons";
import Link from "next/link";

const links = [
  { label: "My Journeys", href: "/#stories" },
  { label: "Expenses", href: "/#expenses" },
  { label: "Profile", href: "/#profile" },
];

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 h-[66px] border-b border-hairline bg-mist/95 backdrop-blur-[14px] sm:h-[76px]">
      <div className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between px-[17px] sm:px-[27px] lg:px-[clamp(22px,6vw,86px)]">
        <Link className="inline-flex items-center gap-[10px] text-[19px] font-bold tracking-[-.9px] text-olive sm:text-[21px]" href="/" aria-label="TripLedger home">
          <span className="grid size-[30px] rotate-[-8deg] place-items-center rounded-[50%_50%_50%_8px] bg-olive text-white sm:size-[33px]"><Icon name="pin" size={20} /></span>
          <span>trip<span className="font-normal text-rust">ledger</span></span>
        </Link>
        <nav className={`${menuOpen ? "absolute top-[65px] flex" : "hidden"} right-0 left-0 z-20 flex-col items-stretch gap-0 border-b border-hairline bg-mist px-[18px] pt-2 pb-[18px] shadow-[0_12px_18px_#73412f12] sm:static sm:flex sm:h-full sm:flex-row sm:items-center sm:gap-[clamp(22px,3.5vw,52px)] sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none sm:mr-[23px] lg:mr-[42px]`} aria-label="Main navigation" id="primary-navigation">
          {links.map((link) => (
            <Link className="border-b border-hairline px-[5px] py-[14px] text-xs text-[#657981] transition-colors hover:text-olive sm:relative sm:border-0 sm:p-0 sm:after:absolute sm:after:right-0 sm:after:bottom-[-9px] sm:after:left-0 sm:after:h-px sm:after:origin-left sm:after:scale-x-0 sm:after:bg-clay sm:after:content-[''] sm:after:transition-transform sm:hover:after:scale-x-100" key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</Link>
          ))}
          <Link className="mt-3 inline-flex self-start items-center justify-center gap-[9px] rounded bg-olive px-[15px] py-3 text-[11px] font-semibold text-white transition hover:-translate-y-px hover:bg-rust sm:hidden" href="/create-trip" onClick={() => setMenuOpen(false)}>Plan a Trip <Icon className="text-clay" name="arrow" size={15} /></Link>
        </nav>
        <div className="flex items-center">
          <Link className="hidden items-center gap-[9px] rounded bg-olive px-[17px] py-3 text-[11px] font-semibold text-white transition hover:-translate-y-px hover:bg-rust sm:inline-flex" href="/create-trip">Plan a Trip <Icon className="text-clay" name="arrow" size={15} /></Link>
          <a className="ml-0 grid size-8 place-items-center rounded-full border border-[#d8e1df] bg-[#e9efeb] font-display text-[12px] text-olive transition hover:rotate-[-5deg] hover:bg-[#dce9e8] sm:ml-[15px] sm:size-[35px] sm:text-[13px]" href="#profile" id="profile" aria-label="Alex Morgan's profile">AM</a>
          <button className="ml-[10px] flex size-10 flex-col items-center justify-center gap-[6px] rounded-full border border-hairline bg-transparent sm:hidden" type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}>
            <span className={`h-px w-[15px] bg-olive transition-transform ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`} /><span className={`h-px w-[15px] bg-olive transition-transform ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>
    </header>
  );
}

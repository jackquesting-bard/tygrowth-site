import type { Metadata } from "next";
import { inter, jakarta } from "@/components/home/fonts";
import { HomeHeader } from "@/components/home/HomeHeader";
import { HomeFooter } from "@/components/home/HomeFooter";
import HolidayTabs from "@/components/holiday/HolidayTabs";

/* =====================================================================
   Holiday Rush: Black Friday / Small Business Saturday campaign offer
   for local businesses. Sample pieces live in components/holiday/examples.ts.
   ===================================================================== */

export const metadata: Metadata = {
  title: { absolute: "Black Friday Campaign, Live in 72 Hours | TY Growth" },
  description:
    "Holiday email, three texts, a gift card promo, three social posts and a Google Business post, built and launched for local businesses in 72 hours. $497 flat.",
  icons: { icon: "/icons/sprout.svg" },
};

export default function HolidayPage() {
  return (
    <div
      className={`theme-ops ${jakarta.variable} ${inter.variable} relative min-h-screen font-ops-body text-[17px] leading-[1.6] antialiased selection:bg-ops-lime selection:text-ops-ink md:text-[18px]`}
    >
      <div aria-hidden="true" className="ops-grain pointer-events-none fixed inset-0 z-[60] opacity-[0.05]" />
      <HomeHeader />
      <main>
        <HolidayTabs />
      </main>
      <HomeFooter />
    </div>
  );
}

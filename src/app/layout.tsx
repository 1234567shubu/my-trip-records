import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TripLedger — Your travel journal",
  description: "A little home for your journeys, travel crew, and shared expenses.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Electrical Panel Manufacturing, Installation & Testing | Saudi Arabia",
  description:
    "Leading electrical contractor in Al Khobar & Dammam. Custom panel boards (MDB, MCC, PCC), LV/MV cable installation, testing & commissioning. ISO certified. Serving SABIC, ARAMCO & SATORP.",
  keywords:
    "electrical panel manufacturer Saudi Arabia, MDB panel board Jubail, electrical installation Dammam, LV MV cable termination, switchgear installation KSA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

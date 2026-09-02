import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Master Form Dies Manufacturing Company Pvt Ltd | High-Precision Die & Tooling",
  description: "Delivering uncompromised quality, exact tolerances, and robust custom dies and tooling for modern industrial sectors from Ernakulam to the world.",
  keywords: ["Die Manufacturing", "Custom Tooling", "Precision Machining", "CNC Milling", "Mold Design", "Ernakulam Engineering"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} dark h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-black text-white font-sans selection:bg-[#526E07] selection:text-white">
        {children}
      </body>
    </html>

  );
}




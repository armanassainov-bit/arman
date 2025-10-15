import "./globals.css";
import { Manrope } from "next/font/google";
import type { Metadata } from "next";
import { ReactNode } from "react";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope"
});

export const metadata: Metadata = {
  title: "Tuk-tuk | Межкомнатные двери премиум-класса",
  description:
    "Современный лендинг по продаже межкомнатных дверей с каталогом моделей, быстрым расчётом и консультациями."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable} font-sans antialiased text-slate-900`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Code with Claude 2026 · London",
  description:
    "Nederlandstalige trainingsapp voor de 24 talks van de Code with Claude 2026 conferentie in London. Video-embeds, leerdoelen en quizzes per talk.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className="h-full">
      <body className="h-full bg-slate-50">
        <div className="flex h-full">
          <Sidebar />
          <main className="flex-1 overflow-y-auto">
            <div className="max-w-4xl mx-auto px-4 pt-14 pb-12 md:pt-6">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}

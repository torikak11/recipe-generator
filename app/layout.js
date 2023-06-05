import "@/styles/globals.css";
import TopPanel from "@components/TopPanel";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ['latin']
});

export const metadata = {
  title: "Recipe Generator",
  description: "Generate recipes from ingredients",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-cream">
        <main className={inter.className}>
          <TopPanel />
          {children}
        </main>
      </body>
    </html>
  );
}

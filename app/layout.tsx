import Header from "@/components/Header/Header";
import "./globals.scss";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import {Providers} from "@/redux/provider";
import Footer from "@/components/Footer/Footer";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "BIMBUM",
  description: "E-commerce website",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <Providers>
        <body>
          <header className="sticky top-0 z-40">
            <Header />
          </header>
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
}

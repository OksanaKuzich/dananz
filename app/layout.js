import { Poppins } from "next/font/google";
import "./globals.css";
import "tailwindcss/tailwind.css";
import Header from "./components/Header";
import Banner from "./components/blocks/Banner/Banner";
import Footer from "./components/Footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Dananz",
  description: "Interior design website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className} suppressHydrationWarning={true}>
        <div className="min-h-full flex flex-col">
          <Header />
          <main className="flex-auto">{children}</main>
          <Banner />
          <Footer />
        </div>
      </body>
    </html>
  );
}

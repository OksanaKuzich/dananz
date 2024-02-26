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

// function reveal() {
//   var reveals = document.querySelectorAll(".reveal");

//   for (var i = 0; i < reveals.length; i++) {
//     var windowHeight = window.innerHeight;
//     var elementTop = reveals[i].getBoundingClientRect().top;
//     var elementVisible = 150;

//     if (elementTop < windowHeight - elementVisible) {
//       reveals[i].classList.add("active");
//     } else {
//       reveals[i].classList.remove("active");
//     }
//   }
// }

// window.addEventListener("scroll", reveal);

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

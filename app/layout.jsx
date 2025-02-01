import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Provider";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Taher Chabra - Portfolio",
  description:
    "Portfolio webiste for Taher Chabra - Full-stack Web Developer.",
  keywords: [
    "Taher",
    "Taher Chabra",
    "taher-chabra",
    "Taher Chabra Banswara",
    "Taher Chabra Full-stack Developer",
  ],
  authors: [
    { name: "Taher Chabra" },
    { name: "Taher Chabra", url: "https://taherchabra.tech" },
  ],
  creator: "Taher Chabra",
  publisher: "Taher Chabra",
  category: "IT & Software",
  metadataBase: new URL("https://taherchabra.tech"),
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Taher Chabra",
    description:
      "I'm Taher Chabra, a passionate Full-stack developer and a recent graduate in Bachelor of Computer Application from Manipal University, Jaipur.",
    url: "https://taherchabra.tech",
    siteName: "Taher Chabra",
    images: [
      {
        url: "/public/myImg/taherchabra.jpg",
        width: 600,
        height: 600,
      },
      {
        url: "/public/myImg/taherchabra.jpg",
        width: 500,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "favicon.ico",
    shortcut: "favicon.ico",
    apple: "favicon.ico"
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-small bg-fixed bg-cover bg-center h-screen`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

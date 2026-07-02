import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarUser from "@/Components/Shared/NavbarUser";
import FooterUser from "@/Components/Shared/FooterUser";
import { ThemeProvider } from "next-themes";
import { Providers } from "../Components/Shared/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SkillSwap",
  description: "Freelance Marketplace",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Providers>
          <NavbarUser />
          <main className="flex-1">{children}</main>
          <FooterUser />
        </Providers>
      </body>
    </html>
  );
}

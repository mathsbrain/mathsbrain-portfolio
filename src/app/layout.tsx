import { Footer, Header } from "@/components";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
import Providers from "./providers";

const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matheus Antunes | Front-End Developer",
  description: "Seja muito bem vindo ao meu site portifólio :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

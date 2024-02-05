import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ weight: ["100", "300", "400"], subsets: ["latin"] });
const inter = Inter({
  weight: ["100", "300", "400", "500", "600", "800"],
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "Thuvaragan Parameshwaran",
  description:
    "Portfolio site of Thuvaragan Parameshwaran, a full-stack web application developer based on Sri Lanka.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

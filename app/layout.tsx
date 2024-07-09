import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Modal from "./components/models/Modal";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Homebnb",
  description: "Homebnb the largest online marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Modal actionLabel="Submit" title="Passed Title" isOpen />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

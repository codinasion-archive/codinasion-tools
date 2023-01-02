import React from "react";

interface Props {
  children: React.ReactNode;
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// google font
import { Rubik } from "@next/font/google";
import LayoutX from "../LayoutX/LayoutX";

const rubik = Rubik({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-rubik",
});

export default function DefaultLayout({ children }: Props) {
  return (
    <div className={`${rubik.className}`}>
      <Navbar />
      {children}
      <LayoutX/>
    </div>
  );
}

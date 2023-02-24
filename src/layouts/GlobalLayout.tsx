import { ReactNode } from "react";
import Navigation from "@/components/Navigation";
import Drawer from "@/components/Navigation/Drawer";
import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  preload: true,
});

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${inter.className}`}>
      <Drawer>
        <div className="max-w-screen-xl mx-auto">
          <Navigation />
          <main>{children}</main>
        </div>
      </Drawer>
    </div>
  );
}

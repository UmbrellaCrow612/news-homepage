import { ReactNode } from "react";
import Navigation from "@/components/Navigation";
import Drawer from "@/components/Navigation/Drawer";
export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Drawer>
        <Navigation />
        <main>{children}</main>
      </Drawer>
    </>
  );
}

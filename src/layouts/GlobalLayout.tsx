import { ReactNode } from "react";
import Navigation from "@/components/Navigation";
import Drawer from "@/components/Navigation/Drawer";
export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Drawer>
        <div className="max-w-screen-xl mx-auto">
          <Navigation />
          <main>{children}</main>
        </div>
      </Drawer>
    </>
  );
}

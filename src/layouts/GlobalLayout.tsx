import { ReactNode } from "react";
import Navigation from "@/components/Navigation";
export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  );
}

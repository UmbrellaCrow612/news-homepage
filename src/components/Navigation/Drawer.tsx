import Link from "next/link";
import { ReactNode } from "react";
import { GrClose } from "react-icons/gr";
export default function Drawer({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <div className="px-8 w-80 bg-base-100 text-base-content relative flex justify-center flex-col">
            <label
              htmlFor="my-drawer-4"
              className="top-6 right-8 absolute cursor-pointer"
            >
              <GrClose className="text-5xl" />
            </label>
            <div className="flex flex-col gap-3">
              <Link href="/" className="btn btn-ghost justify-start">
                Home
              </Link>
              <Link href="/" className="btn btn-ghost justify-start">
                New
              </Link>
              <Link href="/" className="btn btn-ghost justify-start">
                Popular
              </Link>
              <Link href="/" className="btn btn-ghost justify-start">
                Trending
              </Link>
              <Link href="/" className="btn btn-ghost justify-start">
                Categories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

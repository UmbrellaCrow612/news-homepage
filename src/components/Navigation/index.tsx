import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Navigation() {
  return (
    <>
      <nav className="h-24 flex items-center justify-between px-5">
        {/* Logo */}
        <Link className="relative w-16 h-10" href="/">
          <Image src="/images/logo.svg" alt="Logo" fill />
        </Link>

        {/* Desktop links */}

        <div className="px-2 hidden lg:flex items-center gap-5">
          <Link href="/" className="btn btn-ghost">
            Home
          </Link>
          <Link href="/" className="btn btn-ghost">
            New
          </Link>
          <Link href="/" className="btn btn-ghost">
            Popular
          </Link>
          <Link href="/" className="btn btn-ghost">
            Trending
          </Link>
          <Link href="/" className="btn btn-ghost">
            Categories
          </Link>
        </div>

        <MobileMenu />
      </nav>
    </>
  );
}

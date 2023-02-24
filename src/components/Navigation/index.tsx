import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Navigation() {
  return (
    <>
      <nav className="h-24 border flex items-center justify-between px-5">
        {/* Logo */}
        <Link className="relative w-16 h-10" href="/">
          <Image src="/images/logo.svg" alt="Logo" fill />
        </Link>

        <MobileMenu />
      </nav>
    </>
  );
}

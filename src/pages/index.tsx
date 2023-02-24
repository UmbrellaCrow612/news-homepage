import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  preload: true,
});

export default function Page() {
  return <div className={`${inter.className}`}>Homepage</div>;
}

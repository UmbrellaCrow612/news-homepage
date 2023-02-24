import { Inter } from "@next/font/google";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  preload: true,
});

export default function Page() {
  return (
    <>
      <Head>
        <title>News homepage</title>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
        {/* Future add og tags and other seo stuff */}
      </Head>

      <div className={`${inter.className}`}>Homepage</div>
    </>
  );
}

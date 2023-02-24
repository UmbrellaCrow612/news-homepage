/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Head>
        <title>News homepage</title>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
        {/* Future add og tags and other seo stuff */}
      </Head>

      <div
        id="main-content"
        className="grid gap-6 grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-3 h-auto px-8 lg:px-6"
      >
        {/* Left  */}
        <div className="flex flex-col items-start gap-5 col-span-2">
          {/* Image wrapper */}
          <div className="w-full h-[20rem] relative">
            <Image
              fill
              src="/images/image-web-3-desktop.jpg"
              alt="Image"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="grid gap-3 lg:gap-0 grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 h-auto">
            <h1 className="font-bold text-6xl">
              The Bright Future of Web 3.0?
            </h1>
            <div className="flex gap-4 flex-col items-start">
              <p className="text-gray-500">
                We dive into the next evolution of the web that claims to put
                the power of the platform back into the hands of the people. But
                is it really fulfilling its promise
              </p>
              <Link className="btn btn-primary" href="/">
                Read More
              </Link>
            </div>
          </div>
        </div>
        {/* Right  */}
        <div className="flex items-center justify-center py-20 lg:py-0">
          <div className="bg-black h-full w-full p-5 text-white flex flex-col gap-4">
            <p className="font-bold text-yellow-500 text-4xl">NEW</p>
            <div className="flex flex-col gap-5 divide-y divide-slate-500">
              {/* Block */}
              <div className="p-3 flex flex-col gap-3">
                <h2 className="text-white font-bold text-2xl leading-tight tracking-wide">
                  Hydrogen VS Electric Cars
                </h2>
                <p className="text-gray-400 text-lg font-light">
                  Will Hydrogen-Fueled cars ever catch up to EV&apos;s?
                </p>
              </div>
              <div className="p-3 flex flex-col gap-3">
                <h2 className="text-white font-bold text-2xl leading-tight tracking-wide">
                  The downsides of AI Artistry
                </h2>
                <p className="text-gray-400 text-lg font-light">
                  What are the possible adverse effects of on-demand AI image
                  generation?
                </p>
              </div>
              <div className="p-3 flex flex-col gap-3">
                <h2 className="text-white font-bold text-2xl leading-tight tracking-wide">
                  Is VC funding drying up?
                </h2>
                <p className="text-gray-400 text-lg font-light">
                  Private funding by VC firms is down 50% YOY. We take a look at
                  what that means.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

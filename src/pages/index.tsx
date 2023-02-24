import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <title>News homepage</title>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
        {/* Future add og tags and other seo stuff */}
      </Head>

      <div id="#main-content">Homepage</div>
    </>
  );
}

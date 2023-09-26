import Head from "next/head";
import Footer from "./Footer";

export default function Layout({ children, title, metaDescription, page }) {
  const metaTitle = `${title} - Viviana Varese`;

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="backgroundline" style={{ height: "10px" }}></div>
        {children}
        <Footer />
      </main>
    </>
  );
}

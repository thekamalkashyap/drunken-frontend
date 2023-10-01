import "@/styles/globals.css";
import { Navbar, Footer } from "@/components";
import Head from "next/head";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Explore the world like never before!"
        />
        <meta name="keywords" content="travelling,travel,trip,hills" />
        <meta name="author" content="Kamal Kashyap" />
        <meta name="robots" content="noindex,nofollow" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
        <title>Drunken Roads</title>
      </Head>

      <div className={montserrat.className}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

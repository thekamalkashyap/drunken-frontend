import "@/styles/globals.css";
import { Navbar, Footer } from "@/components";
import Head from "next/head";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const pathname = usePathname();
  let title = pathname?.split("/")[pathname?.split("/").length - 1];
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
        <meta name="robots" content="index, follow" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
        <link rel="canonical" href="http://www.drunkenroads.com" />
        <title>Drunken Roads {title && "- ".concat(title)}</title>
      </Head>

      <div className={montserrat.className}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

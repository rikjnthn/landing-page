import Footer from "@/components/Footer";
import Headers from "@/components/Headers";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg" href="/logo.svg" />
        <title>Embroidered Pond</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Headers />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Layout } from "@/pages";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
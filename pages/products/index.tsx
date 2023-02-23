import { Products } from "@/pages";
import Head from "next/head";
import {} from "react";

// вообще все продукты, что есть
const Index = () => {
  return (
    <>
      <Head>
        <title>Товары | YORCOM</title>
      </Head>
      <Products />
    </>
  );
};

export default Index;

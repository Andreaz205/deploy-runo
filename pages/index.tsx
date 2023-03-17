import { GetStaticProps } from "next";
import Head from "next/head";
import { StaticImageData } from "next/image";
import { Home } from "pages/index";

import { useAppDispatch } from "@/shared/lib";
import { useEffect } from "react";
import { banner, salesLeader } from "@/entities";
import axios from 'axios'
import {
  BannerT,
  getBannerSlides,
  getSalesLeader,
  SalesLeader,
} from "@/shared/api/internal";

type Props = {
  banner: BannerT[];
  salesLeader: SalesLeader[];
};

export default function Index(props: Props) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(banner.actions.setSlides(props.banner));
    dispatch(salesLeader.actions.setList(props.salesLeader));
  }, []);

  const handle = async () => {
    let response = await axios.get('/http://localhost:8000/api/recaptcha')
    console.log(response)
  }
  return (
    <>
      <Head>
        <title>Главная | YORCOM</title>
      </Head>

      <button style={{margin: '500px'}} onClick={() => handle()}>Получить token</button>
      <Home />
      
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const slides = await getBannerSlides();
  const salesLeader = await getSalesLeader();
  return {
    props: {
      banner: slides.data,
      salesLeader: salesLeader.data,
    },
  };
};

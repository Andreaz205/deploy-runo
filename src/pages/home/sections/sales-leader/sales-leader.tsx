import { memo, useMemo, useState } from "react";

import st from "../../styles.module.scss";
import cn from "classnames";
import {
  Container,
  CustomSwiper,
  IconButton,
  SectionLayout,
} from "@/shared/ui";
import { ProductCard } from "@/widgets";
import { SwiperSlide } from "swiper/react";

import { Swiper } from "swiper";

import { motion } from "framer-motion";
import { useScreen } from "@/shared/hooks";

const length = 7;

export const SalesLeader = memo(() => {
  const { currentScreen } = useScreen();

  const slidesPerView = useMemo(() => {
    if (currentScreen === "xs") {
      return 1;
    } else if (currentScreen === "sm" || currentScreen === "md") {
      return 2;
    } else if (currentScreen === "lg") {
      return 3;
    }
    return 4;
  }, [currentScreen]);

  return (
    <SectionLayout
      title="Лидеры продаж"
      subElement="Наиболее популярные модели из всех категорий интернет-магазина"
    >
      <div className={cn(st.sales_wrap, st.sales_wrap__products)}>
        <CustomSwiper
          slidesPerView={slidesPerView}
          navType="buttons"
          swiperProps={{ spaceBetween: 32 }}
        >
          {Array(length)
            .fill(0)
            .map((item, idx) => (
              <SwiperSlide key={idx}>
                <ProductCard
                  colors={[]}
                  description="Описание"
                  id={1}
                  imgs={[]}
                  name="Название"
                  oldPrice={null}
                  price={32000}
                />
              </SwiperSlide>
            ))}
          <SwiperSlide>
            <button>показать ещё</button>
          </SwiperSlide>
        </CustomSwiper>
      </div>
    </SectionLayout>
  );
});
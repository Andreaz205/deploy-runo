import { useRef } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Button, ProductsGrid, SectionLayout } from "@/shared/ui";
import { ProductCard } from "@/widgets";

type Products = {};

export const Products = (props: Products) => {
  return (
    <>
      <SectionLayout
        disableHeadlines
        disablePaddingForBody
        disablePaddingForHeadlines
      >
        хлебные крошки
      </SectionLayout>
      <SectionLayout
        title="Диваны"
        subElement="Диваны"
        disablePaddingForBody
        disablePaddingForHeadlines
      >
        <div className={st.products_wrap__filter}>фильтры</div>
        <div className={st.products_wrap__items}>
          <ProductsGrid>
            <ProductCard
              href="/products/1"
              id={1}
              media={null}
              price={1000}
              priceT={"min"}
              title="Майами"
            />
            <ProductCard
              href="/products/2"
              id={2}
              media={null}
              price={1000}
              priceT={"min"}
              title="Бали"
            />
            <ProductCard
              href="/products/3"
              id={3}
              media={null}
              price={1000}
              priceT={"min"}
              title="Ещё какая-то"
            />
            <ProductCard
              href="/products/3"
              id={3}
              media={null}
              price={1000}
              priceT={"min"}
              title="Ещё какая-то модель"
            />
          </ProductsGrid>
        </div>
      </SectionLayout>
      <SectionLayout
        title="Пуфики"
        subElement="Пуфики"
        disablePaddingForBody
        disablePaddingForHeadlines
      >
        <div className={st.products_wrap__filter}>фильтры</div>
        <div className={st.products_wrap__items}>
          <ProductsGrid>
            <ProductCard
              href="/products/1"
              id={1}
              media={null}
              price={1000}
              priceT={"min"}
              title="Майами"
            />
            <ProductCard
              href="/products/2"
              id={2}
              media={null}
              price={1000}
              priceT={"min"}
              title="Бали"
            />
            <ProductCard
              href="/products/3"
              id={3}
              media={null}
              price={1000}
              priceT={"min"}
              title="Ещё какая-то модель"
            />
            <ProductCard
              href="/products/3"
              id={3}
              media={null}
              price={1000}
              priceT={"min"}
              title="Ещё какая-то модель"
            />
          </ProductsGrid>
        </div>
      </SectionLayout>
      <SectionLayout
        title="Матрасы"
        subElement="Матрасы"
        disablePaddingForBody
        disablePaddingForHeadlines
      >
        <div className={st.products_wrap__filter}>фильтры</div>
        <div className={st.products_wrap__items}>
          <ProductsGrid>
            <ProductCard
              href="/products/1"
              id={1}
              media={null}
              price={1000}
              priceT={"min"}
              title="Майами"
            />
            <ProductCard
              href="/products/2"
              id={2}
              media={null}
              price={1000}
              priceT={"min"}
              title="Бали"
            />
            <ProductCard
              href="/products/3"
              id={3}
              media={null}
              price={1000}
              priceT={"min"}
              title="Ещё какая-то модель"
            />
          </ProductsGrid>
        </div>
      </SectionLayout>
    </>
  );
};

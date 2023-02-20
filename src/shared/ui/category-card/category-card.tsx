import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import Link from "next/link";
import { Arrow } from "@/shared/assets";
import Image, { StaticImageData } from "next/image";

import { HTMLMotionProps, motion } from "framer-motion";

type CategoryCard = {
  img: StaticImageData | string;
  title: string;
  id: number | string;
  animation?: HTMLMotionProps<"article">;
};

export const CategoryCard = (props: CategoryCard) => {
  return (
    <motion.article {...props.animation} className={st.category_card}>
      <div className={st.category_card_wrap__image}>
        <Image
          src={props.img}
          alt={props.title + " " + "img"}
          className="dark-selection"
        />
      </div>
      <div className={st.category_card_wrap__body}>
        <div className={st.category_card_body_wrap__title}>
          <h3 className={cn("h5", "dark-selection", st.category_title)}>
            {props.title}
          </h3>
        </div>
        <div className={st.category_card_body_wrap__button}>
          <Link
            href={`/categories/${props.id}`}
            className={cn("body2", "dark-selection", st.learn_more_button)}
          >
            Подробнее
            <Arrow />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};
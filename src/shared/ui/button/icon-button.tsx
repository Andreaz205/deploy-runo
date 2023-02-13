import { ButtonHTMLAttributes } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { ButtonProps } from "./button.type";
import { returnClasses } from "./lib/return-classes";

interface IconButton extends ButtonProps {}

export const IconButton = (props: IconButton) => {
  const { size, variant, color, ...restProps } = props;
  return (
    <button
      {...restProps}
      className={cn(
        st.icon_button,
        {
          [st.sm]: size === "sm",
          [st.md]: size === "md" || !size,
          [st.lg]: size === "lg",
          [st.contained]: variant === "contained" || !variant,
          [st.outlined]: variant === "outlined",
        },
        returnClasses({ color, size, variant })
      )}
    >
      {props.children}
    </button>
  );
};

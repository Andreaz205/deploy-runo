import { Icon } from "@/shared/api/internal";
import {} from "react";

export const Burger = (props: Icon) => {
  return (
    <svg
      {...props}
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_429_11066)">
        <path
          d="M3 6.00092H21M3 12.0009H21M3 18.0009H21"
          stroke="#292929"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_429_11066">
          <rect
            width="24"
            height="24"
            fill="currentColor"
            transform="translate(0 0.000915527)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

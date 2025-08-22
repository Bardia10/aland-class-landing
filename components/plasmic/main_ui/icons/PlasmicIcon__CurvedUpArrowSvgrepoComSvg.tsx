/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CurvedUpArrowSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function CurvedUpArrowSvgrepoComSvgIcon(
  props: CurvedUpArrowSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 162.341 162.341"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M34.802 162.341a64.148 64.148 0 01-17.907-2.572l-9.857-2.864 9.857-2.864c34.196-9.947 60.898-51.399 65.636-101.419H50.059L102.681 0l52.622 52.622h-32.627c-5.699 62.747-43.135 109.719-87.874 109.719zm-6.301-6.319c2.094.233 4.201.352 6.301.352 42.245 0 77.563-45.981 82.158-106.956l.209-2.757h23.736L102.687 8.443 64.469 46.661h24.53l-.245 3.21c-3.759 49.817-27.471 90.887-60.253 106.151z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CurvedUpArrowSvgrepoComSvgIcon;
/* prettier-ignore-end */

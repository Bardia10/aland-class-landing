/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CurvedArrowPointingUpSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function CurvedArrowPointingUpSvgrepoComSvgIcon(
  props: CurvedArrowPointingUpSvgrepoComSvgIconProps
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
          "M127.542 162.341c-44.74 0-82.176-46.971-87.874-109.719H7.041L59.657 0l52.616 52.622H79.807c4.744 50.014 31.445 91.472 65.636 101.419l9.857 2.864-9.857 2.858a63.873 63.873 0 01-17.901 2.578zM21.451 46.655h23.742l.203 2.757c4.589 60.981 39.9 106.962 82.146 106.962 2.106 0 4.207-.119 6.307-.352-32.782-15.269-56.5-56.333-60.265-106.163l-.233-3.21h24.524L59.669 8.431 21.451 46.655z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CurvedArrowPointingUpSvgrepoComSvgIcon;
/* prettier-ignore-end */

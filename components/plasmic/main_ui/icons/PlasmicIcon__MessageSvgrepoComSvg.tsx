/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MessageSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MessageSvgrepoComSvgIcon(props: MessageSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 1920 1920"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266zM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887z"
        }
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default MessageSvgrepoComSvgIcon;
/* prettier-ignore-end */

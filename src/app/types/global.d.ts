declare module "*.module.css";
declare module "*.module.scss";

declare module "*.svg" {
  import React from "react";
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";

declare const __IS_DEV__: boolean;

import React from "react";
import { Img } from "./style";

export default function Image({ imgSrc, alt, width, height }) {
  return <Img src={imgSrc} alt={alt} width={width} height={height} />;
}

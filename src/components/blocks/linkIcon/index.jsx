import React from "react";
import Image from "../../atoms/image/index.jsx";
import { StyledLink } from "./style.js";

export function ExternalLinkIcon({ path, imgSrc, alt }) {
  return (
    // Tabnabbing 피싱 공격을 피하기 위해 rel='noopener noreferrer' 추가
    <a href={path} target='_blank' rel='noopener noreferrer'>
      <Image imgSrc={imgSrc} alt={alt} />
    </a>
  );
}

export function InternalLinkIcon({ children, path, imgSrc, alt }) {
  return (
    <StyledLink to={path}>
      <Image imgSrc={imgSrc} alt={alt} width='32px' height='32px' />
      {children}
    </StyledLink>
  );
}

import React from "react";
import { ProductSearchInput, SignUpPasswordInput } from "../../atoms/input";
import { ImageButton } from "../../atoms/button";
import Image from "../../atoms/image";
import { PasswordInputContainer, SearchInputContainer } from "./style";
import searchIcon from "../../../assets/icon-search.svg";

export function SearchInputIcon({ onClick }) {
  return (
    <SearchInputContainer>
      <ProductSearchInput id='search' />
      <ImageButton onClick={onClick} img={searchIcon}>
        <span className='txt-hide'>검색어 찾기</span>
      </ImageButton>
    </SearchInputContainer>
  );
}

export function PasswordInputIcon({ id, imgSrc }) {
  return (
    <PasswordInputContainer>
      <SignUpPasswordInput id={id} />
      <Image
        imgSrc={imgSrc}
        alt='비밀번호 유효성 확인 아이콘'
        width='28px'
        height='28px'
      />
    </PasswordInputContainer>
  );
}

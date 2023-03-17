import React from "react";
import { BoldBlackText, NormalGrayText } from "../../atoms/text";
import { NotFoundButton } from "../../atoms/button";
import Image from "../../atoms/image";
import { NotFoundContainer, ContentContainer, ButtonContainer } from "./style";
import icon404 from "../../../assets/icon-404.svg";

export default function NotFoundPage() {
  return (
    <NotFoundContainer>
      <Image imgSrc={icon404} alt='' width='276px' height='236px' />
      <ContentContainer>
        <BoldBlackText fontSize='36px'>
          페이지를 찾을 수 없습니다.
        </BoldBlackText>
        <NormalGrayText>
          페이지가 존재하지 않거나 사용할 수 없는 페이지입니다. {"\n"} 웹 주소가
          올바른지 확인해 주세요.
        </NormalGrayText>
        <ButtonContainer>
          <NotFoundButton>메인으로</NotFoundButton>
          <NotFoundButton whiteStyle>이전 페이지</NotFoundButton>
        </ButtonContainer>
      </ContentContainer>
    </NotFoundContainer>
  );
}

import React from "react";
import { NormalBlackText } from "../../atoms/text";
import { NumberInput } from "../otherInput";
import { ModalButton } from "../../atoms/button";
import {
  ModalOverlay,
  ModalContainer,
  ButtonContainer,
  DeleteButton,
  ContentWrapper,
} from "./style";
import deleteImg from "../../../assets/icon-delete.svg";

export function Modal({ children, leftText, rightText, onClick }) {
  return (
    <ModalOverlay>
      <ModalContainer>
        <ContentWrapper>
          <NormalBlackText fontSize='16px'>{children}</NormalBlackText>
        </ContentWrapper>
        <ButtonContainer>
          <ModalButton whiteStyle>{leftText}</ModalButton>
          <ModalButton>{rightText}</ModalButton>
        </ButtonContainer>
        <DeleteButton
          onClick={onClick}
          img={deleteImg}
          width='22px'
          height='22px'
        >
          <span className='txt-hide'>모달창 닫기</span>
        </DeleteButton>
      </ModalContainer>
    </ModalOverlay>
  );
}

export function ProductEditModal({ minusClick, plusClick, onClick }) {
  return (
    <ModalOverlay>
      <ModalContainer>
        <ContentWrapper>
          <NumberInput minusClick={minusClick} plusClick={plusClick} />
        </ContentWrapper>
        <ButtonContainer>
          <ModalButton whiteStyle>취소</ModalButton>
          <ModalButton>수정</ModalButton>
        </ButtonContainer>
        <DeleteButton
          onClick={onClick}
          img={deleteImg}
          width='22px'
          height='22px'
        >
          <span className='txt-hide'>모달창 닫기</span>
        </DeleteButton>
      </ModalContainer>
    </ModalOverlay>
  );
}

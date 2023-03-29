import React from "react";
import {
  DropdownContainer,
  ArrowButton,
  ListContainer,
  ListButton,
  BalloonContainer,
  BaloonListContainer,
} from "./style";
import downArrow from "../../../assets/icon-down-arrow.svg";
import upArrow from "../../../assets/icon-up-arrow.svg";

// 핸드폰번호 앞 3자리를 선택하는 드롭박스
export function PhoneNumberDropdown() {
  return (
    <>
      <DropdownContainer>
        <div id='phoneNumber' name='firstPhoneNumber'>
          <span className='txt-hide' htmlFor='phoneNumber'>
            핸드폰번호 앞 3자리 선택 드롭박스
          </span>
        </div>
        <ArrowButton img={downArrow} width='22px' height='22px' />
      </DropdownContainer>
      <ListContainer>
        <li>
          <ListButton>010</ListButton>
        </li>
        <li>
          <ListButton>011</ListButton>
        </li>
        <li>
          <ListButton>016</ListButton>
        </li>
        <li>
          <ListButton>017</ListButton>
        </li>
        <li>
          <ListButton>018</ListButton>
        </li>
        <li>
          <ListButton>019</ListButton>
        </li>
      </ListContainer>
    </>
  );
}

// 마이페이지 아이콘 호버시 나타나는 말풍선형 드롭다운
export function MyPageDropdown() {
  return (
    <BalloonContainer>
      <BaloonListContainer>
        <li>
          <ListButton className='balloon'>마이페이지</ListButton>
        </li>
        <li>
          <ListButton className='balloon'>로그아웃</ListButton>
        </li>
      </BaloonListContainer>
    </BalloonContainer>
  );
}

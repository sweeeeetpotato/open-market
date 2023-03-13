import React from "react";
import { ImageButton } from "../../atoms/button";
import {
  InputContainer,
  CheckBox,
  Radio,
  NumberInputContainer,
  Number,
} from "./style";
import plus from "../../../assets/icon-plus-line.svg";
import minus from "../../../assets/icon-minus-line.svg";

export function CheckBoxInput({ children, color }) {
  return (
    <InputContainer>
      <CheckBox type='checkbox' name='check' id='check' />
      <label htmlFor='check' color={color}>
        {children}
      </label>
    </InputContainer>
  );
}

export function RadioInput({ children }) {
  return (
    <InputContainer>
      <Radio type='radio' name='radio' id='radio' />
      <label htmlFor='radio'>{children}</label>
    </InputContainer>
  );
}

export function NumberInput({ minusClick, plusClick }) {
  return (
    <NumberInputContainer>
      <ImageButton onClick={minusClick} img={minus} width='100%' height='100%'>
        <span className='txt-hide'>상품 수량 감소 버튼</span>
      </ImageButton>
      <label htmlFor='number' className='txt-hide'>
        상품 수량 조절
      </label>
      <Number type='text' name='number' id='number' />
      <ImageButton onClick={plusClick} img={plus} width='100%' height='100%'>
        <span className='txt-hide'>상품 수량 증가 버튼</span>
      </ImageButton>
    </NumberInputContainer>
  );
}

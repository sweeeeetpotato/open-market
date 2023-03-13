import styled, { css } from "styled-components";
import palette from "../../../style/globalColor";
import checkBox from "../../../assets/check-box.svg";
import checkFillBox from "../../../assets/check-fill-box.svg";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.color || palette.mainTextColor};
`;

export const CheckBox = styled.input`
  appearance: none;
  margin: 0;
  width: 16px;
  height: 16px;
  background: url(${checkBox}) no-repeat;
  cursor: pointer;

  :checked {
    background: url(${checkFillBox}) no-repeat;
  }
`;

export const Radio = styled.input`
  appearance: none;
  margin: 0;
  width: 20px;
  height: 20px;
  border: 2px solid ${palette.gray};
  border-radius: 50%;
  cursor: pointer;

  :checked {
    border: 5px solid ${palette.mainColor};
  }
`;

export const NumberInputContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 150px;
  height: 50px;
  border: 1px solid ${palette.gray};
  border-radius: 5px;
`;

export const Number = styled.input`
  width: 50px;
  height: 100%;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  border: none;
  border-left: 1px solid ${palette.gray};
  border-right: 1px solid ${palette.gray};
  box-sizing: border-box;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  :focus {
    outline: none;
  }
`;

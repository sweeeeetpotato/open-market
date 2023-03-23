import styled, { css } from "styled-components";
import palette from "../../../style/globalColor";

export const Button = styled.button`
  width: ${(props) => props.width || "480px"};
  height: ${(props) => props.height || "60px"};
  font-size: ${(props) => props.font || "18px"};
  font-weight: ${(props) => props.weight || "700"};
  color: ${(props) => palette[props.fontColor] || palette.white};
  background-color: ${(props) => palette[props.backColor] || palette.mainColor};
  border-radius: 5px;

  ${(props) =>
    props.borderColor &&
    css`
      border: 1px solid ${palette[props.borderColor]};
      box-sizing: border-box;
    `}
`;

export const LoginTabButton = styled(Button)`
  width: 100%;
  height: 100%;
  padding: 20px 0 38px;
  color: ${palette.mainTextColor};
  font-weight: 500;
  border-radius: 10px 10px 0 0;
  background-color: transparent;
  box-sizing: border-box;
`;

export const TabButton = styled(Button)`
  width: 320px;
  height: 60px;
  font-size: 18px;
  background-color: ${palette.white};
  border-radius: 0;
  border-bottom: 6px solid ${(props) => palette[props.border]};
  box-sizing: border-box;
`;

export const ImgButton = styled(Button)`
  width: ${(props) => props.width || "28px"};
  height: ${(props) => props.height || "28px"};
  margin: auto 0;
  background-color: transparent;
  background: url(${(props) => props.img}) no-repeat center;
`;

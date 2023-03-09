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
    `}
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
  margin: auto 0;
  background-color: transparent;
  background: url(${(props) => props.img}) no-repeat center;
`;

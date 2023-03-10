import styled from "styled-components";
import palette from "../../../style/globalColor";

export const TextBox = styled.span`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.weight || 400};
  color: ${(props) => palette[props.color] || palette.mainTextColor};
`;

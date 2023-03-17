import styled from "styled-components";
import palette from "../../../style/globalColor";

export const TextBox = styled.span`
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: ${(props) => props.weight || 400};
  color: ${(props) => palette[props.color] || palette.mainTextColor};
  line-height: 1.25;
  white-space: pre-line;
`;

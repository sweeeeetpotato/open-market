import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "../../../style/globalColor";

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 400;
  color: ${palette.darkGray};
  text-decoration: none;

  :hover {
    color: ${palette.mainColor};
  }
`;

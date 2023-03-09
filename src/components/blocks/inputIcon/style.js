import styled, { css } from "styled-components";
import palette from "../../../style/globalColor";

export const SearchInputContainer = styled.div`
  display: flex;
  width: 400px;
  height: 46px;
  border: 2px solid ${palette.mainColor};
  border-radius: 50px;
  padding: 0 22px;
  box-sizing: border-box;
`;

export const PasswordInputContainer = styled.div`
  display: flex;
  width: 100%;
  height: 54px;
  padding-right: 16px;
  border: 2px solid ${palette.gray};
  border-radius: 5px;
  box-sizing: border-box;
  align-items: center;

  :hover,
  :focus-within {
    border-color: ${palette.mainColor};
  }
`;

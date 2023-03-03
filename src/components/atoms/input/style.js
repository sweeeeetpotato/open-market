import styled, { css } from "styled-components";
import palette from "../../../style/globalColor";

export const Input = styled.input`
  width: 100%;
  height: 54px;
  padding: 0;
  border: 1px solid ${palette.gray};
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 400;
  color: ${palette.darkGray};

  :hover {
    border-color: ${palette.mainColor};
  }

  :focus {
    outline-color: ${palette.mainColor};
  }
`;

export const LoginInput = styled(Input)`
  height: 60px;
  border: none;
  border-radius: 0px;
  border-bottom: 1px solid ${palette.gray};

  :hover {
    border-bottom-color: ${palette.mainColor};
  }

  :focus {
    border-color: ${palette.mainColor};
    outline: none;
  }
`;

export const OrderInput = styled(Input)`
  height: 40px;
  border: 1px solid ${palette.gray};
  border-radius: 0px;
`;

export const SearchInput = styled(Input)`
  width: 400px;
  height: 46px;
  border: 2px solid ${palette.mainColor};
  border-radius: 50px;
  padding-left: 22px;
`;

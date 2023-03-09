import styled, { css } from "styled-components";
import palette from "../../../style/globalColor";
import deleteIcon from "../../../assets/icon-delete.svg";

export const Input = styled.input`
  width: 100%;
  height: 54px;
  padding: 0 16px;
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

export const IconInput = styled(Input)`
  height: 100%;
  border: none;

  :hover {
    border: none;
  }

  :focus {
    outline: none;
  }

  /* for webkit browsers */
  ::-webkit-search-cancel-button {
    appearance: none;
    width: 16px;
    height: 16px;
    margin: 0 10px;
    background: url(${deleteIcon}) no-repeat center;
    background-size: 16px 16px;
    cursor: pointer;
  }
`;

import styled from "styled-components";
import palette from "../../../style/globalColor";
import { Button } from "../../atoms/button/style";
import loginType1 from "../../../assets/loginType-1.svg";
import loginType2 from "../../../assets/loginType-2.svg";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  box-sizing: border-box;
  margin: 20px;
`;

export const LoginTypeStyle = styled.div`
  display: flex;
  margin-bottom: -20px;
`;

export const LoginTabStyle = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  background-color: ${palette.lightGray};
  border-radius: 10px 10px 0 0;
  border: 1px solid ${palette.gray};
  border-bottom: none;
  box-sizing: border-box;
  z-index: 10;

  &.left_on,
  &.right_on {
    background-color: ${palette.white};
    z-index: 20;
  }

  &.left_on {
    ::after {
      content: "";
      position: absolute;
      top: -1px;
      right: -4px;
      width: 6px;
      height: 80px;
      background: url(${loginType1}) no-repeat center;
      background-size: cover;
    }
  }

  &.right_on {
    ::before {
      content: "";
      position: absolute;
      top: -1px;
      left: -4px;
      width: 6px;
      height: 80px;
      background: url(${loginType2}) no-repeat center;
      background-size: cover;
    }
  }
`;

export const LoginStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  width: 100%;
  padding: 35px;
  border: 1px solid ${palette.gray};
  border-radius: 10px;
  box-sizing: border-box;
  background-color: ${palette.white};
  z-index: 10;
`;

export const LoginButton = styled(Button)`
  margin-top: 30px;
`;

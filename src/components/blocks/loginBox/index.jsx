import React from "react";
import { LoginIdInput, LoginPasswordInput } from "../../atoms/input";
import { LoginTypeButton } from "../../atoms/button/index";
import {
  LoginContainer,
  LoginTypeStyle,
  LoginStyle,
  LoginButton,
  LoginTabStyle,
} from "./style";

export function LoginBox({ className }) {
  return (
    <LoginContainer>
      <LoginTypeStyle>
        <LoginTabStyle className={className}>
          <LoginTypeButton>구매회원 로그인</LoginTypeButton>
        </LoginTabStyle>
        <LoginTabStyle className={className}>
          <LoginTypeButton>판매회원 로그인</LoginTypeButton>
        </LoginTabStyle>
      </LoginTypeStyle>
      <LoginStyle>
        <label htmlFor='id' className='txt-hide'>
          아이디
        </label>
        <LoginIdInput placeholder='아이디' id='id' />
        <label htmlFor='pw' className='txt-hide'>
          비밀번호
        </label>
        <LoginPasswordInput placeholder='비밀번호' id='pw' />
        <LoginButton>로그인</LoginButton>
      </LoginStyle>
    </LoginContainer>
  );
}

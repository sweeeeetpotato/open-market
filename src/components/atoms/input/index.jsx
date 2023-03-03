import React from "react";
import { Input, LoginInput, OrderInput, SearchInput } from "./style";

// 로그인 페이지에서의 아이디 input
export function LoginIdInput({ placeholder, id }) {
  return <LoginInput placeholder={placeholder} type='text' name={id} id={id} />;
}

// 로그인 페이지에서의 비밀번호 input
export function LoginPasswordInput({ placeholder, id }) {
  return (
    <LoginInput placeholder={placeholder} type='password' name={id} id={id} />
  );
}

// 회원가입 페이지에서의 아이디 input
export function SignUpIdInput({ id }) {
  return <Input type='text' name={id} id={id} />;
}

// 회원가입 페이지에서의 비밀번호 input
export function SignUpPasswordInput({ id }) {
  return <Input type='password' name={id} id={id} />;
}

// 회원가입 페이지에서의 일반적인 input (이름, 이메일, 전화번호 등등)
export function SignUpTextInput({ type, id }) {
  return <Input type={type} name={id} id={id} />;
}

// 주문 페이지에서의 input
export function OrderTextInput({ type, id }) {
  return <OrderInput type={type} name={id} id={id} />;
}

// 상품 검색 input
export function ProductSearchInput({ id }) {
  return (
    <SearchInput
      placeholder='상품을 검색해보세요!'
      type='search'
      name={id}
      id={id}
    />
  );
}

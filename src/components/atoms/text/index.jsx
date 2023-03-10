import React from "react";
import { TextBox } from "./style";

export function NormalBlackText({ children, fontSize }) {
  return <TextBox fontSize={fontSize}>{children}</TextBox>;
}

export function MiddleBlackText({ children, fontSize }) {
  return (
    <TextBox fontSize={fontSize} weight='500'>
      {children}
    </TextBox>
  );
}

export function BoldBlackText({ children, fontSize }) {
  return (
    <TextBox fontSize={fontSize} weight='700'>
      {children}
    </TextBox>
  );
}

export function NormalGrayText({ children, fontSize }) {
  return (
    <TextBox fontSize={fontSize} color='darkGray'>
      {children}
    </TextBox>
  );
}

export function BoldGrayText({ children, fontSize }) {
  return (
    <TextBox fontSize={fontSize} weight='700' color='darkGray'>
      {children}
    </TextBox>
  );
}

export function NormalRedText({ children, fontSize }) {
  return (
    <TextBox fontSize={fontSize} color='red'>
      {children}
    </TextBox>
  );
}

export function BoldRedText({ children, fontSize }) {
  return (
    <TextBox fontSize={fontSize} weight='700' color='red'>
      {children}
    </TextBox>
  );
}

export function NormalMainColorText({ children, fontSize }) {
  return (
    <TextBox fontSize={fontSize} color='mainColor'>
      {children}
    </TextBox>
  );
}

export function MiddleMainColorText({ children, fontSize }) {
  return (
    <TextBox fontSize={fontSize} weight='500' color='mainColor'>
      {children}
    </TextBox>
  );
}

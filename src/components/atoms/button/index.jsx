import React from "react";
import { Button, LoginTabButton, TabButton, ImgButton } from "./style";

export function LoginButton({ children, onClick }) {
  return (
    <Button type='button' onClick={onClick}>
      {children}
    </Button>
  );
}

export function LoginTypeButton({ children, onClick, disabled, zIndex }) {
  if (disabled) {
    return (
      <LoginTabButton
        type='button'
        onClick={onClick}
        backColor='lightGray'
        zIndex={zIndex}
      >
        {children}
      </LoginTabButton>
    );
  } else {
    return (
      <LoginTabButton
        type='button'
        onClick={onClick}
        backColor='white'
        zIndex={zIndex}
      >
        {children}
      </LoginTabButton>
    );
  }
}

export function SignUpButton({ children, onClick, disabled }) {
  if (disabled) {
    return (
      <Button
        type='button'
        onClick={onClick}
        width='122px'
        height='54px'
        font='16px'
        weight='500'
        backColor='gray'
      >
        {children}
      </Button>
    );
  } else {
    return (
      <Button
        type='button'
        onClick={onClick}
        width='122px'
        height='54px'
        font='16px'
        weight='500'
      >
        {children}
      </Button>
    );
  }
}

export function PurchaseButton({ children, onClick }) {
  return (
    <Button type='button' onClick={onClick} width='416px' height='60px'>
      {children}
    </Button>
  );
}

export function ShoppingBasketButton({ children, onClick }) {
  return (
    <Button
      type='button'
      onClick={onClick}
      width='200px'
      height='60px'
      backColor='darkGray'
    >
      {children}
    </Button>
  );
}

export function ProductTabButton({ children, onClick, disabled }) {
  if (disabled) {
    return (
      <TabButton
        type='button'
        onClick={onClick}
        fontColor='mainColor'
        border='mainColor'
      >
        {children}
      </TabButton>
    );
  } else {
    return (
      <TabButton
        type='button'
        onClick={onClick}
        weight='500'
        fontColor='darkGray'
        border='gray'
      >
        {children}
      </TabButton>
    );
  }
}

export function ModalButton({ children, onClick, whiteStyle }) {
  if (whiteStyle) {
    return (
      <Button
        type='button'
        onClick={onClick}
        width='100px'
        height='40px'
        font='16px'
        weight='400'
        backColor='white'
        fontColor='darkGray'
        borderColor='gray'
      >
        {children}
      </Button>
    );
  } else {
    return (
      <Button
        type='button'
        onClick={onClick}
        width='100px'
        height='40px'
        font='16px'
        weight='400'
      >
        {children}
      </Button>
    );
  }
}

export function OrderSmallButton({ children, onClick }) {
  return (
    <Button
      type='button'
      onClick={onClick}
      width='130px'
      height='40px'
      font='16px'
      weight='500'
    >
      {children}
    </Button>
  );
}

export function OrderBigButton({ children, onClick, disabled }) {
  if (disabled) {
    return (
      <Button
        type='button'
        onClick={onClick}
        width='220px'
        height='68px'
        font='24px'
        backColor='gray'
      >
        {children}
      </Button>
    );
  } else {
    return (
      <Button
        type='button'
        onClick={onClick}
        width='220px'
        height='68px'
        font='24px'
      >
        {children}
      </Button>
    );
  }
}

export function AddressButton({ children, onClick }) {
  return (
    <Button
      type='button'
      onClick={onClick}
      width='154px'
      height='40px'
      font='16px'
      weight='500'
    >
      {children}
    </Button>
  );
}

export function NotFoundButton({ children, onClick, whiteStyle }) {
  if (whiteStyle) {
    return (
      <Button
        type='button'
        onClick={onClick}
        width='200px'
        height='60px'
        backColor='white'
        fontColor='darkGray'
        borderColor='gray'
      >
        {children}
      </Button>
    );
  } else {
    return (
      <Button type='button' onClick={onClick} width='200px' height='60px'>
        {children}
      </Button>
    );
  }
}

export function ImageButton({ children, onClick, img, width, height }) {
  return (
    <ImgButton
      type='button'
      onClick={onClick}
      img={img}
      width={width}
      height={height}
    >
      {children}
    </ImgButton>
  );
}

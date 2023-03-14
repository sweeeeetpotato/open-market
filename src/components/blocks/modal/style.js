import styled from "styled-components";
import palette from "../../../style/globalColor";
import { ImgButton } from "../../atoms/button/style";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const ModalContainer = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 360px;
  height: 200px;
  padding: 20px 73px 40px;
  border: 1px solid ${palette.gray};
  background-color: ${palette.white};
  box-sizing: border-box;
  box-shadow: 0 2px 5px rgba(34, 36, 38, 0.2);
`;

export const ContentWrapper = styled.div`
  margin: auto 0;
  word-wrap: break-word;
  word-break: keep-all;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const DeleteButton = styled(ImgButton)`
  position: absolute;
  top: 18px;
  right: 18px;
`;

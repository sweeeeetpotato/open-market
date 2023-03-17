import styled from "styled-components";

export const NotFoundContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 50px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  word-break: keep-all;
  gap: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 20px;
`;

import styled from "styled-components";
import palette from "../../../style/globalColor";
import { Button, ImgButton } from "../../atoms/button/style";
import triangle from "../../../assets/triangle.svg";

export const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 152px;
  height: 54px;
  padding-right: 18px;
  border: 1px solid ${palette.gray};
  border-radius: 5px;
  font-size: 16px;
  font-weight: 400;
  box-sizing: border-box;

  :focus-within {
    border: 1px solid ${palette.mainColor};
  }
`;

export const ArrowButton = styled(ImgButton)`
  position: absolute;
  right: 14px;
`;

export const ListContainer = styled.ul`
  width: 152px;
  height: 150px;
  margin-top: 6px;
  border: 1px solid ${palette.gray};
  border-radius: 5px;
  overflow-y: scroll;
  z-index: 10;
  box-sizing: border-box;

  &.hidden {
    display: none;
  }

  ::-webkit-scrollbar {
    width: 18px;
  }

  ::-webkit-scrollbar-thumb {
    height: 90px;
    background: ${palette.gray};
    background-clip: padding-box;
    border: 6px solid transparent;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${palette.lightGray};
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

export const ListButton = styled(Button)`
  width: 100%;
  height: 40px;
  background-color: ${palette.white};
  font-size: 16px;
  font-weight: 500;
  color: ${palette.mainTextColor};

  :hover {
    background-color: ${palette.mainColor};
  }

  &.balloon {
    color: ${palette.darkGray};

    :hover {
      background-color: ${palette.white};
      color: ${palette.mainTextColor};
      border: 1px solid ${palette.darkGray};
    }
  }
`;

export const BalloonContainer = styled.div`
  position: relative;
  width: 130px;
  height: 118px;
  padding-top: 10px;
  filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.25));
  box-sizing: border-box;
  z-index: 10;
`;

export const BaloonListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 108px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${palette.white};
  box-sizing: border-box;

  ::before {
    content: "";
    position: absolute;
    left: 50px;
    top: -5px;
    width: 30px;
    height: 30px;
    background: url(${triangle}) no-repeat center;
  }
`;

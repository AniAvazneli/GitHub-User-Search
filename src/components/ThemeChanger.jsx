import Moon from "../images/icon-moon.svg";
import styled from "styled-components";
import Sun from "../images/icon-sun.svg";

const ThemeChanger = ({ setIswhite, isWhite }) => {
  const clickHandler = () => {
    setIswhite((previus) => !previus);
  };

  return (
    <ThemeMain>
      <Definer isWhite={isWhite}>devfinder</Definer>
      <LightDark onClick={clickHandler}>
        {isWhite ? <Dark>DARK</Dark> : <Light>LIGHT</Light>}
        <Img src={isWhite ? Moon : Sun} alt="" />
      </LightDark>
    </ThemeMain>
  );
};

export default ThemeChanger;

const ThemeMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "Space Mono";
  font-style: normal;
  width: 730px;
  margin: auto;
`;

const Definer = styled.h3`
  font-weight: 700;
  font-size: 26px;
  line-height: 39px;
  color: ${({ isWhite }) => (isWhite ? "#222731" : "#FFFFFF")};
  margin-right: 526px;
`;

const LightDark = styled.button`
  display: flex;
  flex-direction: row;
  font-size: 13px;
  line-height: 19px;
  text-align: right;
  letter-spacing: 2.5px;
  /* color: #697c9a; */
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
const Dark = styled.h3`
  margin-right: 16px;
  color: #697c9a;
`;
const Light = styled.h3`
  color: #ffffff;
  margin-right: 16px;
`;
const Img = styled.img`
  height: 20px;
  width: 20px;
`;

import Loop from "../images/Loop.png";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const SearchBar = ({ isWhite, setUser, user }) => {
  const [userInput, setUserInput] = useState("AniAvazneli");
  const [displayError, setDisplayError] = useState(false);
  const inputHandler = (e) => {
    setUserInput(e.target.value);
  };

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${userInput}`
        );
        setUser(response.data);
      } catch (e) {
        if (e.response.status === 404) {
          setDisplayError(true);
        }
      }
    };
    fetchMe();
  }, []);

  const searchHandler = async (e) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${userInput}`
      );
      setUser(response.data);
      setDisplayError(false);
    } catch (e) {
      if (e.response.status === 404) {
        setDisplayError(true);
      }
    }
  };
  return (
    <SearchBarDiv isWhite={isWhite}>
      <LoopImg src={Loop} alt="" />
      <SearchInput
        onChange={inputHandler}
        value={userInput}
        isWhite={isWhite}
        placeholder="Search GitHub username…"
      />
      {displayError && <NoResult>No results</NoResult>}
      <Button onClick={searchHandler}>Search</Button>
    </SearchBarDiv>
  );
};

export default SearchBar;

const SearchBarDiv = styled.div`
  height: 60px;
  width: 327px;
  border-radius: 15px;
  background: ${({ isWhite }) => (isWhite ? "#fefefe" : "#1E2A47")};
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
  @media (min-width: 768px) {
    height: 69px;
    width: 573px;
    margin: auto;
  }
  @media (min-width: 1440px) {
    height: 69px;
    width: 730px;
  }
`;

const LoopImg = styled.img`
  height: 21.159425735473633px;
  width: 21.217361450195312px;
  margin-left: 32px;
  margin-right: 24px;
  @media (min-width: 768px) {
    height: 24px;
    width: 24.05787467956543px;
    margin-right: 26px;
  }
  @media (min-width: 1440px) {
    height: 24px;
    width: 24.05787467956543px;
  }
`;

const SearchInput = styled.input`
  width: 57%;
  height: 80%;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 25px;
  color: ${({ isWhite }) => (isWhite ? "#4B6A9B" : "#FFFFFF")};
  background: ${({ isWhite }) => (isWhite ? "#fefefe" : "#1E2A47")};
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 25px;
  }
`;
const NoResult = styled.h3`
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 15px;
  margin-right: 5px;
  color: #f74646;
  @media (min-width: 768px) {
    width: 200px;
    margin: auto;
    font-size: 15px;
    line-height: 20px;
  }
`;

const Button = styled.button`
  position: static;
  height: 46px;
  width: 84px;
  border-radius: 10px;
  border: none;
  background: #0079ff;
  margin-right: 10px;
  margin-left: auto;
  cursor: pointer;
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 21px;
  color: #ffffff;
  @media (min-width: 768px) {
    height: 50px;
    width: 106px;
    font-size: 16px;
    line-height: 24px;
  }
  :hover {
    background: #60abff;
  }
`;

import styled from "styled-components";
import Location from "../images/icon-location.svg";
import Link from "../images/icon-website.svg";
import Twitter from "../images/icon-twitter.svg";
import Company from "../images/icon-company.svg";
// import axios from "axios";

const Card = ({ isWhite, user }) => {
  const createdAt = user?.created_at?.split("T")[0].split("-");
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <CardDiv isWhite={isWhite}>
      <ImageDivBio>
        <Correct>
          <Avatar src={user.avatar_url} alt="" />
          <AvatarDiv>
            <TopAvatar>
              <div>
                <Name isWhite={isWhite}>
                  {user.name ? user.name : "No Name"}
                </Name>
                <Tag>{"@" + user.login}</Tag>
              </div>
              <Date isWhite={isWhite}>
                Joined {createdAt && createdAt[2]}{" "}
                {createdAt && months[createdAt[1] - 1]}{" "}
                {createdAt && createdAt[0]}
              </Date>
            </TopAvatar>
          </AvatarDiv>
        </Correct>
        <Bio isWhite={isWhite}>
          {user.bio ? user.bio : "This profile has no bio"}
        </Bio>
      </ImageDivBio>
      <InfoBlock isWhite={isWhite}>
        <RepoDiv>
          <Heads isWhite={isWhite}>Repos</Heads>
          <Numbers isWhite={isWhite}>{user.public_repos}</Numbers>
        </RepoDiv>
        <RepoDiv>
          <Heads isWhite={isWhite}>Followers</Heads>
          <Numbers isWhite={isWhite}>{user.followers}</Numbers>
        </RepoDiv>
        <RepoDiv>
          <Heads isWhite={isWhite}>Following</Heads>
          <Numbers isWhite={isWhite}>{user.following}</Numbers>
        </RepoDiv>
      </InfoBlock>
      <FourAddInfo>
        <FirstPast>
          <InfoMini>
            <Logo isWhite={isWhite} src={Location} alt="" />
            <DataName isWhite={isWhite}>
              {user.location ? user.location : "Not Available"}
            </DataName>
          </InfoMini>
          <InfoMini>
            <Logo isWhite={isWhite} src={Link} alt="" />
            <DataName isWhite={isWhite}>
              {user.blog ? user.blog : "Not Available"}
            </DataName>
          </InfoMini>
        </FirstPast>
        <SecondPart>
          <InfoMini>
            <Logo isWhite={isWhite} src={Twitter} alt="" />
            <DataName isWhite={isWhite}>
              {user.twitter_username ? user.twitter_username : "Not Available"}
            </DataName>
          </InfoMini>
          <InfoMini>
            <Logo isWhite={isWhite} src={Company} alt="" />
            <DataName isWhite={isWhite}>
              {user.company ? user.company : "Not Available"}
            </DataName>
          </InfoMini>
        </SecondPart>
      </FourAddInfo>
    </CardDiv>
  );
};

export default Card;
const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Space Mono";
  font-style: normal;
  width: 327px;
  background: ${({ isWhite }) => (isWhite ? "#fefefe" : "#1E2A47")};
  margin-top: 16px;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 15px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    width: 573px;
    margin-top: 24px;
  }
  @media (min-width: 1440px) {
    width: 730px;
  }
`;

const ImageDivBio = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  margin-left: 24px;
  margin-right: 24px;
  @media (min-width: 768px) {
    margin-top: 40px;
    margin-left: 40px;
    margin-right: 40px;
  }
  @media (min-width: 1440px) {
    margin-top: 44px;
    margin-left: 48px;
    margin-right: 48px;
  }
`;

const Correct = styled.div`
  display: flex;
  flex-direction: row;
`;
const Avatar = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  margin-right: 37px;
  @media (min-width: 768px) {
    height: 117px;
    width: 117px;
  }
`;
const AvatarDiv = styled.div`
  margin-top: 0px;
  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;
const TopAvatar = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
const Name = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  margin-top: 0px;
  margin-bottom: 0px;
  color: ${({ isWhite }) => (isWhite ? "#2B3442" : "#FFFFFF")};
  @media (min-width: 768px) {
    margin-top: 15px;
    margin-bottom: 2px;
    font-size: 26px;
    line-height: 39px;
  }
  @media (min-width: 1440px) {
    margin-top: 0px;
    margin-bottom: 2px;
  }
`;
const Tag = styled.h3`
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  color: #0079ff;
  margin-top: 0px;
  margin-bottom: 6px;
  @media (min-width: 768px) {
    margin-bottom: 4px;
    font-size: 16px;
    line-height: 24px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 20px;
  }
`;
const Date = styled.span`
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  text-align: right;
  color: ${({ isWhite }) => (isWhite ? "#697c9a" : "#FFFFFF")};
  /* transform: translate(75%, 13%); */
  margin-right: auto;
  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 22px;
  }
  @media (min-width: 1440px) {
    transform: translate(60%, 13%);
    margin-right: auto;
  }
`;
const Bio = styled.h3`
  font-weight: 400;
  font-size: 13px;
  line-height: 25px;
  color: ${({ isWhite }) => (isWhite ? "#4b6a9b" : "#FFFFFF")};
  margin-top: 33px;
  @media (min-width: 768px) {
    margin-top: 24px;
    font-size: 15px;
    line-height: 25px;
  }
  @media (min-width: 1440px) {
    height: 50px;
    width: 480px;
    transform: translate(32%,-104%);
  }
`;
const InfoBlock = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 70px;
  width: 279px;
  border-radius: 10px;
  background: ${({ isWhite }) => (isWhite ? "#f6f8ff" : "#141D2F")};
  border-radius: 10px;
  margin-left: 24px;
  margin-top: 32px;
  padding-bottom: 19px;
  @media (min-width: 768px) {
    height: 85px;
    width: 493px;
    margin-left: 40px;
    padding-bottom: 17px;
  }
  @media (min-width: 1440px){
    margin-left: 190px;
  }
`;
const RepoDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  margin-right: auto;
`;

const Heads = styled.h3`
  margin-top: 0px;
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  color: ${({ isWhite }) => (isWhite ? "#4b6a9b" : "#FFFFFF")};
  text-align: left;
  margin-bottom: 0px;
  margin-top: 18px;
  margin-left: 15px;
  @media (min-width: 768px) {
    margin-left: 32px;
    font-size: 13px;
    line-height: 19px;
    margin-bottom: 1px;
  }
`;
const Numbers = styled.h3`
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  color: ${({ isWhite }) => (isWhite ? "#2b3442" : "#FFFFFF")};
  margin-top: 8px;
  margin-left: 15px;
  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 33px;
  }
`;
const FourAddInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 48px;
  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 32px;
    margin-left: 40px;
    margin-bottom: 40px;
  }
  @media (min-width: 1440px){
    margin-left: 190px;
  }
`;
const FirstPast = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const SecondPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media (min-width: 768px) {
    margin-left: 65px;
  }
`;
const InfoMini = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.img`
  height: 15px;
  width: 15px;
  margin-right: 13px;
  filter: ${({ isWhite }) =>
    isWhite
      ? "invert(39%) sepia(48%) saturate(472%) hue-rotate(176deg) brightness(91%) contrast(89%)"
      : "invert(100%) sepia(100%) saturate(0%) hue-rotate(205deg) brightness(104%) contrast(102%)"};
  @media (min-width: 768px) {
    height: 17px;
    width: 17px;
  }
`;
const DataName = styled.h3`
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  color: ${({ isWhite }) => (isWhite ? "#2b3442" : "#FFFFFF")};
  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 22px;
  }
`;

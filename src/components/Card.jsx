import Octopus from "../images/Bitmap.png";
import styled from "styled-components";
import Location from "../images/icon-location.svg";
import Link from "../images/icon-website.svg";
import Twitter from "../images/icon-twitter.svg";
import Company from "../images/icon-company.svg";
// import axios from "axios";

const Card = ({isWhite, user}) => {

    
  return (
    <CardDiv isWhite={isWhite}>
      <ImageDivBio>
        <Avatar src={Octopus} alt="" />
        <AvatarDiv>
          <TopAvatar>
            <div>
              <Name isWhite={isWhite}>{user.name}</Name>
              <Tag>{'@' + user.login}</Tag>
            </div>
            <Date isWhite={isWhite}>Joined 25 Jan 2011</Date>
          </TopAvatar>
          <Bio isWhite={isWhite}>{user.bio  ? user.bio : 'This profile has no bio'}</Bio>
        </AvatarDiv>
      </ImageDivBio>
      <InfoBlock isWhite={isWhite}>
        <RepoDiv>
          <Heads isWhite={isWhite}>Repos</Heads>
          <Numbers isWhite={isWhite}>{user.public_repos}</Numbers>
        </RepoDiv>
        <RepoDiv>
          <Heads isWhite={isWhite} >Followers</Heads>
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
            <DataName isWhite={isWhite}>{user.location ? user.location : 'Not Available'}</DataName>
          </InfoMini>
          <InfoMini>
            <Logo isWhite={isWhite} src={Link} alt="" />
            <DataName isWhite={isWhite} >{user.blog ? user.blog : 'Not Available'}</DataName>
          </InfoMini>
        </FirstPast>
        <SecondPart>
          <InfoMini>
            <Logo isWhite={isWhite} src={Twitter} alt="" />
            <DataName isWhite={isWhite}>{user.twitter_username ? user.twitter_username : 'Not Available'}</DataName>
          </InfoMini>
          <InfoMini>
            <Logo isWhite={isWhite} src={Company} alt="" />
            <DataName isWhite={isWhite}>{user.company ? user.company : 'Not Available'}</DataName>
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
  width: 730px;
  background: ${({ isWhite }) => (isWhite ? "#fefefe" : "#1E2A47")};
  margin-top: 24px;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 15px;
`;

const ImageDivBio = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 48px;
  margin-left: 48px;
  margin-right: 48px;
`;
const Avatar = styled.img`
  height: 117px;
  width: 117px;
  border-radius: 50%;
  margin-right: 37px;
`;
const AvatarDiv = styled.div`
  margin-bottom: 32px;
`;
const TopAvatar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Name = styled.h3`
  font-weight: 700;
  font-size: 26px;
  line-height: 39px;
  margin-top: 0px;
  margin-bottom: 2px;
  color: ${({ isWhite }) => (isWhite ? "#2B3442" : "#FFFFFF")};
`;
const Tag = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #0079ff;
  margin-top: 0px;
  margin-bottom: 20px;
`;
const Date = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  text-align: right;
  /* color: #697c9a; */
  color: ${({ isWhite }) => (isWhite ? "#697c9a" : "#FFFFFF")};
  transform: translate(82%, 13%);
`;
const Bio = styled.h3`
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  /* color: #4b6a9b; */
  color: ${({ isWhite }) => (isWhite ? "#4b6a9b" : "#FFFFFF")};
  margin-top: 0px;
`;
const InfoBlock = styled.div`
  display: flex;
  flex-direction: row;
  height: 70px;
  width: 450px;
  border-radius: 10px;
  /* background: #f6f8ff; */
  background: ${({ isWhite }) => (isWhite ? "#f6f8ff" : "#141D2F")};
  border-radius: 10px;
  margin-left: 202px;
  margin-top: 32px;
  padding-top: 15px;
  padding-left: 32px;
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
  /* color: #4b6a9b; */
  color: ${({ isWhite }) => (isWhite ? "#4b6a9b" : "#FFFFFF")};
  text-align: left;
  margin-bottom: 0px;
`;
const Numbers = styled.h3`
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
  text-transform: uppercase;
  /* color: #2b3442; */
  color: ${({ isWhite }) => (isWhite ? "#2b3442" : "#FFFFFF")};
  margin-top: 1px;
`;
const FourAddInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 37px;
  margin-left: 202px;
  margin-right: 90px;
  justify-content: space-between;
  margin-bottom: 48px;
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
`;
const InfoMini = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 16px;
  filter: ${({ isWhite }) => (isWhite ? "invert(39%) sepia(48%) saturate(472%) hue-rotate(176deg) brightness(91%) contrast(89%)" : "invert(100%) sepia(100%) saturate(0%) hue-rotate(205deg) brightness(104%) contrast(102%)")};
`;
const DataName = styled.h3`
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;

  color: ${({ isWhite }) => (isWhite ? "#2b3442" : "#FFFFFF")};
`;

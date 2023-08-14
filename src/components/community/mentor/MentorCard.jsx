import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";

const MentorCard = ({ mentor }) => {
  const navigate = useNavigate();
  const id = mentor.id;
  const name = mentor.name;
  const country = mentor.contry;
  const originalForeignUniv = mentor.foreign_univ;
  const foreignUniv =
    originalForeignUniv.length > 20
      ? originalForeignUniv.substring(0, 18) + "..."
      : originalForeignUniv;
  const chatCount = mentor.chat_count === null ? 0 : mentor.chat_count;

  const { continent } = useParams();

  const getContinentNumber = (continent) => {
    switch (continent) {
      case "유럽":
        return 1;
      case "아시아":
        return 2;
      case "북아메리카":
        return 3;
      case "남아메리카":
        return 4;
      case "오세아니아":
        return 5;
      case "아프리카":
        return 6;
      default:
        return 0; // 기본값 설정
    }
  };

  const continentNum = getContinentNumber(continent);

  return (
    <Card onClick={() => navigate(`/viewMentor/${continent}/${id}`)}>
      <TopWrapper>
        <ProfileCircle>
          <ProfileImg src={`/img/duck${continentNum}.png`} />
        </ProfileCircle>
        <ProfileText>
          <Text1>
            <strong>{name}</strong> 멘토님
          </Text1>
          <Country>{country}</Country>
          <Text2>{foreignUniv}</Text2>
          <Row>
            <Category>어학</Category>
            <Category>문화/생활</Category>
          </Row>
        </ProfileText>
      </TopWrapper>
      <Line />
      <BottomWrapper>
        <Text3>총 {chatCount} 번의 오리챗을 했어요</Text3>
        <Row>
          <Text4>오동동 광팬</Text4>
          <Star src="/img/stars.png"></Star>
        </Row>
        <Text5>
          내생일파티에 너만 멋 온 그날 혜지니가 머시기 혼 난 날~지워니가
          여친이랑 헤어진그날 걔는 너가 없이 아주 기냥 아주 멋..
        </Text5>
      </BottomWrapper>
    </Card>
  );
};

export default MentorCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  min-width: 300px;
  height: 260px;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 30px;
  background-color: #fff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 2%;
  cursor: pointer;
`;

const ProfileCircle = styled.div`
  height: 100%;
  aspect-ratio: 1 / 1;
  background-color: #d9d9d9;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

const TopWrapper = styled.div`
  width: 85%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 5%;
`;

const BottomWrapper = styled.div`
  width: 85%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  gap: 5%;
`;

const Line = styled.div`
  width: 85%;
  height: 1px;
  flex-shrink: 0;
  background: #d9d9d9;
`;

const ProfileText = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
`;

const Text1 = styled.div`
  font-size: 14px;
  font-weight: 350;
`;

const Country = styled.div`
  font-size: 13px;
  width: fit-content;
  padding: 3px 8px 3px 8px;
  text-align: center;
  border-radius: 30px;
  background: var(--orange, #ffa946);
`;

const Text2 = styled.div`
  font-size: 17px;
  font-weight: 500;
  /* overflow: auto; */
`;

const Category = styled.div`
  font-size: 16x;
  width: fit-content;
  padding: 2px 9px 2px 9px;
  text-align: center;
  border-radius: 30px;
  background: var(--light-gray, #dadada);
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

const Text3 = styled.div`
  width: fit-content;
  text-align: center;
  font-size: 15px;
  font-weight: 320;
  border-radius: 30px;
  padding: 2px 9px 2px 9px;
  border: 1px solid var(--dark-gray, #585858);
`;

const Text4 = styled.div`
  font-size: 16px;
  font-weight: 400;
  padding-left: 3%;
`;

const Star = styled.img`
  width: 80px;
  height: 14px;
`;

const Text5 = styled.div`
  font-size: 11px;
  font-weight: 300;
  padding-left: 3%;
`;

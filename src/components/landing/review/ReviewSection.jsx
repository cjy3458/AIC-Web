import React, { useRef, useEffect } from "react";
import { styled } from "styled-components";

const ReviewSection = () => {
  const wrapperRef = useRef(null); // Ref for the Wrapper element

  useEffect(() => {
    const observerIn = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
        } else {
          entry.target.style.opacity = 0;
        }
      });
    });

    const currentWrapper = wrapperRef.current;

    if (currentWrapper) {
      observerIn.observe(currentWrapper);
    }

    return () => {
      if (currentWrapper) {
        observerIn.unobserve(currentWrapper);
      }
    };
  }, []);

  return (
    <Wrapper ref={wrapperRef}>
      <Image1 src="/img/cloud3.png" />
      <ReviewWrapper>
        <Title>오리챗 후기</Title>
        <CardWrapper>
          <Card>
            <CardImg src="/img/review1.png" />
          </Card>
          <Card>
            <CardImg src="/img/review2.png" />
          </Card>
          <Card>
            <CardImg src="/img/review3.png" />
          </Card>
          <Card>
            <CardImg src="/img/review4.png" />
          </Card>
        </CardWrapper>
      </ReviewWrapper>
      <FloorWrapper>
        <Image2 src="/img/duckduck.png"></Image2>
        <Floor />
      </FloorWrapper>
    </Wrapper>
  );
};

export default ReviewSection;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  background-color: #c5e5f6;
  position: relative;
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
`;

const ReviewWrapper = styled.div`
  width: 80%;
  height: 100%;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  scroll-snap-align: start;
`;

const Title = styled.div`
  margin-top: 5%;
  width: 95%;
  color: #454545;
  font-size: 4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const CardWrapper = styled.div`
  margin-top: 4rem;
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  flex-wrap: wrap;
`;

const Card = styled.div`
  height: 500px;
  width: 340px;
  border-radius: 30px;
  margin: 1%;
  @media (max-width: 1970px) {
    height: 450px;
    width: 320px;
  }
  @media (max-width: 1850px) {
    height: 380px;
    width: 280px;
  }
  @media (max-width: 1630px) {
    height: 350px;
    width: 240px;
  }
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Image1 = styled.img`
  top: 0;
  width: 100%;
  margin-bottom: 1px;
`;

const FloorWrapper = styled.div`
  width: 100%;
  height: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  scroll-snap-align: end;
  @media (max-width: 1680px) {
    height: 40rem;
  }
`;

const Image2 = styled.img`
  width: 80%;
  position: absolute;
  bottom: 0;
  margin-bottom: 92px;
  z-index: 1;
  @media (max-width: 900px) {
    height: 180px;
    width: 700px;
  }
`;

const Floor = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 110px;
  background: linear-gradient(180deg, #8fc48a 0%, #67b162 100%);
`;

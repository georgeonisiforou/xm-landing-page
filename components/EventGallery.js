import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useWindowSize } from "usehooks-ts";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem;
  flex-direction: column;
  gap: 2rem;
  background-color: #f4f4f4;
  position: relative;
`;

const Title = styled.h3`
  font-size: 30px;
  font-weight: 800;
  text-align: center;
  color: #252525;
`;

const Carousel = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  position: relative;
  gap: 2rem;

  transform: ${({ move }) => `translateX(${move}px)`};
  transition: all 0.3s ease;
`;

const Wrapper = styled.div`
  width: clamp(280px, 60vw, 1200px);
  overflow: hidden;

  @media (max-width: 400px) {
    padding: 0 1rem;
  }
`;

const Box = styled.div`
  min-width: 160px;
  height: 160px;
  background-color: #dadada;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 400px) {
    min-width: 100px;
    height: 100px;
  }
`;

const Prev = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  color: #959595;
  position: absolute;
  left: 35px;
  top: 50%;

  @media (max-width: 400px) {
    width: 15px;
    height: 15px;
    top: 58%;
    left: 10px;
  }
`;

const Next = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  color: #959595;
  position: absolute;
  right: 35px;
  top: 50%;

  @media (max-width: 400px) {
    width: 15px;
    height: 15px;
    top: 58%;
    right: 10px;
  }
`;

const EventGallery = () => {
  const boxes = [1, 2, 3, 4, 5, 6, 7, 8];
  const [move, setMove] = useState(0);

  const { width } = useWindowSize();

  const handleNext = () => {
    if (width > 400) {
      if (move > -1344) {
        setMove(move - 192);
      }
    } else {
      if (move > -924) {
        setMove(move - 132);
      }
    }
  };

  const handlePrev = () => {
    if (width > 400) {
      if (move < 0) {
        setMove(move + 192);
      }
    } else {
      if (move < 0) {
        setMove(move + 132);
      }
    }
  };
  return (
    <Container>
      <Title>Event Gallery</Title>
      <Wrapper>
        <Carousel move={move}>
          {boxes.map((box, idx) => {
            return <Box key={idx}>{box}</Box>;
          })}
        </Carousel>
      </Wrapper>

      <Prev onClick={handlePrev}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </Prev>
      <Next onClick={handleNext}>
        <FontAwesomeIcon icon={faChevronRight} />
      </Next>
    </Container>
  );
};

export default EventGallery;

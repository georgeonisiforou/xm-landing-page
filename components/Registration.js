import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import MultiStepForm from "./MultiStepForm";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 3rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 34px;
  font-weight: 700;
`;

const Boxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 3rem;

  & div:first-child {
    border-left: none;
  }

  & div:last-child {
    border-right: none;

    @media (max-width: 400px) {
      border-bottom: none;
    }
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid #fff;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 320px;

  @media (max-width: 768px) {
    min-width: 380px;
    border: none;
    border-bottom: 1px solid #fff;
  }

  @media (max-width: 400px) {
    min-width: 280px;
    border: none;
    border-bottom: 1px solid #fff;
  }
`;

const Registration = () => {
  return (
    <Container>
      <Title>- Register Here -</Title>
      <p>Join us to celebrate our biggest night of the year.</p>
      <Boxes>
        <Box>
          <FontAwesomeIcon
            icon={faCalendarCheck}
            style={{ width: "23px", height: "30px" }}
          />
          <p>12 NOVEMBER 2022</p>
        </Box>
        <Box>
          <FontAwesomeIcon
            icon={faClock}
            style={{ width: "26px", height: "30px" }}
          />
          <p>16:00 – 23:00</p>
        </Box>
        <Box>
          <FontAwesomeIcon
            icon={faLocationDot}
            style={{ width: "20px", height: "30px" }}
          />
          <p>Centara Grand & Bangkok Convention Centre, Bangkok</p>
        </Box>
      </Boxes>
      <MultiStepForm />
    </Container>
  );
};

export default Registration;

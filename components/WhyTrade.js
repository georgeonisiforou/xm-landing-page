import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { useWindowSize } from "usehooks-ts";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const Title = styled.h3`
  font-size: 35px;
  font-weight: 300;
  text-align: center;
`;

const Sub = styled.p`
  font-size: 14px;
  max-width: 640px;
  text-align: center;
`;

const Main = styled.div`
  width: 100%;
  max-width: 1000px;
  display: grid;
  gap: 1rem;
  padding: 2rem 3rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: 1fr 1fr;

  @media (max-width: 450px) {
    padding: 0;
  }
`;

const VerticalBox = styled.div`
  grid-column: ${({ gridColumn }) => gridColumn};
  grid-row: ${({ gridRow }) => gridRow};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 1rem;
  padding: 3rem;
  background-color: #0b0819;
  border-radius: 10px;
  max-width: 320px;
`;

const HorizontalBox = styled.div`
  grid-column: ${({ gridColumn }) => gridColumn};
  grid-row: ${({ gridRow }) => gridRow};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 3rem;
  background-color: #0b0819;
  border-radius: 10px;
`;

const BoxTitle = styled.p`
  font-weight: 700;
  font-size: 25px;
`;

const GreenLine = styled.div`
  width: 50px;
  height: 1px;
  background-color: #29a643;
`;

const HorContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const WhyTrade = () => {
  const { width } = useWindowSize();
  return (
    <Container>
      <Title>
        Why <span style={{ fontWeight: "600" }}>Trade</span> with XM?
      </Title>
      <GreenLine />
      <Sub>
        We have been providing traders around the world with the same{" "}
        <span style={{ fontWeight: "700" }}>premium experience</span> for over a
        decade. As an <span style={{ fontWeight: "700" }}>industry-leader</span>
        , we know what the modern trader needs to be successful in the markets.
      </Sub>
      <Main>
        {width > 991 ? (
          <VerticalBox gridColumn="1/2" gridRow="1/3">
            <BoxTitle>Superior Trade Execution</BoxTitle>
            <GreenLine />
            <p style={{ marginBottom: "60px" }}>
              <span style={{ fontWeight: "700" }}>99%</span> of trades are
              executed in{" "}
              <span style={{ fontWeight: "700" }}>less than a second</span>,
              with no requotes or rejections.
            </p>
            <Image
              alt="thunder icon"
              src={"/images/thunder.png"}
              width={205}
              height={205}
            />
          </VerticalBox>
        ) : (
          <HorizontalBox gridColumn="1/4" gridRow="1/2">
            <HorContainer>
              <BoxTitle style={{ maxWidth: "10ch" }}>
                Superior Trade Execution
              </BoxTitle>
              <Image
                alt="thunder icon"
                src={"/images/thunder.png"}
                width={width > 991 ? 70 : 55}
                height={width > 991 ? 70 : 55}
              />
            </HorContainer>

            <GreenLine />
            <p style={{ maxWidth: "45ch" }}>
              We offer some of the{" "}
              <span style={{ fontWeight: "700" }}>lowest spreads</span> and we
              don’t charge commissions.
            </p>
          </HorizontalBox>
        )}

        <HorizontalBox
          gridColumn={width > 991 ? "2/4" : "1/4"}
          gridRow={width > 991 ? "1/2" : "2 / 3"}
        >
          <HorContainer>
            <BoxTitle style={{ maxWidth: "10ch" }}>
              Competitive Pricing
            </BoxTitle>
            <Image
              alt="percentage icon"
              src={"/images/percent.png"}
              width={width > 991 ? 90 : 55}
              height={width > 991 ? 90 : 55}
            />
          </HorContainer>

          <GreenLine />
          <p style={{ maxWidth: "45ch" }}>
            We offer some of the{" "}
            <span style={{ fontWeight: "700" }}>lowest spreads</span> and we
            don’t charge commissions.
          </p>
        </HorizontalBox>
        <HorizontalBox
          gridColumn={width > 991 ? "2/3" : "1/4"}
          gridRow={width > 991 ? "2/3" : "3/4"}
          direction="row"
        >
          <HorContainer>
            <BoxTitle style={{ maxWidth: "10ch" }}>
              Advanced Technology
            </BoxTitle>
            <Image
              alt="chip icon"
              src={"/images/chip.png"}
              width={width > 991 ? 70 : 55}
              height={width > 991 ? 70 : 55}
            />
          </HorContainer>

          <GreenLine />
          <p style={{ maxWidth: "25ch" }}>
            Trade on <span style={{ fontWeight: "700" }}>MT4</span> or{" "}
            <span style={{ fontWeight: "700" }}>MT5</span>, with expert tools,
            across desktop, web and mobile.
          </p>
        </HorizontalBox>
        <HorizontalBox
          gridColumn={width > 991 ? "3/4" : "1/4"}
          gridRow={width > 991 ? "2/3" : "4/5"}
        >
          <HorContainer>
            <BoxTitle style={{ maxWidth: "20ch" }}>Start with $5</BoxTitle>
            <Image
              alt="dollar icon"
              src={"/images/dollar.png"}
              width={width > 991 ? 70 : 55}
              height={width > 991 ? 70 : 55}
            />
          </HorContainer>

          <GreenLine />
          <p style={{ marginBottom: "60px", maxWidth: "30ch" }}>
            Start trading your preferred instruments with as little as a{" "}
            <span style={{ fontWeight: "700" }}>$5 minimum deposit.</span>
          </p>
        </HorizontalBox>
      </Main>
    </Container>
  );
};

export default WhyTrade;

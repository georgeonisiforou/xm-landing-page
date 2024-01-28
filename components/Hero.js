import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { useWindowSize } from "usehooks-ts";

const Container = styled.div`
  width: 100%;
  height: 617px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: #fff;
  background: ${({ screenSize }) =>
    screenSize > 768
      ? `linear-gradient(
      180deg,
      rgba(32, 46, 71, 0.2) 36.53%,
      rgba(32, 46, 71, 0.3) 57.69%,
      rgba(32, 46, 71, 0.585) 78.84%,
      rgba(32, 46, 71, 0) 100%
    ),
    url("/images/heroBg.png")`
      : `linear-gradient(180deg, rgba(32, 46, 71, 0.2) 36.53%, rgba(32, 46, 71, 0.30) 57.69%, rgba(32, 46, 71, 0.585) 78.84%, rgba(32, 46, 71, 0) 100%),
url("/images/heroBgMob.png")`};
  background-position: ${({ screenSize }) =>
    screenSize > 768 ? "center" : "top"};
  background-repeat: no-repeat;
  background-size: ${({ screenSize }) =>
    screenSize > 768 ? "cover" : "contain"};
`;

const Content = styled.div`
  width: 100%;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const FirstTextLine = styled.p`
  font-size: 16px;
  text-transform: uppercase;
  color: #dddddd;
`;

const Title = styled.h1`
  font-weight: 400;
  text-align: center;
`;

const Sub = styled.p`
  width: 100%;
  max-width: 460px;
`;

const Btn = styled(Link)`
  width: clamp(290px, 50vw, 345px);
  background-color: #29a643;
  text-transform: uppercase;
  height: 40px;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-family: "Bebas Neue", sans-serif;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Demo = styled.p`
  font-size: 14px;
`;

const DemoLink = styled(Link)`
  text-decoration: underline;
`;

const Terms = styled.p`
  font-size: 12px;
`;

const TermsLink = styled(Link)`
  color: #d51820;
`;

const Hero = () => {
  const { width } = useWindowSize();
  return (
    <Container screenSize={width}>
      <Content>
        <FirstTextLine>TRADE WITH</FirstTextLine>
        <Title>
          <span style={{ fontWeight: "600" }}>Zero Swaps</span> on All XM Ultra
          Low Accounts for more than 25 instruments!
        </Title>
        <Sub>
          Enjoy spreads{" "}
          <span style={{ fontWeight: "600" }}>as low as 0.6 pips</span> and{" "}
          <span style={{ fontWeight: "600" }}>leverage up to 1000:1</span> on
          instruments like{" "}
          <span style={{ fontWeight: "600" }}>
            EURUSD, USDJPY, EURJPY, GBPUSD
          </span>
          , and <span style={{ fontWeight: "600" }}>Gold</span>.
        </Sub>
        <Btn href="/register">open account</Btn>
        <Demo>
          New to trading? Try a <DemoLink href="/demo">Demo account.</DemoLink>
        </Demo>
        <Terms>
          Terms and Conditions apply*. To read the full T&Cs,{" "}
          <TermsLink href="/">click here.</TermsLink>
        </Terms>
      </Content>
    </Container>
  );
};

export default Hero;

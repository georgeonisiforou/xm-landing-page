import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { useWindowSize } from "usehooks-ts";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 1rem;
  background-color: #fff;
  color: #444444;
`;

const Main = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 400px) {
    gap: 5rem;
  }
`;

const LeftPanel = styled.div`
  flex: 1;
  display: flex;

  padding: 2rem;

  @media (max-width: 400px) {
    padding: 0;
  }
`;

const RightPanel = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
  min-width: 320px;

  @media (max-width: 400px) {
    gap: 2rem;
    padding: 0;

    min-width: unset;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  align-items: ${({ screenSize }) =>
    screenSize < 768 ? "center" : "flex-start"};

  /* min-width: 280px; */
  max-width: ${({ screenSize }) => (screenSize > 768 ? "280px" : "unset")};
`;

const RedLine = styled.div`
  width: 72px;
  background-color: #d51820;
  height: 3px;
`;

const BigLetters = styled.div`
  font-size: ${({ screenSize }) => (screenSize > 768 ? "80px" : "41px")};
  display: flex;
  justify-content: center;

  flex-direction: ${({ screenSize }) => (screenSize > 768 ? "column" : "row")};
  font-weight: 900;
  gap: 1rem;

  @media (max-width: 400px) {
    font-size: 35px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  color: #444444;
  font-weight: 700;
  font-size: 19px;
`;

const Text = styled.p`
  font-size: 14px;

  @media (max-width: 768px) {
    text-align: center;
    padding: 0 1.5rem;
  }
`;

const Features = () => {
  const { width } = useWindowSize();
  return (
    <Container>
      <Main>
        <LeftPanel>
          <Content screenSize={width}>
            <RedLine />
            <BigLetters screenSize={width}>
              <span>
                Big<span style={{ color: "#d51820" }}>.</span>
              </span>
              <span>
                Fair<span style={{ color: "#d51820" }}>.</span>
              </span>
              <span>
                Human<span style={{ color: "#d51820" }}>.</span>
              </span>
            </BigLetters>
            <div
              style={{
                width: width > 768 ? "220px" : "100%",
                textAlign: width > 768 ? "left" : "center",
              }}
            >
              Learn why{" "}
              <span style={{ fontWeight: "700" }}>
                over 5 million clients choose XM
              </span>{" "}
              as their trusted online broker.
            </div>
          </Content>
        </LeftPanel>
        <RightPanel>
          <Content screenSize={width}>
            <ImageContainer>
              <Image
                alt="img"
                src={"/images/shield.png"}
                fill
                style={{ objectFit: "contain" }}
              />
            </ImageContainer>
            <Title>Authorised and Regulated</Title>
            <Text>
              At XM, we adhere to all regulatory standards and are fully
              authorised and regulated by FSC.
            </Text>
          </Content>
          <Content screenSize={width}>
            <ImageContainer>
              <Image
                alt="img"
                src={"/images/people.png"}
                fill
                style={{ objectFit: "contain" }}
              />
            </ImageContainer>
            <Title>Committed and Fair</Title>
            <Text>
              We operate with complete transparency and adhere to the highest
              professional and ethical standards.
            </Text>
          </Content>
          <Content screenSize={width}>
            <ImageContainer>
              <Image
                alt="img"
                src={"/images/cup.png"}
                fill
                style={{ objectFit: "contain" }}
              />
            </ImageContainer>
            <Title>Multi-Award-Winning</Title>
            <Text>
              Over the years we have received over 40 awards for the quality of
              our products and services.
            </Text>
          </Content>
          <Content screenSize={width}>
            <ImageContainer>
              <Image
                alt="img"
                src={"/images/247.png"}
                fill
                style={{ objectFit: "contain" }}
              />
            </ImageContainer>
            <Title>24/7 Support</Title>
            <Text>
              Our support agents are on hand 24/7 to answer your questions or
              assist you with any issues.
            </Text>
          </Content>
        </RightPanel>
      </Main>
    </Container>
  );
};

export default Features;

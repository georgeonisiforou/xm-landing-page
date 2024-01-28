import React from "react";
import styled from "styled-components";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { useWindowSize } from "usehooks-ts";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #000000;
  padding: 1rem;
`;

const TopPanel = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const BottomPanel = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 12px;
  }
`;

const TopLeft = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  padding: 1rem;
`;

const TopRight = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 12px;
  color: #888888;
  padding: 1rem;
`;

const BottomLeft = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 12px;
  color: #888888;
  padding: 1rem;
  min-width: 300px;

  @media (max-width: 600px) {
    font-size: 12px;
    padding: 1rem 0;
  }

  & span:nth-child(-n + 2) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    &::after {
      position: absolute;
      content: "";
      right: -0.5rem;
      width: 1px;
      height: 100%;
      background-color: #888888;
      top: 0;
    }
  }
`;

const GreyLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #444444;
  margin: 1rem 0;
`;

const Footer = () => {
  const { width } = useWindowSize();
  return (
    <Container>
      {width > 768 ? (
        <>
          <TopPanel>
            <TopLeft>
              <Image
                alt="metaQuotes image"
                src={"/images/metaQuotes.png"}
                width={136}
                height={25}
              />
              <Image
                alt="metaQuotes image"
                src={"/images/verisign.png"}
                width={131}
                height={36}
              />
              <Image
                alt="metaQuotes image"
                src={"/images/unicef.png"}
                width={110}
                height={38}
              />
              <Image
                alt="metaQuotes image"
                src={"/images/investors.png"}
                width={195}
                height={37}
              />
            </TopLeft>
            <TopRight>
              Follow us on
              <FaFacebookF style={{ color: "#BDBDBD" }} />
              <FaTwitter style={{ color: "#BDBDBD" }} />
              <FaYoutube style={{ color: "#BDBDBD" }} />
              <FaInstagram style={{ color: "#BDBDBD" }} />
              <FaLinkedinIn style={{ color: "#BDBDBD" }} />
            </TopRight>
          </TopPanel>
          <GreyLine />
        </>
      ) : null}

      <BottomPanel>
        <BottomLeft>
          <span>Privacy Policy</span>
          <span>Cookie Policy</span>
          <span>Terms and Conditions</span>
        </BottomLeft>
        <div style={{ padding: "1rem" }}>
          <Image
            alt="trading point image"
            src={"/images/tradingPoint.png"}
            width={182}
            height={57}
          />
        </div>
      </BottomPanel>
    </Container>
  );
};

export default Footer;

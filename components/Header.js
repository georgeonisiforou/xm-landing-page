import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { useWindowSize } from "usehooks-ts";

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 2rem 3rem;
  justify-content: ${({ screenSize }) =>
    screenSize > 768 ? "space-between" : "center"};
  align-items: center;
`;

const LogoContainer = styled.div`
  position: relative;
  width: 140px;
  aspect-ratio: 2.91666;
`;

const NavLinksContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: #fff;
`;

const Header = () => {
  const { width } = useWindowSize();
  return (
    <Container screenSize={width}>
      <LogoContainer>
        <Image
          alt="logo"
          src="/images/logo.png"
          fill
          style={{ objectFit: "contain" }}
        />
      </LogoContainer>
      {width > 768 ? (
        <NavLinksContainer>
          <NavLink href="/">XM Homepage</NavLink>
          <NavLink href="/support">Support</NavLink>
        </NavLinksContainer>
      ) : null}
    </Container>
  );
};

export default Header;

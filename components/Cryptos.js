import React from "react";
import styled from "styled-components";
import { useQueryClient, useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronUp,
  faCircleChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
`;

const Main = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 205px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 14px;
  background: linear-gradient(
      0deg,
      rgba(140, 140, 140, 0.1),
      rgba(140, 140, 140, 0.1)
    ),
    linear-gradient(0deg, rgba(167, 167, 167, 0.2), rgba(167, 167, 167, 0.2));
`;

const CardTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CryptoLogo = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
`;

const CryptoName = styled.div`
  background-color: #fff8d6;
  color: #000;
  font-size: 9px;
  border-radius: 4px;
  padding: 4px;
  text-transform: uppercase;
`;

const GreyLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ffffff;
  opacity: 0.3;
`;

const PercentChange = styled.div`
  display: flex;
  font-size: 14px;
  color: ${({ color }) => color};
  align-items: center;
  gap: 8px;
`;

const Cryptos = () => {
  let wantedCryptos = ["BTC", "ETH", "XRP", "LTC", "BCH"];

  const fetchData = async () => {
    const data = await axios
      .get("https://api.coinlore.net/api/tickers/")

      .then((data) => data.data.data);

    return data;
  };

  // Queries
  const { data, isLoading, isError, error } = useQuery("cryptos", fetchData);

  let matches = [];
  if (data !== undefined) {
    wantedCryptos.map((item, idx) => {
      data.filter((crypto) => {
        if (crypto.symbol === item) {
          matches.push(crypto);
        }
      });
    });
  }

  return (
    <Container>
      <Main>
        {matches.map((item, idx) => {
          return (
            <Card key={item.id}>
              <CardTitle>
                <CryptoLogo>
                  <Image
                    alt="crypto logo"
                    src={`/images/${item.symbol}.png`}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </CryptoLogo>
                <p>{item.symbol}</p>
                <CryptoName>{item.name}</CryptoName>
              </CardTitle>
              <GreyLine />
              <p>${item.price_usd}</p>
              <PercentChange
                color={item.percent_change_24h > 0 ? "#b1ffc2" : "#FFA3A6"}
              >
                {item.percent_change_24h > 0 ? (
                  <FontAwesomeIcon
                    icon={faCircleChevronUp}
                    style={{ width: "10px", height: "10px" }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faCircleChevronDown}
                    style={{ width: "10px", height: "10px" }}
                  />
                )}
                {item.percent_change_24h}%
              </PercentChange>
            </Card>
          );
        })}
      </Main>
    </Container>
  );
};

export default Cryptos;

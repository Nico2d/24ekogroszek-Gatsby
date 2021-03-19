import React from "react";
import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const OpenHours = () => {
  return (
    <HoursContainer>
      <HourWrapper>
        <Hour>
          09<sup>00</sup>-17<sup>00</sup>
        </Hour>
        <Description>PN-PT</Description>
      </HourWrapper>

      <HourWrapper>
        <Hour>
          09<sup>00</sup>-13<sup>00</sup>
        </Hour>
        <Description>SOBOTA</Description>
      </HourWrapper>

      <HourWrapper>
        <Hour>Zamknięte</Hour>
        <Description>NIEDZIELA</Description>
      </HourWrapper>
    </HoursContainer>
  );
};

const HoursContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: column;

  @media ${device.tablet} {
    flex-flow: row;
  }
`;

const Hour = styled.p`
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: 0.1em;
  margin-bottom: 0;

  sup {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-style: italic;
  font-weight: 300;
`;

const HourWrapper = styled.div`
  text-align: center;
`;

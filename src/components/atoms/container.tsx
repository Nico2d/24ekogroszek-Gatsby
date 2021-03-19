import styled from "styled-components";
import { size, device } from "../../styles/breakpoints";

export const Container = styled.div`
  width: 100%;
  margin: auto;
  padding: 0 1rem;
  height: 100%;
  position: relative;
  max-width: ${size.laptopM};

  @media ${device.laptopL} {
    max-width: ${size.laptopL};
  }
`;

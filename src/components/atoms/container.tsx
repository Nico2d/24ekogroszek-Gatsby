import styled from "styled-components";
import { size, device } from "../../styles/breakpoints";

export const Container = styled.div`
  width: 100%;
  max-width: ${size.laptopM};
  margin: auto;
  padding: 0 1rem;
  height: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;

  @media ${device.laptopL} {
    max-width: ${size.laptopL};
  }
`;

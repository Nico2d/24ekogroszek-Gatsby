import styled from "styled-components";

export const IconWithText = styled.p<{}>`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  margin: 0;
  margin-top: 0.5rem;
  margin-right: 0.5rem;

  > svg {
    margin-right: 0.5rem;
    color: inherit;
    opacity: 0.7;
  }
`;

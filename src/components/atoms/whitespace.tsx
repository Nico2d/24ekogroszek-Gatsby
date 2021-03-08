import styled from "styled-components";

export const StyledWhitespace = styled.div<{ height: number }>`
  height: ${({ height }) => height}rem;
`;

import React from "react";
import styled from "styled-components";
import { Container } from "../atoms/container";
import { device } from "../../styles/breakpoints";
import { IconWithText } from "../atoms/icon-with-text";
import { HiOutlineLocationMarker } from "@react-icons/all-files/hi/HiOutlineLocationMarker";
import { HiOutlinePhone } from "@react-icons/all-files/hi/HiOutlinePhone";
import { useStaticQuery, graphql } from "gatsby";

export const ContactSection = () => {
  const backgroundImage = useStaticQuery(graphql`
    query GetContactSectionBackground {
      file(relativePath: { eq: "phone.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <StyledContainer
      background={backgroundImage.file.childImageSharp.fluid.src}
    >
      <ContentWrapper>
        <Heading>
          <b>Masz pytania? </b>Skontaktuj się z nami
        </Heading>

        <IconWithText>
          <HiOutlinePhone /> 500 400 348
        </IconWithText>
        <IconWithText>
          <HiOutlinePhone />
          500 300 158
        </IconWithText>

        <Heading>Obsługujemy także na miejscu</Heading>

        <IconWithText>
          <HiOutlineLocationMarker />
          Opole ul. Wspólna 1
        </IconWithText>
      </ContentWrapper>
    </StyledContainer>
  );
};

const ContentWrapper = styled(Container)`
  display: flex;
  flex-flow: column;
  justify-content: center;
`;

const StyledContainer = styled.div<{ background: string }>`
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-position: 75% 0%;
  background-size: 100rem;
  padding-bottom: 2rem;
  padding-top: 2rem;
  font-weight: 300;

  @media ${device.tablet} {
    background-position: top right;
    background-size: cover;
    height: 550px;
  }

  b {
    font-weight: 700;
    background: ${({ theme }) => theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Heading = styled.h2`
  margin-top: 3rem;
  line-height: initial;
  font-size: 1.8rem;
`;

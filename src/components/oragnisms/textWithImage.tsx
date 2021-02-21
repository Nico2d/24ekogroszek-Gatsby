import React from "react";
import styled from "styled-components";
import { Button } from "../atoms/button";
import image from "../../assets/tom-fisk.jpg";
import polygon from "../../assets/PolygonBig.svg";

export const TextWithImage = () => {
  return (
    <Container>
      <ContentSection>
        <h3>Najwyższa jakość</h3>
        <p>
          Zapewniamy najwyższej jakości ekogroszek od renomowanych składów opału
          z wieloletnim stażem i najlepszą opinią. Dlatego stawiamy na
          renomowane produkty w celu uszczęśliwienia Klienta. Znajdziesz u nas
          towar dostosowany specjalnie do twojego pieca na ekogroszek w niskich
          cenach.
        </p>

        <Button text="Poznaj naszych dostawców" />
      </ContentSection>
      <ImageSection>
        <img src={image} />
      </ImageSection>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: row;
  margin: 1rem;
  height: 300px;

  > div {
    flex: 50%;
  }
`;

const ContentSection = styled.div`
  margin: auto 0;
`;

const ImageSection = styled.div`
  background-image: url(${polygon});
  background-position: left;
  background-size: cover;

  > img {
    width: 300px;
  }
`;

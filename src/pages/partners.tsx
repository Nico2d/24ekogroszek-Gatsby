import React from "react";
import styled from "styled-components";
import { Container } from "../components/atoms/container";
import { Layout } from "../components/layout";
import logo1 from "../assets/bartex-wegiel.png";
import logo2 from "../assets/wyroby-weglowe.png";
import { device } from "../styles/breakpoints";

export const Partners = () => {
  return (
    <Layout>
      <StyledContianer>
        <PageHeading>Partnerzy </PageHeading>

        <Card>
          <img src={logo1} />
          <p>
            Wyroby Węglowe Prestige to znana i ceniona marka na rynku polskim i
            europejskim, wiarygodny partner w interesach z wieloletnim stażem i
            dobrą opinią. Interesy firm współpracujących są dla nas równie ważne
            jak własne a zadowolenie Klienta jest absolutnym priorytetem. Cenimy
            uczciwość, szanujemy konkurencję – wymagamy tego samego. <br />
            <br />
            Specjalizujemy się w sprzedaży, konfekcjonowaniu, sortowaniu i
            dystrybucji wysokoenergetycznego węgla I gat. – głównie ekogroszku.
            Kładziemy coraz większy nacisk na rozpoznawalność naszej marki
            zarówno w Polsce, jak i poza jej granicami.
          </p>
        </Card>

        <Card>
          <img src={logo2} />
          <p>
            P.H.U. BARTEX działa na rynku od 2007 roku. W początkowym okresie
            istnienia firmy profil działalności skupiał się głównie na usługach
            transportowych i spedycyjnych. Pod koniec 2007 roku rozpoczęliśmy
            sprowadzanie materiałów opałowych z Czech. Szybko dzięki bardzo
            atrakcyjnym cenom i wysokiej jakości oferowanych produktów
            zyskaliśmy wielu zadowolonych Stałych Klientów oraz staliśmy się
            centrum zaopatrywania w opał dla wielu składów, hurtowni oraz
            sklepów wielkopowierzchniowych, w tym hipermarketów.
          </p>
        </Card>
      </StyledContianer>
    </Layout>
  );
};

export default Partners;

const StyledContianer = styled(Container)`
  display: block;
`;

const PageHeading = styled.h1`
  font-size: 2.5rem;
  margin: 150px 1rem 2rem;
`;

const Card = styled.div`
  display: flex;
  border-radius: 2rem;
  background: linear-gradient(0deg, #ffffff, #ffffff);
  box-shadow: 0px 0px 10px 3px rgb(0 0 0 / 25%);
  margin: 0 1rem;
  padding: 2rem;
  flex-flow: column;
  margin-bottom: 3rem;

  @media ${device.tablet} {
    flex-flow: row;
  }

  > img {
    flex-basis: 33.33%;
    max-width: 300px;
    margin: auto;
  }

  > p {
    flex-basis: 66.66%;

    @media ${device.tablet} {
      padding-left: 2rem;
    }
  }
`;

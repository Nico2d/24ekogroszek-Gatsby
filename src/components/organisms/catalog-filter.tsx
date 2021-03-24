import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { BsFilter } from "@react-icons/all-files/bs/BsFilter";
import { OutsideEvent } from "../atoms/outside-event";
import { ProducersList } from "../molecules/producers-list";

type CatalogFilterProps = {
  InactiveFilterIDList: Array<string>;
  setInactiveFilterIDList: (e) => void;
};

export const CatalogFilter: React.FC<CatalogFilterProps> = ({
  InactiveFilterIDList,
  setInactiveFilterIDList,
}) => {
  const isDesktop = useMediaQuery(device.tablet);
  const [isHidden, setIsHidden] = useState<boolean>(true);

  const hideOptions = () => {
    setIsHidden(!isHidden);
  };

  if (!isDesktop)
    return (
      <OutsideEvent method={hideOptions} isActive={isHidden}>
        <FilterWrapper onClick={hideOptions}>
          <BsFilter />
        </FilterWrapper>

        <MobileFilterContainer
          style={{ display: isHidden ? "none" : "inherit" }}
        >
          <ProducersList
            InactiveFilterIDList={InactiveFilterIDList}
            setInactiveFilterIDList={setInactiveFilterIDList}
          />
        </MobileFilterContainer>
      </OutsideEvent>
    );

  return (
    <StyledAside>
      <h6>Producent</h6>

      <StyledProducersWrapper>
        <ProducersList
          InactiveFilterIDList={InactiveFilterIDList}
          setInactiveFilterIDList={setInactiveFilterIDList}
        />
      </StyledProducersWrapper>
    </StyledAside>
  );
};

const MobileFilterContainer = styled.div`
  position: absolute;
  z-index: 100;
  top: 52px;
  right: 1rem;
  width: 200px;
  height: fit-content;
  background: ${({ theme }) => theme.colors.white};
  padding: 0.5rem;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.lineColor};
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  > li {
    margin: 0.5rem;
  }
`;

const FilterWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.white};
  width: 50px;
  height: 50px;
  font-size: 1.6rem;
  border-radius: 1.5rem;
  right: 1rem;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.lineColor};
`;

const StyledProducersWrapper = styled.div`
  > li {
    cursor: pointer;
    margin-bottom: 0.5rem;
  }
`;

const StyledAside = styled.aside`
  width: 300px;
  display: none;

  > h6 {
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  @media ${device.tablet} {
    display: block;
  }
`;

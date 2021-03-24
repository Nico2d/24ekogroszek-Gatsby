import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import { Checkbox } from "../atoms/checkbox";

type CatalogFilterProps = {
  InactiveFilterIDList: Array<string>;
  setInactiveFilterIDList: (e) => void;
};

export const ProducersList: React.FC<CatalogFilterProps> = ({
  InactiveFilterIDList,
  setInactiveFilterIDList,
}) => {
  const {
    allStrapiProducents: { edges: producers },
  } = useStaticQuery(graphql`
    query GetProducents {
      allStrapiProducents(filter: { kategoria: { eq: "Ekogroszek" } }) {
        edges {
          node {
            Nazwa
            id
          }
        }
      }
    }
  `);
  const nameList = producers.map((producent) => producent.node.Nazwa);

  const checkAllHandler = (e) => {
    InactiveFilterIDList.length === 0
      ? setInactiveFilterIDList(nameList)
      : setInactiveFilterIDList([]);
  };

  const ProductFilterHandler = (isChecked, key) => {
    if (isChecked) {
      setInactiveFilterIDList(
        InactiveFilterIDList.filter((item) => item !== key)
      );
    } else {
      setInactiveFilterIDList((props) => [...props, key]);
    }
  };

  return (
    <>
      <li>
        <Checkbox
          label="Wszystkie"
          checked={InactiveFilterIDList.length === 0}
          onChangeHandler={checkAllHandler}
          name="all"
        />
      </li>
      {producers.map(({ node }) => (
        <li key={node.id}>
          <Checkbox
            label={node.Nazwa}
            name={node.Nazwa}
            checked={!InactiveFilterIDList.includes(node.Nazwa)}
            onChangeHandler={(e) =>
              ProductFilterHandler(e.target.checked, node.Nazwa)
            }
          />
        </li>
      ))}
    </>
  );
};

import React, { useEffect, useState } from "react";
import styled from "styled-components";

const UserCard = ({ user, clickHandler }) => {
  if (user === undefined || user === null)
    return (
      <Card>
        <Avatar />
        <Username>loading...</Username>
      </Card>
    );

  return (
    <Card onClick={(e) => clickHandler(user.id)}>
      <Avatar src={user.avatar.url} />
      <Username>#{user.username}</Username>
    </Card>
  );
};

const RateYourMate = () => {
  const [userList, setUserList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  const [leftUser, setLeftUser] = useState(null);
  const [rightUser, setRightUser] = useState(null);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    fetch("https://general-strapi.herokuapp.com/dc-users")
      .then((response) => response.json())
      .then((data) => {
        let leftUserId = randomNumber(data.length);
        let rightUserId = randomNumber(data.length, leftUserId);

        setUserList(data);
        setLeftUser(data[leftUserId]);
        setRightUser(data[rightUserId]);
      });

    fetch("https://general-strapi.herokuapp.com/ranking-categories")
      .then((response) => response.json())
      .then((data) => {
        setCategoryList(data);
        setCategory(data[randomNumber(data.length)]);
      });
  }, []);

  const GetCategory = (categoryObj) => {
    if (categoryObj === null) return "loading...";
    return categoryObj.CategoryText;
  };

  const randomNumber = (max: number, except?) => {
    let num = Math.floor(Math.random() * max);
    return num === except ? randomNumber(max, except) : num;
  };

  const RandomTwoUsersId = () => {
    let rand1 = randomNumber(userList.length);
    let rand2 = randomNumber(userList.length, rand1);
    return [rand1, rand2];
  };

  const clickHandler = (winnerId) => {
    const lostWith = winnerId === leftUser.id ? rightUser.id : leftUser.id;

    fetch(`https://general-strapi.herokuapp.com/ranking-opinions`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ranking_user: {
          id: winnerId,
        },
        ranking_category: {
          id: category.id,
        },
        point: 1,
        won_with: {
          id: lostWith,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {})
      .catch((error) => {
        console.error("Error:", error);
      });

    const [leftUserId, rightUserId] = RandomTwoUsersId();
    setLeftUser(userList[leftUserId]);
    setRightUser(userList[rightUserId]);
    setCategory(categoryList[randomNumber(categoryList.length)]);
  };

  return (
    <Container>
      <Header>
        <Heading>Rate your mate!</Heading>
        <Category>W kategorii: {GetCategory(category)}</Category>
      </Header>

      <CardContainer>
        <UserCard user={leftUser} clickHandler={clickHandler} />
        <UserCard user={rightUser} clickHandler={clickHandler} />
      </CardContainer>
    </Container>
  );
};

export default RateYourMate;

//// CARD

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  margin: auto;
`;

const Username = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
`;

const Card = styled.div`
  width: 250px;
  height: 350px;
  background: white;
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  border-radius: 1rem;
  cursor: pointer;
  box-shadow: 0px 0px 20px 3px rgba(0, 249, 255, 0.4);
`;

//////////////////// Container

const Header = styled.div`
  height: 150px;
`;

const Container = styled.div`
  background: #00000a;
  width: 100vw;
  height: 100vh;
`;

const StyledHeader = styled.h1`
  text-align: center;
  color: white;
  margin: 0;
`;

const Category = styled(StyledHeader)`
  font-size: 1.2rem;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100vw;
  align-items: center;
  height: calc(100vh - 150px);
  position: relative;

  ::before {
    position: absolute;
    content: "or";
    top: 50%;
    left: 50%;
    color: white;
    background: #00000a;
    line-height: 4rem;
    z-index: 10;
    font-size: 1.5rem;
    font-weight: 700;
    transform: translate(-50%, -50%);
  }

  ::after {
    position: absolute;
    width: 1px;
    background: white;
    left: 50%;
    top: 10%;
    height: 80%;
    content: "";
  }
`;

const Heading = styled(StyledHeader)`
  padding-top: 2rem;
  margin-bottom: 1rem;
  font-size: 2.5rem;
`;

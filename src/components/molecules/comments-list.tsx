import React from "react";
import { FaUserCircle } from "@react-icons/all-files/fa/FaUserCircle";
import styled from "styled-components";
import { RatingStars } from "../atoms/product/rating-stars";
import { CommentType } from "../../types/comment.type";

type CommentsListProps = {
  commentsList: Array<CommentType>;
};

export const CommentsList: React.FC<CommentsListProps> = ({ commentsList }) => {
  const GetTodayDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();

    return yyyy + "-" + mm + "-" + dd;
  };

  return (
    <div>
      {commentsList.length ? (
        commentsList.reverse().map((comment) => (
          <CommentContainer key={comment.id}>
            <AvatarWrapper>
              <Avatar />
            </AvatarWrapper>
            <ContentWrapper>
              <Username>{comment.authorName}</Username>
              <InfoWrapper>
                <StyledDate>
                  {comment.created_at
                    ? comment.created_at.slice(0, 10)
                    : GetTodayDate()}
                </StyledDate>
                <RatingStars
                  defaultRate={comment.points}
                  name="rating"
                  disabled
                />
              </InfoWrapper>
              <CommentContent>{comment.content}</CommentContent>
            </ContentWrapper>
          </CommentContainer>
        ))
      ) : (
        <p>
          Brak opinii, dodaj nową aby ułatwić podejmowanie decyzji innym
          użytkownikom
        </p>
      )}
    </div>
  );
};

const CommentContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
`;

const AvatarWrapper = styled.div`
  margin-right: 1rem;
`;

const Avatar = styled(FaUserCircle)`
  width: 2.5rem;
  height: 2.5rem;
  fill: #888;
`;

const Username = styled.p`
  font-weight: 700;
  opacity: 0.8;
  margin: 0;
`;

const StyledDate = styled.p`
  font-size: 0.7rem;
  margin: 0;
`;

const CommentContent = styled.p`
  line-height: 1.2rem;
`;

import React from "react";
import { FaUserCircle } from "@react-icons/all-files/fa/FaUserCircle";
import styled from "styled-components";
import { RatingStars } from "../atoms/product/rating-stars";
import { Comment } from "../../types/comment";

type CommentsListProps = {
  commentsList: Array<Comment>;
};

export const CommentsList: React.FC<CommentsListProps> = ({ commentsList }) => {
  return (
    <div>
      {commentsList.length ? (
        commentsList.map((comment) => (
          <CommentConatiner key={comment.id}>
            <AvatarWrapper>
              <Avatar />
            </AvatarWrapper>
            <ContentWrapper>
              <Username>{comment.authorName}</Username>
              <InfoWrapper>
                <Date>{comment.created_at.slice(0, 10)}</Date>
                <RatingStars
                  defaultRate={comment.points}
                  name="rating"
                  disabled
                />
              </InfoWrapper>
              <CommentContent>{comment.content}</CommentContent>
            </ContentWrapper>
          </CommentConatiner>
        ))
      ) : (
        <p>
          Brak opini, dodaj nową aby ułatwić podejmowanie decyzji innym
          użytkownikom
        </p>
      )}
    </div>
  );
};

const CommentConatiner = styled.div`
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

const Date = styled.p`
  font-size: 0.7rem;
  margin: 0;
`;

const CommentContent = styled.p`
  line-height: 1.2rem;
`;

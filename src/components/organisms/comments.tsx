import React, { useEffect, useState } from "react";
import { Comment } from "../../types/comment";
import { HeadingSection } from "../atoms/heading-section";
import { StyledWhitespace } from "../atoms/whitespace";
import { CommentsList } from "../molecules/comments-list";
import { AddComment } from "../molecules/forms/add-comment";

export const Comments = ({ productId }) => {
  const [commentsList, setCommentsList] = useState([]);

  useEffect(() => {
    fetch(`${process.env.API_URL}/comments/ekogroszek:${productId}`)
      .then((response) => response.json())
      .then((data) => setCommentsList(data));
  }, []);

  const addCommentHandler = (data: Comment) => {
    setCommentsList((props) => [...props, data]);
  };

  return (
    <>
      <CommentsList commentsList={commentsList} />
      <StyledWhitespace height={3} />
      <HeadingSection title="Dodaj własny" isSmall />
      <AddComment productId={productId} setComment={addCommentHandler} />
    </>
  );
};

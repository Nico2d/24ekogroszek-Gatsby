import React, { useEffect, useState } from "react";
import { CommentType } from "../../types/comment.type";
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

  const addCommentHandler = (data: CommentType) => {
    setCommentsList((props) => [...props, data]);
  };

  return (
    <>
      <AddComment productId={productId} setComment={addCommentHandler} />
      <StyledWhitespace height={5} />
      <CommentsList commentsList={commentsList} />
    </>
  );
};

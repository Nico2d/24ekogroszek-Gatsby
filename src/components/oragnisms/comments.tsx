import React, { useEffect, useState } from "react";
import { HeadingSection } from "../atoms/heading-section";
import { StyledWhitespace } from "../atoms/whitespace";
import { CommentsList } from "../molecules/comments-list";
import { AddComment } from "../molecules/forms/add-comment";

export const Comments = ({ prodcutId }) => {
  const [commentsList, setCommentsList] = useState([]);

  useEffect(() => {
    fetch(`${process.env.API_URL}/comments/ekogroszek:${prodcutId}`)
      .then((response) => response.json())
      .then((data) => setCommentsList(data));
  }, []);

  return (
    <>
      <CommentsList commentsList={commentsList} />
      <StyledWhitespace height={3} />
      <HeadingSection title="Dodaj własny" isSmall />
      <AddComment prodcutId={prodcutId} />
    </>
  );
};

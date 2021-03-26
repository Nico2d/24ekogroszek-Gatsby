import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Button } from "../../atoms/button";
import { BiError } from "@react-icons/all-files/bi/BiError";
import { BiCheckCircle } from "@react-icons/all-files/bi/BiCheckCircle";
import { StyledWhitespace } from "../../atoms/whitespace";
import { RatingStars } from "../../atoms/product/rating-stars";
import { device } from "../../../styles/breakpoints";
import { CommentType } from "../../../types/comment.type";

type AddCommentProps = {
  productId: number;
  setComment: (comment: CommentType) => void;
};

export const AddComment: React.FC<AddCommentProps> = ({
  productId,
  setComment,
}) => {
  const { register, errors, setError, handleSubmit, clearErrors } = useForm();

  const onSubmit = (data) => {
    fetch(`${process.env.API_URL}/comments/ekogroszek:${productId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        authorName: data.userNameComment,
        content: data.comment,
        points: data.rating,
        related: [
          {
            refId: productId,
            ref: "ekogroszek",
            field: "comments",
          },
        ],
        ekogroszek: {
          id: productId,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setComment(data);

        setError("success", {
          type: "manual",
          message: "Dziękujemy za dodanie komentarza",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInput
        name="userNameComment"
        ref={register({ required: true })}
        type="text"
        placeholder="Nazwa Użytkownika"
      />
      {errors.userNameComment && (
        <ErrorMessage>
          <Icon as={BiError} />
          Nazwa użytkownika jest wymagana.
        </ErrorMessage>
      )}
      <TextareaWrapper>
        <StyledTest>
          <RatingStars
            name="rating"
            register={register({
              required: true,
            })}
          />
        </StyledTest>

        <StyledTextarea
          rows={6}
          cols={50}
          name="comment"
          ref={register({
            required: true,
          })}
          placeholder="Tutaj zamieść swoją opinie..."
        />
      </TextareaWrapper>
      {errors.comment && (
        <ErrorMessage>
          <Icon as={BiError} />
          Pomóż innym w podjęciu decyzji. Dodając komentarz.
        </ErrorMessage>
      )}
      {errors.rating && (
        <ErrorMessage>
          <Icon as={BiError} />
          Pomóż innym w podjęciu decyzji. Dodając ocenę.
        </ErrorMessage>
      )}
      {errors.success && (
        <ErrorMessage success>
          <Icon as={BiCheckCircle} />
          {errors.success.message}
        </ErrorMessage>
      )}
      <StyledWhitespace height={1} />
      <Button
        type="submit"
        text="Dodaj opinie"
        disabled={Object.keys(errors).length !== 0}
      />
    </StyledForm>
  );
};
const StyledTest = styled.div`
  position: absolute;
  top: -2rem;
  right: 0;
`;

const TextareaWrapper = styled.div`
  position: relative;
  margin-top: 3rem;

  @media ${device.tablet} {
    margin-top: 0.5rem;
  }
`;

const Icon = styled.svg`
  margin: auto;
`;

const StyledForm = styled.form`
  display: flex;
  flex-flow: column;

  button {
    margin-left: auto;
  }
`;

const StyledInput = styled.input`
  background: ${({ theme }) => theme.colors.white};
  border: 1px ${({ theme }) => theme.colors.lineColor} solid;
  border-radius: 1rem;
  padding: 0.75rem 1rem;
  outline: none;
  max-width: 500px;
  font-weight: 500;

  :focus {
    border: 2px solid #f2994a;
  }
`;

const StyledTextarea = styled.textarea`
  background: ${({ theme }) => theme.colors.white};
  border: 1px ${({ theme }) => theme.colors.lineColor} solid;
  border-radius: 1rem;
  padding: 1rem;
  outline: none;
  width: 100%;
  font-family: "Montserrat", Tahoma, Arial, Helvetica, sans-serif;
  font-weight: 500;

  :focus {
    border: 2px solid #f2994a;
  }
`;

const ErrorMessage = styled.p<{ success?: boolean }>`
  color: ${({ success }) => (success ? "green" : "red")}; //red;
  display: inline-flex;

  > svg {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0;
    margin-right: 3px;
  }
`;

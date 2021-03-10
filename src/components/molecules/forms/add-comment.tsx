import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Button } from "../../atoms/button";
import { BiError } from "@react-icons/all-files/bi/BiError";
import { StyledWhitespace } from "../../atoms/whitespace";

export const AddComment = () => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInput
        name="userNameComment"
        ref={register({ required: true })}
        type="text"
        placeholder="Nazwa Użytkownika"
      />
      {errors.userNameComment && (
        <ErrorMessege>
          <Icon as={BiError} />
          Nazwa użytkownika jest wymagana
        </ErrorMessege>
      )}

      <StyledTextarea
        rows={6}
        cols={50}
        name="comment"
        ref={register({
          required: true,
        })}
        placeholder="Tutaj zamieść swoją opinie..."
      />
      {errors.comment && (
        <ErrorMessege>
          <Icon as={BiError} />
          Pomóż innym w podjęciu decyzji. Dodając komentarz
        </ErrorMessege>
      )}
      <StyledWhitespace height={1} />
      <Button
        type="submit"
        text="Dodaj opinie"
        disabled={errors.userNameComment}
      />
    </StyledForm>
  );
};

const Icon = styled.svg`
  margin: auto;
`;

const StyledForm = styled.form`
  display: flex;
  flex-flow: column;
`;

const StyledInput = styled.input`
  background: ${({ theme }) => theme.colors.white};
  border: 1px gray solid;
  border-radius: 1rem;
  padding: 0.75rem 1rem;
  outline: none;
  outline: none;

  :focus {
    border: 2px solid #f2994a;
  }
`;

const ErrorMessege = styled.p`
  color: red;
  display: inline-flex;

  > svg {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0;
    margin-right: 3px;
  }
`;

const StyledTextarea = styled.textarea`
  background: ${({ theme }) => theme.colors.white};
  border: 1px gray solid;
  border-radius: 1rem;
  padding: 1rem;
  margin-top: 1rem;
  outline: none;

  :focus {
    border: 2px solid #f2994a;
  }
`;

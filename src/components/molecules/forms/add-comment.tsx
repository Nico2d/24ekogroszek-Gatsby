import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Button } from "../../atoms/button";

export const AddComment = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInput
        name="userName"
        ref={register}
        type="text"
        placeholder="Nazwa Użytkownika"
      />

      <StyledTextarea
        rows={4}
        cols={50}
        name="comment"
        ref={register}
        placeholder="Tutaj zamieść swoją opinie..."
      />

      <Button type="submit" text="Dodaj opinie" disabled />
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-flow: column;
`;

const StyledInput = styled.input`
  background: ${({ theme }) => theme.colors.white};
  border: 1px gray solid;
  border-radius: 1rem;
  padding: 0.75rem 1rem;

  margin-bottom: 1rem;
`;

const StyledTextarea = styled.textarea`
  background: ${({ theme }) => theme.colors.white};
  border: 1px gray solid;
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;

  color: gray;
`;

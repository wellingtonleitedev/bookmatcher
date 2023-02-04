import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../";
import { HeaderWrapper } from "./Header.style";

interface IFormInput {
  search: string;
}

const Header: React.FC = () => {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit = (values: { search: string }) => {
    console.log({ values });
  };

  return (
    <HeaderWrapper>
      <section>
        <h1>Book Matcher</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="Name of a book"
            {...register("search")}
          />
        </form>
      </section>
    </HeaderWrapper>
  );
};

export default Header;

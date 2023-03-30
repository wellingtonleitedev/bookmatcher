import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Input from "../input/Input";

export interface IFormInput {
  search: string;
}

interface ISearchFormProps {
  onSubmit: (values: IFormInput) => void;
}

const formSchema = z.object({
  search: z.string().min(3).trim(),
});

const SearchForm: React.FC<ISearchFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: zodResolver(formSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Name of a book"
        errors={errors}
        {...register("search")}
      />
    </form>
  );
};

export default SearchForm;

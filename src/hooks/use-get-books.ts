import { useState } from "react";
import { api } from "@/config/api.config";
import { sanitizeBooks } from "@/sanitizers/book.sanitizer";
import { IBook } from "@/types/book.types";

export const useGetBooks = () => {
  const [books, setBooks] = useState<IBook[]>([]);

  const getBooks = async (values: { search: string }) => {
    const { search } = values;

    const { data } = await api.get("http://localhost:3000/api/books", {
      params: {
        search,
      },
    });

    return setBooks(sanitizeBooks(data.books));
  };

  return { books, getBooks };
};

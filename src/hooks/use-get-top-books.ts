import { useEffect, useState } from "react";
import { api } from "@/config/api.config";
import { sanitizeBooks } from "@/sanitizers/book.sanitizer";
import { IBook } from "@/types/book.types";

export const useGetTopBooks = (fetchOnMount = true) => {
  const [books, setBooks] = useState<IBook[]>([]);

  const getBooks = async (category?: string) => {
    const { data } = await api.get("http://localhost:3000/api/top-books", {
      params: {
        category,
      },
    });

    return setBooks(sanitizeBooks(data.books));
  };

  useEffect(() => {
    if (fetchOnMount) {
      getBooks();
    }
  }, [fetchOnMount]);

  return { books, getBooks };
};

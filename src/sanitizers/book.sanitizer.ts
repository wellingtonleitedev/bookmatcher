import { IBookResponse, IBook } from "@/types/book.types";

export const sanitizeBooks = (books: IBookResponse[]): IBook[] => {
  return books.map((book) => ({
    id: book.id,
    title: book.volumeInfo.title,
    subtitle: book.volumeInfo.subtitle,
    authors: book.volumeInfo.authors,
    publishedDate: book.volumeInfo.publishedDate,
    description: book.volumeInfo.description,
    pages: book.volumeInfo.pageCount,
    thumbnail: book.volumeInfo.imageLinks?.thumbnail,
  }));
};

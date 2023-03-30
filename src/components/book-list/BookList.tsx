import React from "react";
import Image from "next/image";
import { IBook } from "@/types/book.types";
import Title from "../title/Title";
import { Container, List } from "./BookList.style";

interface BookListProps {
  books: IBook[];
  category: string;
  ranked?: boolean;
}

const BookList: React.FC<BookListProps> = ({ books, category, ranked }) => {
  return (
    <Container>
      <Title as="h2">{category}</Title>
      <List type={ranked ? "ranked" : "default"} className="u-hide-scrollbar">
        {books.map((book, index) => (
          <li key={book.id}>
            {ranked && <span>{index + 1}</span>}
            <figure>
              <Image
                src={book.thumbnail}
                alt=""
                width={150}
                height={150}
                priority
              />
              <figcaption>{book.title}</figcaption>
            </figure>
          </li>
        ))}
      </List>
    </Container>
  );
};

export default BookList;

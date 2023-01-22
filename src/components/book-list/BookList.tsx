import React from "react";
import Image, { StaticImageData } from "next/image";
import { Container, List } from "./BookList.style";
import Title from "../title/Title";

interface IBook {
  id: number;
  img: StaticImageData | string;
  title: string;
}

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
              <Image src={book.img} alt="" width={200} height={200} priority />
              <figcaption>{book.title}</figcaption>
            </figure>
          </li>
        ))}
      </List>
    </Container>
  );
};

export default BookList;

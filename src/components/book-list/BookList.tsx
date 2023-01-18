import React from "react";
import Image, { StaticImageData } from "next/image";
import { List } from "./BookList.style";

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
    <>
      <h3>{category}</h3>
      <List type={ranked ? 'ranked' : 'default'} >
        {books.map((book, index) => (
          <li key={book.id}>
            {ranked && <span>{index + 1}</span>}
            <figure>
              <Image
                src={book.img}
                alt="13"
                width={200}
                height={200}
                priority
              />
              <figcaption>{book.title}</figcaption>
            </figure>
          </li>
        ))}
      </List>
    </>
  );
};

export default BookList;

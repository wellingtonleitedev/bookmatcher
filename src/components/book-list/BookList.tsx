import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Container } from './BookList.style';

interface IBook {
  id: number;
  img: StaticImageData | string;
  title: string;
}

interface BookListProps {
  books: IBook[];
  category: string;
}

const BookList: React.FC<BookListProps> = ({ books, category }) => {
  return (
    <>
      <h3>{category}</h3>
      <Container>
        {books.map((book, index) => (
          <li key={book.id}>
            <span>{index + 1}</span>
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
      </Container>
    </>
  );
}

export default BookList;
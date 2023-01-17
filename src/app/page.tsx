import React from "react";
import Book from "../assets/images/book.jpeg";
import BookList from "../components/book-list/BookList";

export default function App() {
  const books = [
    { id: 1, title: 'Clean Code', img: Book },
    { id: 2, title: 'Clean Code', img: Book },
    { id: 3, title: 'Clean Code', img: Book },
    { id: 4, title: 'Clean Code', img: Book },
    { id: 5, title: 'Clean Code', img: Book },
  ];

  return (
    <main>
      <h1>Book Match</h1>
      <input name="search" placeholder="Search"></input>
      <div>
        <h3>categories</h3>
        <ul style={{ display: "flex", gap: 20 }}>
          <li>frontend</li>
          <li>backend</li>
          <li>devops</li>
          <li>design</li>
          <li>ux</li>
        </ul>
      </div>
      <div>
        <BookList books={books} category="Top 10" />
      </div>
    </main>
  );
}

import Head from "next/head";
import React from "react";
import { useGetBooks, useGetTopBooks } from "@/hooks";
import { BookList, Categories, Header, SearchForm } from "@/components";

const App: React.FC = () => {
  const { books, getBooks } = useGetBooks();
  const { books: topBooks } = useGetTopBooks();

  return (
    <>
      <Head>
        <title>BookMatcher</title>
        <meta name="description" content="Find the right book for you" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="app-container">
        <SearchForm onSubmit={getBooks} />
        <Categories />
        <section>
          {!!topBooks?.length && (
            <BookList books={topBooks} category="Top 10" ranked />
          )}
          {!!books?.length && (
            <BookList books={books} category="Recommended for you" />
          )}
        </section>
      </main>
    </>
  );
};

export default App;

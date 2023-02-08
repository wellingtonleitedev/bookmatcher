import React from "react";
import SearchForm from "../search-form/SearchForm";
import { HeaderWrapper } from "./Header.style";

const Header: React.FC = () => (
  <HeaderWrapper>
    <section>
      <h1>Book Matcher</h1>
      <SearchForm />
    </section>
  </HeaderWrapper>
);

export default Header;

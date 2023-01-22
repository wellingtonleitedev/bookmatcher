import React from 'react';
import { Input } from '../';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Book Match</h1>
      <Input name="search" placeholder="Search" />
    </header>
  );
}

export default Header;
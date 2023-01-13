import Image from 'next/image';
import React from 'react';
import Book from '../../assets/images/book.jpeg'
import { List } from './Home.style';

const Home: React.FC = () => {
  return (
    <section >
      <h1>Book Match</h1>
      <input name="search" placeholder="Search"></input>
      <div>
        <h3>categories</h3>
        <ul style={{ display: 'flex', gap: 20 }} >
          <li>frontend</li>
          <li>backend</li>
          <li>devops</li>
          <li>design</li>
          <li>ux</li>
        </ul>
      </div>
      <div>
        <h3>Top 10 today</h3>
        <List>
          <li>
            <Image src={Book} alt="13"
              width={200}
              height={200}
              priority />
            <span>01</span>
          </li>
          <li>
            <Image src={Book} alt="13"
              width={200}
              height={200}
              priority />
            <span>02</span>
          </li>
          <li>
            <Image src={Book} alt="13"
              width={200}
              height={200}
              priority />
            <span>03</span>
          </li>
          <li>
            <Image src={Book} alt="13"
              width={200}
              height={200}
              priority />
            <span>04</span>
          </li>
          <li>
            <Image src={Book} alt="13"
              width={200}
              height={200}
              priority />
            <span>05</span>
          </li>
        </List>
      </div>
    </section>
  );
}

export default Home;
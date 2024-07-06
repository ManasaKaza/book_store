import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from './Card.js'
const Home = ({ handleClick }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/books')
      .then(response => {
        console.log(response.data.books);
        setBooks(response.data.books);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <section style={{ display: 'flex' }}>
      {
        books.map((item) => (
          <Card item={item} key={item._id} handleClick={handleClick} />
        ))
      }
    </section>

  );
};

export default Home;

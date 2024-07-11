import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from './Card.js';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query') || '';

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

  useEffect(() => {
    const filtered = books.filter(book => {
      const title = book.title ? book.title.toLowerCase() : '';
      const author = book.author ? book.author.toLowerCase() : '';
      return title.includes(query.toLowerCase()) || author.includes(query.toLowerCase());
    });
    setFilteredBooks(filtered);
  }, [books, query]);


  return (
    <div className="container mt-5">
      <div className='row row-cols-1 row-cols-md-5 g-4'>
        {
          filteredBooks.map(item => (
            <Card item={item} key={item._id} />
          ))
        }
      </div>
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from 'react';
import Card from './Card.js';
import { Link, useLocation } from 'react-router-dom';
import { Carousel, Button } from 'react-bootstrap';
import axios from 'axios';
import './Home.css';
import homeImage from '../assets/home_img.png';

const Home = ({ handleClick }) => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query') || '';

  useEffect(() => {
    axios.get('http://localhost:5000/api/books')
      .then(response => {
        setBooks(response.data.books);
        setFilteredBooks(response.data.books);
      })
      .catch(error => {
        console.error('Error fetching books:', error);
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

  const renderSlides = () => {
    const itemsPerSlide = 4;
    const slides = [];
    for (let i = 0; i < filteredBooks.length; i += itemsPerSlide) {
      slides.push(
        <Carousel.Item key={i}>
          <div className="container mt-5">
            <div className="row row-cols-1 row-cols-md-4 g-4">
              {filteredBooks.slice(i, i + itemsPerSlide).map(item => (
                <div className="col" key={item._id}>
                  <Card item={item} handleClick={handleClick} />
                </div>
              ))}
            </div>
          </div>
        </Carousel.Item>
      );
    }
    return slides;
  };

  return (
    <section>
      <div className="promo-container">
        <img src={homeImage} alt="Promo" className="img-fluid promo-image" />
        <div className="promo-overlay">
          <Button  variant="primary" className="promo-button">Buy a Book</Button>
          <Link to='/sell'><Button variant="secondary" className="promo-button">Sell a Book</Button></Link>
        </div>
      </div>

      <Carousel interval={null} controls={true} indicators={true}>
        {renderSlides()}
      </Carousel>
    </section>
  );
};

export default Home;

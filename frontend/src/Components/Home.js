import React, { useState, useEffect } from 'react';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import Card from './Card';
import './Home.css'; 
import homeImage from '../assets/home_img.png';

const Home = ({ handleClick }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/books')
      .then(response => {
        setBooks(response.data.books);
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, []);

  const renderSlides = () => {
    const itemsPerSlide = 4; // Adjust this number based on your design needs

    const slides = [];
    for (let i = 0; i < books.length; i += itemsPerSlide) {
      slides.push(
        <Carousel.Item key={i}>
          <Container>
            <Row>
              {books.slice(i, i + itemsPerSlide).map(item => (
                <Col key={item._id}>
                  <Card item={item} handleClick={handleClick} />
                </Col>
              ))}
            </Row>
          </Container>
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
          <Button variant="primary" className="promo-button">Buy a Book</Button>
          <Button variant="secondary" className="promo-button">Sell a Book</Button>
        </div>
      </div>

      <Carousel interval={null} controls={true} indicators={true}>
        {renderSlides()}
      </Carousel>
    </section>
  );
};

export default Home;

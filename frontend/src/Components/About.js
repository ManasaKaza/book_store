import React from 'react';

const About = () => {
  return (
    <div className="container mt-4">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>About BookStore</h2>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
        Welcome to BookStore, your ultimate destination for all things books! At BookStore, we are passionate about bringing literature enthusiasts together and providing a seamless experience in discovering, purchasing, and selling books.
      </p>

      <h3 style={{ fontSize: '2rem', marginTop: '2rem', marginBottom: '1rem' }}>Our Mission</h3>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
        To connect book lovers worldwide and foster a community that celebrates the joy of reading.
      </p>

      <h3 style={{ fontSize: '2rem', marginTop: '2rem', marginBottom: '1rem' }}>What We Offer</h3>
      <ul style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
        <li><strong>Wide Selection:</strong> Explore a vast collection of books across genres, from classics to contemporary bestsellers.</li>
        <li><strong>Easy Buying and Selling:</strong> Whether you're looking to expand your personal library or sell books you've cherished, BookStore simplifies the process.</li>
        <li><strong>Community Engagement:</strong> Join discussions, share recommendations, and connect with fellow readers who share your interests.</li>
      </ul>

      <h3 style={{ fontSize: '2rem', marginTop: '2rem', marginBottom: '1rem' }}>Why Choose Us?</h3>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
        At BookStore, we strive to enhance your reading journey by combining technology with a love for books. Our platform is designed to be user-friendly, ensuring that every visit leaves you inspired and excited about the world of literature.
      </p>

      <h3 style={{ fontSize: '2rem', marginTop: '2rem', marginBottom: '1rem' }}>Contact Us</h3>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
        Have questions or feedback? We'd love to hear from you! Reach out to our support team at <a href="mailto:contact@bookstore.com">contact@bookstore.com</a> or visit our Help Center for assistance.
      </p>

      <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
        Thank you for being a part of the BookStore community!
      </p>
    </div>
  );
};

export default About;

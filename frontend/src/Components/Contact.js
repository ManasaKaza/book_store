import React from 'react';

const Contact = () => {
  return (
    <div className="container mt-4">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Contact Us</h2>

      <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
        Have questions, suggestions, or feedback? We'd love to hear from you! Please reach out to us through one of the following channels:
      </p>

      <h3 style={{ fontSize: '2rem', marginTop: '2rem', marginBottom: '1rem' }}>Email</h3>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
        Send us an email at <a href="mailto:contact@bookstore.com">contact@bookstore.com</a> and our team will get back to you as soon as possible.
      </p>

      <h3 style={{ fontSize: '2rem', marginTop: '2rem', marginBottom: '1rem' }}>Customer Support</h3>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
        For assistance with orders, account issues, or any other inquiries, visit our <a href="/help">Help Center</a> or contact our customer support team directly at <a href="tel:+1234567890">+1 (234) 567-890</a>.
      </p>

      <h3 style={{ fontSize: '2rem', marginTop: '2rem', marginBottom: '1rem' }}>Social Media</h3>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
        Stay connected and engaged with us on social media:
        <ul style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
          <li><a href="https://facebook.com/bookstore" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com/bookstore" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://instagram.com/bookstore" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </p>

      <h3 style={{ fontSize: '2rem', marginTop: '2rem', marginBottom: '1rem' }}>Visit Us</h3>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
        If you prefer in-person assistance or have specific queries, visit our headquarters at:
        <br />
        BookStore Headquarters<br />
        123 Book Lover's Lane<br />
        City, State ZIP<br />
        Country
      </p>

      <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
        We look forward to hearing from you and serving your book-related needs!
      </p>
    </div>
  );
};

export default Contact;

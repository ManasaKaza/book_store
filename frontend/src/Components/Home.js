import axios from "axios";
import React, { useState, useEffect } from "react";

const DataComponent = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/books")
      .then((response) => {
        console.log(response.data.books);
        setBooks(response.data.books);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div style={{ display: "flex" }}>
      {books.map((item) => (
        <div style={{ margin: "20px" }} key={item._id} className="ui card">
          <div className="image">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="content">
            <div className="header">{item.title}</div>
            <div className="description">Authors:{item.authors}</div>
          </div>
          <div className="image">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="content">
            <div className="header">{item.title}</div>
            <div className="description">Authors:{item.authors}</div>
          </div>
          <div className="image">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="content">
            <div className="header">{item.title}</div>
            <div className="description">Authors:{item.authors}</div>
          </div>
          <div className="image">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="content">
            <div className="header">{item.title}</div>
            <div className="description">Authors:{item.authors}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataComponent;

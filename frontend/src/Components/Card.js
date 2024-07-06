import React from 'react';

const Card = ({ item, handleClick }) => {
  return (
      <div  style={{ marginLeft: '20px' }} className="ui cards">
        <div className="image">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="content">
          <div className="header">{item.title}</div>
          <div className="description">by {item.authors}</div>
          <div className="description">Price: {item.price}</div>
        </div>
        <hr></hr>
        <div>
          <button className="ui grey basic button" onClick={() => handleClick(item)}>
            Add to Cart
          </button>
        </div>
      </div>
  );
}

export default Card;

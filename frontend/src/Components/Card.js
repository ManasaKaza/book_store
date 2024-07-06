import React from 'react';

const Card = ({ item, handleClick }) => {
  return (
    <div style={{ margin: '20px' }} key={item._id} className="ui card">
      <div className="image">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="content">
        <div className="header">{item.title}</div>
        <div className="description">by {item.authors}</div>
        <div className="description">Price: {item.price}</div>
      </div>
      <button onClick={() => handleClick(item)}>
        Add to Cart
      </button>
    </div>    
  );
}

export default Card;

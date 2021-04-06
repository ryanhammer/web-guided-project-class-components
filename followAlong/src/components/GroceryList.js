import React from "react";

import Item from "./Item";

const GroceryList = props => {
  // for sorting the list based on whether an item has been purchased or not
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);

  const handleClick = () => {
    props.clearPurchased();
  }
  
  return (
    <div className="shopping-list">
      {props.groceries.map(item => (
        <Item toggleItem = { props.toggleItem } key={item.id} item={item} />
      ))}
      <button onClick={ handleClick } className="clear-btn">
        Clear Purchased
      </button>
    </div>
  );
};

export default GroceryList;
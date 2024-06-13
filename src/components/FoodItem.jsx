import React, { useState } from "react";
import { assets } from "../assets/assets";

const FoodItem = ({ id, name, price, description, image }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const addToCart = () => {
    // Logic to add the item with the quantity to the cart
    console.log(`Added ${quantity} of ${name} to cart.`);
  };

  return (
    <div className="food-item p-4 border border-gray-200 rounded-lg shadow-lg" id={id}>
      <div className="container mx-auto">
        <div className="food-item-image-container p-5">
          <img className="food-item-image w-full h-auto rounded-lg" src={image} alt={name} />
        </div>
        <div className="food-item-info p-5">
          <div className="food-item-name-raiting flex items-center justify-between mb-4">
            <h2 className="font-bold text-slate-900 text-xl">{name}</h2>
            <img src={assets.rating_starts} alt="Rating" className="h-6 w-auto" />
          </div>
          <p className="food-item-descc text-gray-700 mb-2">{description}</p>
          <p className="food-item-price font-bold text-lg text-orange-600">{price}</p>

          <div className="quantity-counter mt-4 flex items-center space-x-4">
            <button
              className="decrease-btn border border-gray-300 px-3 py-1 rounded-lg text-gray-700 hover:bg-gray-200"
              onClick={decreaseQuantity}
            >
              -
            </button>
            <span className="quantity text-lg font-medium">{quantity}</span>
            <button
              className="increase-btn border border-gray-300 px-3 py-1 rounded-lg text-gray-700 hover:bg-gray-200"
              onClick={increaseQuantity}
            >
              +
            </button>
          </div>

          <button
            className="add-to-cart-btn mt-4 px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-lg "
            onClick={addToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;

import { useState } from "react";

export const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState({
    reactCourse: 0,
    vueCourse: 0,
  });

  const prices = {
    reactCourse: 49.99,
    vueCourse: 59.99,
  };

  const handleAddReactCourse = () => {
    if (cartItems.reactCourse < 5) {
      setCartItems({
        ...cartItems,
        reactCourse: cartItems.reactCourse + 1,
      });
    }
  };

  const handleAddVueCourse = () => {
    setCartItems({
      ...cartItems,
      vueCourse: cartItems.vueCourse + 1,
    });
  };

  const clearCart = () => {
    setCartItems({
      reactCourse: 0,
      vueCourse: 0,
    });
  };

  return (
    <div>
      <h2>Shopping cart component</h2>
      <ProductCard
        name="React Course"
        price={prices.reactCourse}
        quantity={cartItems.reactCourse}
        onAddToCart={handleAddReactCourse}
      />
      <ProductCard
        name="Vue Course"
        price={prices.vueCourse}
        quantity={cartItems.vueCourse}
        onAddToCart={handleAddVueCourse}
      />
      <CartSummary
        cartItems={cartItems}
        prices={prices}
        clearCart={clearCart}
      />
    </div>
  );
};

export const ProductCard = ({ name, price, quantity, onAddToCart }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>${price}</p>
      <p>Quantity: {quantity}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
};

export const CartSummary = ({ cartItems, prices, clearCart }) => {
  const totalItems = cartItems.reactCourse + cartItems.vueCourse;

  const totalPrice =
    cartItems.reactCourse * prices.reactCourse +
    cartItems.vueCourse * prices.vueCourse;

  return (
    <div>
      <h3>Cart Summary</h3>
      <p>Total items: {totalItems}</p>
      <p>Total price: ${totalPrice}</p>
      <button onClick={clearCart}>Reset Cart</button>
    </div>
  );
};

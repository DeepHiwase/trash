export const Product = ({ title, price, inStock, categories }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>Price: ${price}</p>
      <p>In stock: {inStock ? "Yes" : "No"}</p>
      {inStock && <h3>Hurreh!!!</h3>}
      <p>Categories: {categories.join(", ")}</p>
    </div>
  );
};

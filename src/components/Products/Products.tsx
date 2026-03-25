import { useState } from "react";

const initialProducts = [
  {
    id: 1,
    name: "Baklava",
    count: 6,
  },
  {
    id: 2,
    name: "Cheese",
    count: 3,
  },
  {
    id: 3,
    name: "Spaghetti",
    count: 2,
  },
];
function Products() {
  const [shoppingCart, setShoppingCart] = useState(initialProducts);
  const handleIncreaseClick = (id: number) => {
    const products = shoppingCart.map((product) => {
      if (product.id === id) {
        return { ...product, count: product.count + 1 };
      }
      return product;
    });
    setShoppingCart(products);
  };

  const handleDecreaseClick = (id: number) => {
    setShoppingCart((products) =>
      products
        .map((product) =>
          product.id === id
            ? { ...product, count: product.count - 1 }
            : product,
        )
        .filter((product) => product.count > 0),
    );
  };

  return (
    <>
      <ul>
        {shoppingCart.map((product) => (
          <li key={product.id}>
            {product.name} : {product.count}
            <button
              style={{ width: "20px", marginLeft: "20px" }}
              onClick={() => handleIncreaseClick(product.id)}
            >
              +
            </button>
            <button
              style={{ width: "20px", marginLeft: "10px" }}
              onClick={() => handleDecreaseClick(product.id)}
            >
              -
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Products;

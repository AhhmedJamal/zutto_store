import { useEffect, useState } from "react";
import Product from "./Product";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  return (
    <div className=" mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:mx-0 mx-2 pb-3">
      {products.map(({ id, title, price, rating, thumbnail, description }) => {
        return (
          <Product
            key={id}
            img={thumbnail}
            title={title}
            description={description}
            rating={rating}
            price={price}
          />
        );
      })}
    </div>
  );
};

export default ProductList;

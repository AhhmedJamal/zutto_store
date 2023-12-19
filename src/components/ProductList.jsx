import { useEffect, useState } from "react";
import Product from "../components/Product";
import Shimmer from "./Shimmer";
import CarouselDefault from "./Carousel";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  return (
    <>
      <CarouselDefault />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:mx-0  pb-3 m-2">
        {products.length !== 0 ? (
          products.map((product) => {
            return <Product key={product.id} product={product} />;
          })
        ) : (
          <>
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
          </>
        )}
      </div>
    </>
  );
};

export default ProductList;

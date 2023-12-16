import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import Shimmer from "../components/Shimmer";

const CategoryPage = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${name}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, [name]);

  return (
    <div className="  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:mx-0  pb-3 mt-2">
      {products.length !== 0 ? (
        products.map(({ id, title, price, rating, thumbnail, description }) => {
          return (
            <Product
              id={id}
              key={id}
              img={thumbnail}
              title={title}
              description={description}
              rating={rating}
              price={price}
            />
          );
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
  );
};

export default CategoryPage;

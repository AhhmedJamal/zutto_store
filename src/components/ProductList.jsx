import { useEffect, useState } from "react";
import Product from "../components/Product";
import Shimmer from "./Shimmer";
import CarouselDefault from "./Carousel";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const CollectionsRef = collection(db, "/phones");
  const getData = async () => {
    const data = await getDocs(CollectionsRef);
    setProducts(data?.docs?.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

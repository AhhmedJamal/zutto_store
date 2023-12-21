import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import Shimmer from "../components/Shimmer";
import CarouselDefault from "../components/Carousel";
import { getFromLocal } from "../store/cart/cartSlice";
import { useDispatch } from "react-redux";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
const CategoryPage = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const CollectionsRef = collection(db, `/${name}`);
  const getData = async () => {
    const data = await getDocs(CollectionsRef);
    setProducts(data?.docs?.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getData();
    const items = JSON.parse(localStorage.getItem("shoppingCart")) || {};
    dispatch(getFromLocal(items));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, dispatch]);

  return (
    <>
      <CarouselDefault />
      <div className="  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:mx-0  pb-3 m-2">
        {products.length !== 0 ? (
          products.map((product) => {
            return <Product key={product.id} product={product} />;
          })
        ) : (
          <>
            <Shimmer is={false} />
            <Shimmer is={false} />
            <Shimmer is={false} />
            <Shimmer is={false} />
            <Shimmer is={false} />
            <Shimmer is={false} />
            <Shimmer is={false} />
            <Shimmer is={false} />
          </>
        )}
      </div>
    </>
  );
};

export default CategoryPage;

import { useEffect } from "react";
import ProductList from "../components/ProductList";
import { useDispatch } from "react-redux";
import { getFromLocal } from "../store/cart/cartSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("shoppingCart")) || {};
    dispatch(getFromLocal(items));
  }, [dispatch]);
  return (
    <section>
      <ProductList />
    </section>
  );
};

export default Home;

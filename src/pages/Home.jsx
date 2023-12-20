import { useEffect } from "react";
import ProductList from "../components/ProductList";

const Home = () => {
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("shoppingCart")) || {};
    console.log(items);
    // addToCart(items);
  }, []);
  return (
    <section>
      <ProductList />
    </section>
  );
};

export default Home;

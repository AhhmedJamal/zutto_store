import { useSelector } from "react-redux";
import CartEmpty from "../assets/emptyCart.svg";

import CartProduct from "../components/CartProduct";

const Cart = () => {
  function calculateTotalPrice(cart) {
    // Ensure that the cart is not empty
    if (!cart || cart.length === 0) {
      return 0;
    }

    // Calculate the total price without considering quantity
    const totalPrice = cart.reduce((accumulator, item) => {
      const itemPrice = item.price || 0; // Assuming each item has a 'price' property
      const itemDiscountPercentage = item.discountPercentage || 0; // Assuming each item has a 'discountPercentage' property, default to 0 if not present

      const discountedPrice = itemPrice * (1 - itemDiscountPercentage / 100);
      return accumulator + discountedPrice;
    }, 0);

    return totalPrice;
  }
  function getPricesFromProducts(products, price) {
    return products.reduce((total, product) => {
      const propertyValue = product && product[price] ? product[price] : 0;
      return total + propertyValue;
    }, 0);
  }
  const cart = useSelector((state) => state.cart.items);
  const totalWithDiscount = calculateTotalPrice(cart);
  const total = getPricesFromProducts(cart, "price");

  return (
    <div>
      {cart.length !== 0 ? (
        <div className="  grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:mx-0  pb-3 mt-2">
          {cart.map(({ id, title, price, thumbnail, discountPercentage }) => {
            return (
              <CartProduct
                id={id}
                key={id}
                img={thumbnail}
                title={title}
                price={price}
                discount={discountPercentage}
              />
            );
          })}
          <div className="bg-white p-2 border-2">
            total: ${totalWithDiscount.toFixed(0)}{" "}
            <del className="text-gray-600 text-[13px]">${total}</del>
          </div>
          <button className="bg-primary text-white p-1 rounded-md">
            CheckOut
          </button>
        </div>
      ) : (
        <div className="flex flex-col  items-center justify-center h-[60vh] m-auto">
          <img src={CartEmpty} alt="cart" className="w-[200px]  " />
          <p className="font-bold text-[17px]">Your cart is empty !!</p>
        </div>
      )}
    </div>
  );
};

export default Cart;

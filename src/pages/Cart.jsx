import CartEmpty from "../assets/emptyCart.svg";

const Cart = () => {
  return (
    <div className="flex flex-col  items-center justify-center h-[60vh] m-auto">
      <img src={CartEmpty} alt="cart" className="w-[200px]  " />
      <p className="font-bold text-[17px]">Your cart is empty !!</p>
    </div>
  );
};

export default Cart;

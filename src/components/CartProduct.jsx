import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/cart/cartSlice";

// eslint-disable-next-line react/prop-types
const CartProduct = ({ id, img, title, price, discount }) => {
  const dispatch = useDispatch();
  const calculateDiscountedPrice = (originalPrice, discountPercentage) => {
    const discountAmount = (originalPrice * discountPercentage) / 100;
    const discountedPrice = originalPrice - discountAmount;
    return parseFloat(discountedPrice).toFixed(0);
  };
  return (
    <div className="h-[80px] flex items-center overflow-hidden   justify-between bg-white border">
      <img
        src={img}
        alt="img-product"
        className=" w-[120px] object-cover border-r"
      />

      <div className="flex flex-col justify-around">
        <h1 className="overflow-hidden line-clamp-2 w-[110px]">{title}</h1>
        <p>
          ${calculateDiscountedPrice(price, discount)}{" "}
          <del className="text-gray-600 text-[12px]">${price} </del>
        </p>
      </div>
      <button
        className="h-fit mr-3"
        onClick={() => dispatch(removeFromCart({ id: id }))}
      >
        <img
          width={25}
          src="https://www.svgrepo.com/show/511109/remove-minus-circle.svg"
          alt="icon-remove"
        />
      </button>
    </div>
  );
};

export default CartProduct;

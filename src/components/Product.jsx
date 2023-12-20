import { Card, CardBody } from "@material-tailwind/react";
import { FaRegEye } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { MdOutlineFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart/cartSlice";
// eslint-disable-next-line react/prop-types
const Product = ({ product }) => {
  // eslint-disable-next-line react/prop-types
  const { id, thumbnail, price, rating, description } = product;

  const [mark, setMark] = useState(false);
  const router = useNavigate();
  const dispatch = useDispatch();

  const handleFav = () => {
    setMark((pre) => !pre);
  };

  return (
    <Card
      className="
    rounded-none overflow-hidden hover:scale-95 shadow-md relative flex 
    justify-between transition duration-300 bg-white hover:bg-dark-100 text-black
     hover:text-white group  h-[250px]"
    >
      <div className="absolute right-[-55px] group-hover:right-0 transition-all bg-primary  rounded-tl rounded-bl  text-white p-3 flex flex-col">
        <button
          onClick={() => {
            dispatch(addToCart(product));
          }}
        >
          <FaCartPlus size={25} className="mb-5" />
        </button>
        <button
          onClick={() => {
            router(`${`product/${id}`}`);
          }}
        >
          <FaRegEye size={25} className="mb-5" />
        </button>
        <button onClick={handleFav}>
          {mark ? (
            <MdOutlineFavorite size={25} />
          ) : (
            <MdFavoriteBorder size={25} />
          )}
        </button>
      </div>
      <img
        src={thumbnail}
        alt="card-image"
        className=" w-full h-[120px] object-cover "
      />

      <CardBody className="p-4">
        <p className="mb-2 text-[11px] text-gray-600 overflow-hidden line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between mt-2d">
          <div>
            <span className="font-normal text-[11px]">$</span>
            <span className="font-[800] ">{price}</span>
          </div>
          <div className="flex items-center  px-[6px] p-[1px] rounded">
            <span className="text-[13px] font-bold mr-1">{rating}</span>
            <GoStarFill className="text-orange-400" />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default Product;

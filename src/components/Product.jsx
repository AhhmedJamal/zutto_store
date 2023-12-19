import { Card, CardBody } from "@material-tailwind/react";
import { FaRegEye } from "react-icons/fa";
import { IoAddOutline } from "react-icons/io5";
import { GoStarFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart/cartSlice";
// eslint-disable-next-line react/prop-types
const Product = ({ product }) => {
  // eslint-disable-next-line react/prop-types
  const { id, thumbnail, title, price, rating, description } = product;

  const [mark, setMark] = useState(false);
  const router = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {}, []);

  return (
    <Card
      className="
    rounded-none overflow-hidden hover:scale-95 shadow-md relative flex 
    justify-between transition duration-300 hover:bg-dark-100 text-black
     hover:text-white "
    >
      <div className="absolute right-0 bg-teal-100 p-1 flex flex-col">
        <button
          onClick={() => {
            dispatch(addToCart(product));
          }}
        >
          <IoAddOutline size={25} className="mb-5 text-black" />
        </button>
        <button>
          <FaRegEye size={25} className="text-black" />
        </button>
      </div>
      <img
        src={thumbnail}
        alt="card-image"
        className=" w-full h-[120px] object-cover "
      />

      <CardBody className="p-3">
        <h1 className="mb-2 font-bold text-[13px] ">{title}</h1>
        <p className="mb-2 text-[11px] text-gray-500 overflow-hidden line-clamp-2">
          {description}
        </p>
        <>
          <span className="font-normal text-[11px]">$</span>
          <span className="font-[800] ">{price}</span>
        </>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center  px-[6px] p-[1px] rounded">
            <span className="text-[13px] font-bold mr-1">{rating}</span>
            <GoStarFill className="text-orange-400" />
          </div>
          {rating > 4.3 && (
            <button
              className="hover:scale-125 transition-all m-1"
              onClick={() => setMark((pre) => !pre)}
            >
              {mark ? <FaBookmark size={25} /> : <FaRegBookmark size={25} />}
            </button>
          )}
        </div>

        <button
          onClick={() => {
            router(`${`product/${id}`}`);
          }}
          className="bg-gray-200 text-[12px] w-full text-primary font-bold p-1 pb-[3px] mt-2 rounded-md "
        >
          Details
        </button>
      </CardBody>
    </Card>
  );
};

export default Product;

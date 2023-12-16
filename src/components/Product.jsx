import { Card, CardBody } from "@material-tailwind/react";
import Star from "../assets/star.png";
import { useDispatch } from "react-redux";
import { openModel } from "../store/model/modelSlice";

// eslint-disable-next-line react/prop-types
const Product = ({ id, img, title, price, rating, description }) => {
  const dispatch = useDispatch();

  return (
    <Card className="rounded-none shadow-md relative flex justify-between">
      <img
        src={img}
        alt="card-image"
        className=" w-full h-[120px] object-cover"
      />

      <CardBody className="p-3">
        <h1 className="mb-2 font-bold text-[13px] text-black">{title}</h1>
        <p className="mb-2 text-[11px] text-gray-500 overflow-hidden line-clamp-2">
          {description}
        </p>
        <>
          <span className="font-normal text-[11px]">$</span>
          <span className="font-[800] text-black">{price}</span>
        </>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center  px-[6px] p-[1px] rounded">
            <span className="text-[13px] font-bold">{rating}</span>
            <img src={Star} alt="Star" className="w-3 ml-1" />
          </div>
          {rating > 4.3 && (
            <div className="bg-primary text-white px-[4px] py-[2px] pt-[1px] rounded text-[10px] text-center w-fit">
              express
            </div>
          )}
        </div>
        <button
          onClick={() => {
            dispatch(openModel({ show: true, id: id }));
          }}
          className="bg-gray-200 text-[12px] text-primary font-bold p-1 pb-[3px] mt-2 rounded-md  w-full"
        >
          Details
        </button>
      </CardBody>
    </Card>
  );
};

export default Product;

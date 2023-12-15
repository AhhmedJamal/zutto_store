import { Card, CardBody } from "@material-tailwind/react";
import Star from "../assets/star.png";
import { useDispatch } from "react-redux";
import { closeModel } from "../store/model/modelSlice";

// eslint-disable-next-line react/prop-types
const Product = ({ img, title, price, rating, description }) => {
  // const model = useSelector((state) => state.model.show);
  const dispatch = useDispatch();

  return (
    <Card className="rounded-none shadow-md relative ">
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
            <div className="bg-primary text-white px-[3px] py-[1.5px] rounded-md text-[7px] text-center w-fit">
              express
            </div>
          )}
        </div>
      </CardBody>

      <button
        onClick={() => {
          dispatch(closeModel(true));
        }}
        className="bg-gray-200 text-[11px] text-primary font-bold pt-[3px] rounded-md m-2"
      >
        Details
      </button>
    </Card>
  );
};

export default Product;

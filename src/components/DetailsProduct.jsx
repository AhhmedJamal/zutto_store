import { Carousel, IconButton } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Star from "../assets/star.png";
import { closeModel } from "../store/model/modelSlice";
import { addToCart } from "../store/cart/cartSlice";
const DetailsProduct = () => {
  const [products, setProducts] = useState({});
  const id = useSelector((state) => state.model.id);
  const dispatch = useDispatch();
  const calculateDiscountedPrice = (originalPrice, discountPercentage) => {
    const discountAmount = (originalPrice * discountPercentage) / 100;
    const discountedPrice = originalPrice - discountAmount;
    return parseFloat(discountedPrice).toFixed(0);
  };

  const handleCart = () => {
    dispatch(closeModel({ show: false }));
    dispatch(addToCart(products));
  };
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [id]);

  return (
    <div>
      <Carousel
        className="rounded-xl h-[300px]"
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className={`!absolute top-2/4 left-4 -translate-y-2/4  ${
              products?.images?.length == 1 && "hidden"
            }`}
          >
            <svg
              className="w-6 h-6 text-primary dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className={`!absolute top-2/4 !right-4 -translate-y-2/4 ${
              products?.images?.length == 1 && "hidden"
            }`}
          >
            <svg
              className="w-6 h-6 text-primary dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
              />
            </svg>
          </IconButton>
        )}
        loop={true}
      >
        {products.images?.map((item, index) => {
          return (
            <img
              key={index}
              src={item}
              alt="image 1"
              className="h-full w-full"
            />
          );
        })}
      </Carousel>
      <h1 className="font-bold text-[20px]">{products.title}</h1>
      <p>
        ${calculateDiscountedPrice(products.price, products.discountPercentage)}{" "}
        <del className="text">${products.price} </del>
      </p>

      <p>brand:{products.brand}</p>
      <p>
        stock:
        <span
          className={`${
            products.stock > 20 ? "text-light-blue-500" : "text-red-500"
          }`}
        >
          {products.stock}
        </span>
      </p>
      <div className="flex items-center ">
        <p className="text-[20px] pt-[1px] mr-2">{products.rating}</p>
        <img src={Star} alt="img-star" width={25} />
      </div>
      <p className="text-gray-600 text-[15px]">{products.description}</p>
      <button
        onClick={handleCart}
        className="bg-primary w-full text-white rounded-md my-3 p-2"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default DetailsProduct;

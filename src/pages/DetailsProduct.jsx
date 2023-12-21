import { Carousel, IconButton } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GoStarFill } from "react-icons/go";
import { addToCart, getFromLocal } from "../store/cart/cartSlice";
import { useParams, useNavigate } from "react-router-dom";
import ShimmerDetails from "../components/Shimmer";
import { IoMdArrowBack } from "react-icons/io";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
const DetailsProduct = () => {
  const [products, setProducts] = useState({});
  const router = useNavigate();
  const { id, name } = useParams();
  const dispatch = useDispatch();

  const handleCart = () => {
    dispatch(addToCart(products));
  };

  const CollectionsRef = collection(db, name, id);
  console.log(collection);
  const getData = async () => {
    const data = await getDocs(CollectionsRef);

    if (data.exists()) {
      const data = data.data();
      setProducts(data);
    }
  };
  useEffect(() => {
    console.log(products);
    getData();
    const items = JSON.parse(localStorage.getItem("shoppingCart")) || {};
    dispatch(getFromLocal(items));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, dispatch]);

  return (
    <>
      <IoMdArrowBack
        size={30}
        className=" m-4 self-start"
        onClick={() => {
          router(-1);
        }}
      />
      {products.length !== 0 ? (
        <div>
          <div className="p-3  pt-0 mt-4 lg:flex lg:justify-evenly items-center lg:mt-[10px]  ">
            <Carousel
              className="rounded-xl  w-full h-[200px] bg-reds-300 lg:w-[600px] mb-3"
              navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-1 left-2/4  flex -translate-x-2/4 gap-2">
                  {new Array(length).fill("").map((_, i) => (
                    <span
                      key={i}
                      className={`block h-[4px] cursor-pointer rounded-2xl transition-all content-['']  ${
                        activeIndex === i ? "w-4 bg-primary" : "w-4 bg-gray-400"
                      }`}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
              )}
              prevArrow={({ handlePrev }) => (
                <IconButton
                  variant="text"
                  color="white"
                  size="lg"
                  onClick={handlePrev}
                  className={`!absolute top-2/4 left-0 lg:!left-2  -translate-y-2/4  ${
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
                  className={`!absolute top-2/4 !right-0 lg:!right-6  -translate-y-2/4 ${
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
                    className="h-full  m-auto"
                  />
                );
              })}
            </Carousel>
            <div className="lg:w-[300px]  p-4  pb-0 rounded ">
              <h1 className="font-bold text-[20px]">{products.brand}</h1>
              <p className="text-gray-600 text-[12px] lg:text-[15px] leading-4 line-clamp-none my-2">
                {products.description}
              </p>
              <p className="text-[13px] lg:text-[20px] ">
                $ <del>${products.price} </del>
              </p>

              <p className="text-[12px]">
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
                <p className="text-[16px] pt-[2px] mr-2">{products.rating}</p>
                <GoStarFill className="text-orange-400" />
              </div>

              <button
                onClick={handleCart}
                className="bg-primary w-full text-white rounded-md my-3 p-1"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-5 lg:p-0">
          <ShimmerDetails is={true} />
        </div>
      )}
    </>
  );
};

export default DetailsProduct;

import { NavLink } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { BsShopWindow } from "react-icons/bs";
import { BsBox2 } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { MdOutlineDoneOutline } from "react-icons/md";
import { useEffect, useState } from "react";
import GetData from "../hooks/getData";
const BottomBar = () => {
  const [favorites, setFavorites] = useState([]);
  const { products, getData } = GetData("favorites");
  useEffect(() => {
    getData();
    setFavorites(products);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);
  return (
    <ul className="z-20 md:hidden fixed bottom-0 btnBar bg-white border-t text-gray-900 border-gray-300 w-full pl-2 container flex justify-around items-center  h-[70px] pb-3 [box-shadow:0px_-1px_10px_0px_rgba(32,_32,_32,_0.176)]">
      <NavLink
        to="/"
        className="text-[10px] font-bold flex flex-col justify-center items-center mt-2 mx-3"
      >
        <BsShopWindow size={25} />
        Shop
      </NavLink>
      <NavLink
        to="orders"
        className="text-[10px] font-bold flex flex-col justify-center items-center mt-[12px] ml-3 relative"
      >
        <BsBox2 className="mb-[2px]" size={22} />
        <MdOutlineDoneOutline className="mb-[2px] absolute top-2" size={12} />
        Orders
      </NavLink>
      <NavLink
        to="favorites"
        className="text-[10px] font-bold flex flex-col justify-center items-center mt-2 mx-3 relative group "
      >
        <MdFavoriteBorder size={25} />
        {favorites.length !== 0 && (
          <span
            className={`transition-all ${
              products.length !== 0
                ? "group-hover:scale-0"
                : "group-hover:scale-100"
            } w-2 h-2 flex items-center  pt-[2px] justify-center rounded-full bg-primary text-white z-10 absolute top-[1px] right-[6px]`}
          ></span>
        )}
        Favorite
      </NavLink>
      <NavLink
        to="account"
        className="text-[10px] font-bold flex flex-col justify-center items-center mt-2 mx-3"
      >
        <BsPerson size={25} />
        Account
      </NavLink>
    </ul>
  );
};

export default BottomBar;
// x

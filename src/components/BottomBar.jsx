import { NavLink } from "react-router-dom";
import { MdOutlineFavorite } from "react-icons/md";
import { MdDone } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
const BottomBar = () => {
  return (
    <ul className="md:hidden fixed bottom-0 btnBar bg-white border-t border-gray-300 w-full pl-2 container flex justify-around items-center h-14 [box-shadow:0px_-1px_10px_0px_rgba(32,_32,_32,_0.176)]">
      <NavLink
        to="/"
        className="text-[13px] font-bold flex flex-col justify-center items-center mt-2 mx-3"
      >
        <FaHome size={25} />
        Home
      </NavLink>
      <NavLink
        to="orders"
        className="text-[13px] font-bold flex flex-col justify-center items-center mt-[13px] ml-3"
      >
        <FaBox className="" size={22} />
        <MdDone className="text-white absolute top-[25px]" size={12} />
        Orders
      </NavLink>
      <NavLink
        to="favorite"
        className="text-[13px] font-bold flex flex-col justify-center items-center mt-2 mx-3"
      >
        <MdOutlineFavorite size={25} />
        Favorite
      </NavLink>
    </ul>
  );
};

export default BottomBar;
// x

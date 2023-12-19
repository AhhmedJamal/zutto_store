import { Link } from "react-router-dom";
import { MdOutlineFavorite } from "react-icons/md";
import { FaHome } from "react-icons/fa";
const BottomBar = () => {
  return (
    <ul className="md:hidden fixed bottom-0 btnBar bg-white border-t border-gray-300 w-full container flex justify-around items-center h-10 ">
      <Link to="/">
        <FaHome className="text-dark-100" />
      </Link>
      <Link to="favorite">
        <MdOutlineFavorite className="text-dark-100" />
      </Link>
    </ul>
  );
};

export default BottomBar;
// x

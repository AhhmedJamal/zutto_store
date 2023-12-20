import { Link } from "react-router-dom";
import { MdOutlineFavorite } from "react-icons/md";
import { FaHome } from "react-icons/fa";
const BottomBar = () => {
  return (
    <ul className="md:hidden fixed bottom-0 btnBar bg-white border-t border-gray-300 w-full container flex justify-around items-center h-12 [box-shadow:0px_-1px_10px_0px_rgba(32,_32,_32,_0.176)]">
      <Link to="/">
        <FaHome className="text-primary" size={25} />
      </Link>
      <Link to="favorite">
        <MdOutlineFavorite className="text-primary" size={25} />
      </Link>
    </ul>
  );
};

export default BottomBar;
// x

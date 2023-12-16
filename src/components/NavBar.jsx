import { useState, useEffect } from "react";
import {
  Collapse,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { Link, useNavigate } from "react-router-dom";
import Cart from "../assets/cart.png";
import Pin from "../assets/pin.png";
import Arrow from "../assets/arrow.png";
import { useSelector } from "react-redux";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpen2, setIsMenuOpen2] = useState(false);
  const [email, setEmail] = useState("");
  const Governorate = localStorage.getItem("Governorate");
  const [selectedOption, setSelectedOption] = useState(
    Governorate !== null ? Governorate : ""
  );
  const router = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const options = [
    { value: "Cairo", text: "Cairo" },
    { value: "Giza", text: "Giza" },
    { value: "Ismailia", text: "Ismailia" },
    { value: "Suez", text: "Suez" },
    { value: "Alexander", text: "Alexander" },
    { value: "Luxor", text: "Luxor" },
  ];

  const handleOptionChange = (value) => {
    setSelectedOption(value);
    localStorage.setItem("Governorate", value);
  };

  const logout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("token");
      router("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
    onAuthStateChanged(auth, (user) => {
      setEmail(user.email);
    });
  }, []);

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  return (
    <div className="mx-auto  mt-4 shadow-none rounded-none border-none ">
      <div className="relative mx-auto flex items-center justify-between text-dark-100 px-2  sm:p-0">
        <div
          onClick={toggleIsNavOpen}
          className="h-6 w-6 md:hidden text-dark-100 "
        >
          {isNavOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          )}
        </div>

        <Link to="/" className="flex text-[22px] items-center font-[800]">
          ZUTTO
        </Link>
        <div className="hidden md:flex items-center">
          <button className="p-2 text-[11px] text-gray-500 text-start">
            <span className="ml-[2px]"> Deliver to</span>
            <br />
            <div className="flex items-center font-bold">
              <img src={Pin} alt="Pin" className="w-3" />
              <select
                name="location"
                id="location"
                value={selectedOption}
                onChange={(e) => handleOptionChange(e.target.value)}
                className="w-[75px] text-[10px] bg-transparent"
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ))}
              </select>
            </div>
          </button>
          <input
            type="search"
            placeholder="Search"
            className="border px-4 h-[35px] text-[15px] rounded-md outline-none m-1"
          />
          <Menu open={isMenuOpen} handler={setIsMenuOpen}>
            <MenuHandler>
              <button
                color="blue-gray"
                className="text-[11px] tracking-widest sm:text-[11px] text-start text-gray-500 p-2"
              >
                Hello,
                {email ? <span className="font-bold">{email}</span> : "sign in"}
                <br />
                <div className="flex items-center gap-2">
                  Account & List
                  <img src={Arrow} alt="Arrow" width={13} />
                </div>
              </button>
            </MenuHandler>
            <MenuList className="p-2">
              <MenuItem className="pl-0 focus:bg-transparent">
                <Link to="/Profile">Profile</Link>
              </MenuItem>
              <hr />
              <MenuItem className="pl-0">
                <Link to="settings">Settings</Link>
              </MenuItem>
              <hr />
              <MenuItem className="pl-0">
                <div onClick={logout}>Log out</div>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
        <Link
          to="/cart"
          type="button"
          className="relative rounded-full  text-gray-400  focus:outline-none pr-2 "
        >
          <div className="relative">
            <span
              className={`text-[7px] font-bold transition-all ${
                cartItems.length == 0 ? "scale-0" : "scale-100"
              }  absolute top-[-10px] left-3 flex justify-center items-center bg-dark-100 text-white px-1 rounded-full`}
            >
              {cartItems.length !== 0 && cartItems.length}
            </span>
            <img src={Cart} alt="cart" className="w-5 " />
          </div>
        </Link>
      </div>
      <Collapse
        open={isNavOpen}
        className="overflow-scroll  text-dark-d100 rounded mt-2 bg-white"
      >
        <div className="flex flex-col md:hidden">
          <Menu open={isMenuOpen2} handler={setIsMenuOpen2}>
            <MenuHandler>
              <button
                color="blue-gray"
                className="text-[12px]   sm:text-[11px] text-start p-2"
              >
                Hello,
                {email ? (
                  <span className="font-bold text-[13px]">{email}</span>
                ) : (
                  "sign in"
                )}
                <br />
                <div className="flex items-center gap-2">
                  Account & List
                  <img src={Arrow} alt="Arrow" width={13} />
                </div>
              </button>
            </MenuHandler>
            <MenuList className="absolute top-[-100px]">
              <MenuItem className="pl-0 focus:bg-transparent">
                <Link to="/Profile">Profile</Link>
              </MenuItem>
              <hr />
              <MenuItem className="pl-0">
                <Link to="settings">Settings</Link>
              </MenuItem>
              <hr />
              <MenuItem className="pl-0">
                <div onClick={logout}>Log out</div>
              </MenuItem>
            </MenuList>
          </Menu>
          <button className="p-2 text-[11px] text-start">
            <span className="ml-[2px]"> Deliver to</span>
            <br />
            <div className="flex items-center font-bold">
              <img src={Pin} alt="Pin" className="w-3" />
              <select
                name="location"
                id="location"
                value={selectedOption}
                onChange={(e) => handleOptionChange(e.target.value)}
                className="w-[75px] text-[10px] bg-transparent"
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ))}
              </select>
            </div>
          </button>
          <input
            type="search"
            placeholder="Search"
            className="border px-4 h-[35px] text-[15px] rounded-md outline-none m-1"
          />
        </div>
      </Collapse>
    </div>
  );
};

export default NavBar;

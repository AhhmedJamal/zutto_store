import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import PaypalBtn from "../components/PaypalBtn";

const Checkout = () => {
  const [user, setUser] = useState([]);
  const [phone, setPhone] = useState("");
  const [save, setSave] = useState(false);

  const [governorate, setGovernorate] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("phoneNumber", phone);
    setSave((pre) => !pre);
  };
  useEffect(() => {
    setGovernorate(localStorage.getItem("Governorate") || "");
    setPhone(localStorage.getItem("phoneNumber") || "");
    phone !== "" ? setSave(true) : setSave(false);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Link to={-1} className="flex items-center gap-2 font-bold m-4 mt-7">
        <IoMdArrowRoundBack size={25} />
        Back To Cart
      </Link>
      <div className="p-4 md:flex  justify-center items-center mt-[40px] w-fit m-auto">
        <div className="flex items-center  gap-3 text-blue-gray-400 border border-blue-gray-100 p-3 rounded-lg ">
          <CiLocationOn size={30} />
          <div>
            <p className=" text-[13px] font-bold">{user.displayName}</p>
            <p className=" text-[11px]">{governorate}</p>
            <label htmlFor="phone" className="text-[12px]">
              Enter a phone number :
            </label>
            <form
              className="flex justify-between items-center gap-3 "
              onSubmit={handleSubmit}
            >
              <input
                name="phone"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  setSave(false);
                }}
                placeholder="Add phone Number"
                className=" text-[13px] border-2 rounded-lg outline-none px-2 py-1 "
                required
              />

              <button type="submit" className="">
                {save ? (
                  <FaCheckCircle size={20} className=" text-light-green-600" />
                ) : (
                  <IoAddCircleOutline
                    size={30}
                    className="text-blue-gray-400"
                  />
                )}
              </button>
            </form>
          </div>
        </div>
        <div className="p-5 md:mt-9 w-full ">
          <PaypalBtn />
        </div>
      </div>
    </>
  );
};

export default Checkout;

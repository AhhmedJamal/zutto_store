import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../config/firebase";
import { PiUserCircle } from "react-icons/pi";
import { collection, getDocs } from "firebase/firestore";
const Account = () => {
  const [user, setUser] = useState([]);
  const router = useNavigate();

  const handleLogOut = () => {
    signOut(auth);
    router("/login");
  };
  const CollectionsRef = collection(db, `/users`);
  const getData = async (id) => {
    const getData = await getDocs(CollectionsRef);
    const data = getData.docs.map((doc) => doc.data());
    setUser(...data.filter((item) => item.id == id));
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getData(user.uid);
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="px-4">
      {/* <div className="flex flex-col justify-center mt-[30px] bg-white p-5 rounded-md">
        <div className="flex flex-col md:flex-row md:justify-center items-center relative gap-3 ">
          {user.photoURL ? (
            <img
              // src={user.photoURL}
              alt="Image-user"
              className="rounded-full"
            />
          ) : (
            <PiUserCircle size={80} />
          )}
          <div className="text-center md:text-start">
            <h1 className="font-bold text-xl mb-1">{user.name}</h1>
            <h2 className="text-gray-700 ">{user.email}</h2>
          </div>
        </div>
      </div> */}

      <div className="bg-white w-full mt-[50px] p-3 rounded-md flex justify-center">
        <button
          onClick={handleLogOut}
          type="button"
          className="bg-primary text-white rounded-md p-1 font-[600] text-[14px] w-[200px] shadow-[0_0px_9px_0px_rgba(0,0,0,0.3)]"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Account;

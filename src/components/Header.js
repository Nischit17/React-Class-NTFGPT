import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen px-96 py-1 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-[155px]"
        src="https://logohistory.net/wp-content/uploads/2023/05/Netflix-Logo.png"
        alt="logo"
      />
      {user && (
        <div className="p-2">
          <img
            className="w-12 h-12 mx-[10px]"
            alt="usericon"
            src={user?.photoURL}
          />
          <button
            onClick={handleSignOut}
            className=" text-white cursor-pointer"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

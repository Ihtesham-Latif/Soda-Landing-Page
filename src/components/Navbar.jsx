import React from "react";
import { useDrinks } from "../context/DrinksContext";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { ImCross } from "react-icons/im";


const Navbar = () => {
  const { data,setdata,setOrangeSoda, setLemonSoda, setStrawSoda } = useDrinks();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const {bg} = data
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  return (
    <div className= {`navbar-container w-full h-24 ${bg} text-white col-start-1 col-end-13 grid grid-cols-12 items-center`}>
      {/* logo space */}
      <div className="col-start-2 col-end-4 flex justify-start items-center  ">
        <img className="w-20 h-20" src={logo} alt="logo" />
      </div>
      {/* menu items space */}
      <div className=" hidden col-start-4 col-end-11 lg:flex justify-end items-center py-4  ">
        <ul className=" bebas-neue-regular text-lg flex space-x-8 items-center">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      {/* hamburger */}
      <div className="hamburger lg:hidden col-start-11 col-end-12 justify-end items-center sm:flex  ">
        {hamburgerOpen ? (
          <button onClick={toggleHamburger}>
            <ImCross size={30} />
          </button>
        ) : (
          <button onClick={toggleHamburger}>
            <GiHamburgerMenu size={30} />
          </button>
        )}
      </div>

      {/* hamburger-div */}

      {hamburgerOpen && (
        <div className="hamburger-container col-start-1 col-end-13 h-72 bg-orange-500 py-8 z-[4]">
          <ul className="flex flex-col space-y-6 justify-top items-center ">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

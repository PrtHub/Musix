import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";
import logo from '../assets/musix.png';
import { links } from "../assets/constants";

const NavLinks = ({handleClick}) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        className="flex flex-row justify-start items-center my-8 text-base font-medium text-white hover:bg-[#ADD8E6] hover:bg-opacity-20 focus:bg-[#ADD8E6] focus:bg-opacity-20 rounded-l p-2"
        key={item.name}
        to={item.to}
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink> 
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[210px] h-full py-10 pl-4 sidebackground">
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks />

        <footer className="flex items-end h-full mb-10 sticky text-base font-medium text-[#0072c6]">
          Pritam&copy;2023
        </footer>
      </div>

      {/* // Mobile view */}

      <div className="absolute md:hidden block top-6 right-3">
        {mobileMenu ? (
          <RiCloseLine
            className="w-6 h-6 text-white mr-2 cursor-pointer"
            onClick={() => setMobileMenu(false)}
          />
        ) : (
          <HiOutlineMenu
            className="w-6 h-6 text-white mr-2 cursor-pointer"
            onClick={() => setMobileMenu(true)}
          />
        )}
      </div>
      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/4 to-[#0b87df] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
          mobileMenu ? "left-0" : "-left-full"
        }`}
      >
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks onClick={() => setMobileMenu(false)} />
      </div>
    </>
  );
};

export default Sidebar;

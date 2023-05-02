import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";
import { links } from "../assets/constants";

const NavLinks = ({handleClick}) => (
  <div className="mt-1">
    {links.map((item) => (
      <NavLink
        className="flex flex-row justify-start items-center my-2 text-base font-medium text-white hover:bg-[#ADD8E6] hover:bg-opacity-20 focus:bg-[#ADD8E6] focus:bg-opacity-20 rounded-l p-2"
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
      <div className="md:flex hidden flex-col w-[210px] h-full py-5 pl-4 sidebackground">
       <h1 className="uppercase font-bold text-3xl mb-5 p-2 text-[#333333] ">Musix</h1>
        <NavLinks />

        <footer className="flex items-end h-full mb-10 sticky text-base font-medium text-[#333333]">
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
        <h1 className="uppercase font-bold text-3xl mb-5 p-2 text-[#333333] ">Musix</h1>
        <NavLinks onClick={() => setMobileMenu(false)} />
      </div>
    </>
  );
};

export default Sidebar;

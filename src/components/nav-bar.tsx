import React, {useState} from "react";
import {
  Navbar,
  Collapse,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

import logo from '@/assets/images/logo-horizontal-branca.svg'

 
export default function Header() {
  const [openNav, setOpenNav] = useState<boolean>(false);

  function NavList() {

    function closeMenuIfOpen() {
      if (openNav) {
        setOpenNav(false)
      }
    }

    return (
      <nav className=" flex flex-col md:flex-row md:items-center gap-5 ">
        <NavLink 
          to="/" 
          onClick={closeMenuIfOpen}
          className={
            ({isActive}) => `${isActive ? "text-black" : "text-gray-500"} 
            text-xl md:text-xl font-montserrat cursor-pointer hover:underline decoration-[#663210] underline-offset-8 transition-all`
          }
        >
          Home
        </NavLink>

        <a 
          href="/#sobre" 
          onClick={closeMenuIfOpen}
          className={`text-xl md:text-xl text-gray-500 font-montserrat cursor-pointer hover:underline decoration-[#663210] underline-offset-8 transition-all`}
        >
          Sobre
        </a>
  
        <NavLink 
          to="/procedimentos" 
          onClick={closeMenuIfOpen}
          className={
            ({isActive}) => `${isActive ? "text-black" : "text-gray-500"} 
            text-xl md:text-xl font-montserrat cursor-pointer hover:underline decoration-[#663210] underline-offset-8 transition-all`
          }
        >
          Procedimentos
        </NavLink>
        
        <a 
          href="https://api.whatsapp.com/send/?phone=5534998798280&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta+com+a+Dra.+Nara+por+favor.&type=phone_number&app_absent=0" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-fit px-5 pt-1 pb-1.5 rounded-2xl text-lg md:text-xl uppercase transition-all border-2 border-[#663210] text-white bg-[#663210]  hover:bg-transparent hover:text-[#663210]"
        >
          Fale conosco
        </a>
      </nav>
    );
  }
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  return (
    <Navbar 
      className="relative z-50 mx-auto max-w-[900px] px-5 py-5 text-black bg-transparent rounded-none border-none" 
      placeholder={null} 
      onPointerEnterCapture={null} 
      onPointerLeaveCapture={null}
    >
      <div className="flex items-center justify-between md:justify-center text-blue-gray-900">

        <NavLink to="/" className=" cursor-pointer">
          <img src={logo} alt="logo" className="w-[250px] md:w-[150px] md:hidden " />
        </NavLink>

        <div className="hidden md:block">
          <NavList />
        </div>
        
        <button
          className="md:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          { openNav ? 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            : 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

          }
        </button>

        
      </div>
      
      <Collapse open={openNav} className="overflow-hidden">
        <div className="pt-7">
          <NavList />
        </div>
      </Collapse>

      
    </Navbar>
  );
}
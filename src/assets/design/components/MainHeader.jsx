import React, { useState } from 'react';
import LogoAmor from "../images/logo.png"; 
import Avatar from "../images/image-avatar.png";
import MenuIcon from "../icons/MenuIcon";
import { CartIcon } from "../icons/CartIcon";
import CloseIcon from "../icons/CloseIcon";
import NavLinkHeader from './NavLinkHeader';

const MainHeader = () => {
  const [navClass, setNavClass] = useState("hidden md:flex md:justify-center md:items-center md:gap-4 md:mr-5 md:top-0 md:w-full");

  const handleOpenMenu = () => {
    setNavClass(
      "absolute top-56 left-0 h-full w-3/5 p-4 flex flex-col gap-y-2 text-sm  md:static md:flex md:justify-center md:items-center md:flex-row md:gap-4 md:mr-5 md:top-0 md:w-full z-10"
    );
  };
  
  const handleCloseMenu = () => {
    setNavClass(
      "hidden md:flex md:justify-center md:items-center md:flex-row md:gap-4 md:mr-5 md:top-0 md:w-full"
    )
  };
      
    
    
    return (
    <>
          <header className="flex flex-col items-center p-2 py-4 relative b">
        <div className="bg-gradient-to-b from-red-500  to-black       text-white w-full p-2 flex flex-col items-center">
                <p className="text-sm mb-0">Envío gratis para pedidos superiores a $120.000 COP</p>
                <p className="text-sm">Escríbenos al WhatsApp: 304-590-3780</p>
              </div>
              <div className="flex items- mb-4bg-gradient-to-b from-red-500 to-black text-white w-full p-0 mb-0 flex-col">
              <img src={LogoAmor} alt="Logo" className="flex w-24 h-auto   " />
              <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-black">
              El amor complace
              </span>
              <div className="flex item-center  ml-auto">
                <button className="flex relative -mt-10 mr-3"> 
                  <CartIcon /> </button>
                <img className="flex relative -mt-20 mr-3" src={Avatar} alt=''/>
              </div>
        </div>
        
        <button className="md:hidden mr-auto mt-8" onClick={handleOpenMenu}>
           <MenuIcon />
        </button>
        
      <nav className={navClass}> 
        <button className="mb-2 md:hidden" onClick={handleCloseMenu}><CloseIcon /></button>
        <NavLinkHeader text='Lencería y disfraces'/>
        <NavLinkHeader text='Juguetes'/>
        <NavLinkHeader text='Lubricantes'/>
        <NavLinkHeader text='Estimulantes sexuales'/>
        <NavLinkHeader text='Cuidado personal'/>
        <NavLinkHeader text='Cine erótico'/>
        <NavLinkHeader text='Lectura erótica'/>
      </nav>
      </header>
      
   </>
    )
}
export default MainHeader;
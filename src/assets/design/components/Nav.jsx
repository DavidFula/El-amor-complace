
import React from 'react';
import { NavLink } from 'react-router-dom';
import NavLinkHeader from './NavLinkHeader';

const Nav = () => {
  return (
    <nav className="hidden md:flex md:justify-center md:items-center md:gap-4 md:mr-5 md:top-0 md:w-full">
      <NavLinkHeader text="Lencería y disfraces" to="/categoria1" />
      <NavLinkHeader text="Juguetes" to="/categoria2" />
      <NavLinkHeader text="Lubricantes" to="/categoria3" />
      <NavLinkHeader text="Estimulantes sexuales" to="/categoria4" />
      <NavLinkHeader text="Cuidado personal" to="/categoria5" />
      <NavLinkHeader text="Cine erótico" to="/categoria6" />
      <NavLinkHeader text="Lectura erótica" to="/categoria7" />
    </nav>
  );
};

export default Nav;

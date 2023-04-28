import React from "react";
//import logo from "../../assets/logo3.png";
import { useState, state } from "react";
import {Logo} from '../Logo'
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";

export const NavBar = ({ items }) => {
  const navigate = useNavigate();

  const [menu, setMenu] = useState(false);
  function handleClick() {
    menu ? setMenu(false) : setMenu(true);
    console.log("clicou");
  }
 

  return (
    <>
      <nav className="NavbarItems">
        <Logo/>
        <h1>Movie List</h1>
        <div className="menu-icon" onClick={handleClick}>
          <i className={menu ? "fa-solid fa-x" : "fa-solid fa-bars"}></i>
        </div>
        <ul className={menu ? "nav-menu active" : "menu-icon"}>
          {items.map((item, index) => (
            <li key={index} className={menu ? `active ${item.cName}` : "nav-links"}>
              <Link to={item.ref} >{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

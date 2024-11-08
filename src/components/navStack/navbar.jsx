import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalData } from "./navStack";
import "./media.css"
function NavbarLink() {
  const [isOpen, setIsOpen] = useState(false);
  const { favItem, searchHandlers, search, selectHandler, select } = useContext(GlobalData);

  const options = [
    { value: "All", content: "All" },
    { value: "15", content: "less than 15 minutes" },
    { value: "16 to 25", content: "16 to 25 Minutes" },
    { value: "25 to 40", content: "25 to 40 Minutes" },
    { value: "41", content: "Above 41 minutes" }
  ];

  // Toggle function for navbar on mobile view
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg ">
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarTogglerDemo03"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link fs-4 " to="recipes">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fs-4 " to="/favourite">Favorite Screen {favItem.length}</NavLink>
            </li>
            
          </ul>
          <input
            list="options"
            className="form-control mr-sm-1 search-input  formChange "
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={search}
            onChange={searchHandlers}
          />
          
          <select className="form-select filter-select " value={select} onChange={selectHandler}>
            {options.map((each, index) => (
              <option key={index} value={each.value}>{each.content}</option>
            ))}
          </select>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item ">
              <NavLink className="nav-link fs-4 " to="userdata">Profile</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavbarLink;

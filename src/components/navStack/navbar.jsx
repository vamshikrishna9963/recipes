import React, { useContext } from "react";
import {  Link } from "react-router-dom";
// import RecipeScreen from "./components/RecipeScreen";
// import FavoriteScreen from "./components/FavoriteScreen";
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap
import { GlobalData } from "./navStack";
// import { Search_glob } from "../screens/recipe/recipe";

function NavbarLink() {
   const {favItem,searchHandlers,search} =useContext(GlobalData)
//    const {names}=useContext(Search_glob)
    return (
        // <Router>
            <div>
                {/* <h1>{names}</h1> */}
                <nav className="navbar navbar-expand-lg navbar-danger bg-light shadow-lg">
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarTogglerDemo03"
    aria-controls="navbarTogglerDemo03"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
 
  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      
      <li className="nav-item">
      <Link className="navbar-brand" to="/">Recipes</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/favourite">Favorite Screen {favItem.length}</Link>
       
      </li>
    </ul>
    {/* <form className="  " onSubmit={(e)=>e.preventDefault()}> */}
      <input
        className="form-control mr-sm-1 w-25 "
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={search}
        onChange={searchHandlers}
      />
      <button className="btn btn-outline-success my-2 my-sm-0" >
        Search
      </button>
    {/* </form> */}
  </div>
</nav>

               


                     
              
            </div>
       
    );
}

export default NavbarLink;

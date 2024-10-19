import React from "react";
import {  Link } from "react-router-dom";
// import RecipeScreen from "./components/RecipeScreen";
// import FavoriteScreen from "./components/FavoriteScreen";
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap

function NavbarLink() {
    return (
        // <Router>
            <div>
                {/* Header with Bootstrap Navbar */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Recipes</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                               
                                <li className="nav-item">
                                    <Link className="nav-link" to="/favourite">Favorite Screen</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* React Router Switch for navigation */}
                {/* <Switch>
                    <Route path="/" exact component={RecipeScreen} />
                    <Route path="/favorites" component={FavoriteScreen} />
                </Switch> */}
            </div>
        // </Router>
    );
}

export default NavbarLink;

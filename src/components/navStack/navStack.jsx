import { Route, Routes } from "react-router-dom"
import Recipe_screen from "../screens/recipe/recipe"
import Favourite_screen from "../screens/favourites/favourites"
import Navbars from "./navbar"
import Details_screen from "../screens/details/details"
import NavbarLink from "./navbar"
// import { Navbar } from "react-bootstrap"


export const Navigation=()=>{

    return(
        <>
        {/* <h1>hello</h1> */}
        <NavbarLink/>
        <Routes>
            <Route path="/" element={<Recipe_screen/>}/>
            <Route path="favourite" element={<Favourite_screen/>}/>
            <Route path="recipes/:detailId" element={<Details_screen/>}/>
        </Routes>
        </>
    )
}
// export default Navigation
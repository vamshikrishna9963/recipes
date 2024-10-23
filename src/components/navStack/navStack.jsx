import { Route, Routes } from "react-router-dom"
import Recipe_screen from "../screens/recipe/recipe"
import Favourite_screen from "../screens/favourites/favourites"
import Navbars from "./navbar"
import Details_screen from "../screens/details/details"
import NavbarLink from "./navbar"
import { createContext, useState } from "react"
// import { Navbar } from "react-bootstrap"

export const GlobalData=createContext()

export const Navigation=()=>{
    const [favItem,setFavItem]=useState([])
    const [search,setSearch]=useState('')
  
    const handleFavoriteClick=(recipes)=>{
          const itemExist=favItem.find((each)=>each.id===recipes.id)
            if(!itemExist ){
            setFavItem([...favItem,recipes])

            }else{
                alert("already added")
            }
    }
    const removeHandler=(index)=>{
            const removedItem=favItem.filter((item)=>item.id != index)
            setFavItem(removedItem)
    }
  
    const searchHandlers=(e)=>{
        setSearch(e.target.value)
    }
    return(
        <GlobalData.Provider value={{
         favItem,
         search,
         handleFavoriteClick,
         removeHandler,
         searchHandlers

        }}>
        {/* <h1>hello</h1> */}
        
        <NavbarLink/>
        
        <Routes>
            <Route path="/" element={<Recipe_screen/>}/>
            <Route path="favourite" element={<Favourite_screen/>}/>
            <Route path="recipes/:detailId" element={<Details_screen/>}/>
        </Routes>
        </GlobalData.Provider>
    )
}
// export default Navigation
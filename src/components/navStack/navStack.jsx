import { Navigate, Route, Routes } from "react-router-dom"
import Recipe_screen from "../screens/recipe/recipe"
import Favourite_screen from "../screens/favourites/favourites"
import Navbars from "./navbar"
import Details_screen from "../screens/details/details"
import NavbarLink from "./navbar"
import { createContext, useEffect, useState } from "react"
import Invalid_screen from "../screens/invalidscreen/invalid"
import Logins_screen from "../screens/logins/login"
import Register_screen from "../screens/logins/registration"

import { auth } from "../screens/logins/firebase"
import User_screen from "../screens/userDetails/userscreen.jsx"
import { toast, ToastContainer } from "react-toastify"



// import { Navbar } from "react-bootstrap"

export const GlobalData=createContext()

export const Navigation=()=>{
    const [favItem,setFavItem]=useState([])
    const [search,setSearch]=useState('')
    const [select,setSelect]=useState("All")
    const [user,setUser]=useState()
    const [display,setDisplay]=useState('')
    // const [screen,setScreen]=useState()
  
    const handleFavoriteClick=(recipes)=>{
          const itemExist=favItem.find((each)=>each.id===recipes.id)
            if(!itemExist ){
            setFavItem([...favItem,recipes])
            toast.success("Added to  favourite",{
                position:"top-right"
            })

            }else{
                alert("already added")
            }
    }
    const removeHandler=(index)=>{
            const removedItem=favItem.filter((item)=>item.id != index)
            setFavItem(removedItem)
            toast.success("Removed from favourite",{
                position:"top-right"
            })
    }
  
    const searchHandlers=(e)=>{
        setSearch(e.target.value)
    }

    const selectHandler=(e)=>{
        setSelect(e.target.value)
    }

    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            setUser(user)
            setDisplay(user)
        })
    },[])
    return(
        <GlobalData.Provider value={{
         favItem,
         search,
         select,
         handleFavoriteClick,
         removeHandler,
         searchHandlers,
         selectHandler
        }}>
        {
            display ? <NavbarLink/> :""
        }
        <Routes>
            <Route path="/" element={user ? <Navigate to={"/recipes"}/>:<Logins_screen/>}/>
            <Route path="/register" element={<Register_screen/>}/>
           <Route path="userdata" element={<User_screen/>}/>
            <Route path="recipes" element={<Recipe_screen/>}/>
            <Route path="favourite" element={<Favourite_screen/>}/>
            <Route path="favourite/:detailId" element={<Details_screen/>}/>
            <Route path="recipes/:detailId" element={<Details_screen/>}/>
            <Route path="/*" element={<Invalid_screen/>}/>
        </Routes>
        </GlobalData.Provider>
    )
}

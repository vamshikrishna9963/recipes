import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { RECIPE_LIST } from "../../endpoints/endpoints";
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap
import { Link, useNavigate } from "react-router-dom";
import { GlobalData } from "../../navStack/navStack";
import Instagram_heart from "../../files/instaheart/heart";
import "../../navStack/color.css"
// export const Search_glob=createContext()

const Recipe_screen = () => {
    const [recipeData, setRecipeData] = useState([]);
    // const [names,setNames]=useState('vamshi')
    // const [search,setSearch]=useState('')
    const {handleFavoriteClick,search}=useContext(GlobalData)

    const navigate=useNavigate()
   
    const searchHandler=(e)=>{
        setSearch(e.target.value)
    }
    useEffect(() => {
        const fechData = async () => {
            const { data, status } = await axios.get(RECIPE_LIST);
            if (status === 200) {
                // setRecipeData(data.recipes);
                console.log(data.recipes);
                const newRecipe=data.recipes.map(each=>{
                    return {...each,isExist:false}
                })
                setRecipeData(newRecipe)
            }
        };
        fechData();
        document.title=("Recipes ")
    }, []);

   
    const handleFavorite=(each)=>{
        const newRecipes=recipeData.map(item=>{
            
            if(item.id==each.id){
                return {...each,isExist:true}
            }else{
                return item
            }


        })
        setRecipeData(newRecipes)

        handleFavoriteClick(each)

    }

    const goFavHandler=()=>{
        navigate("favourite")
    }
   
    const changeName=()=>{
        setNames(names)
    }
   
    return (
        // <Search_glob.Provider value={{
        //    names,
        //    changeName
        // }}>
        <div className="container m-5 shadow-lg p-3 mb-5  rounded ">
          {/* <input type="text" value={search} onChange={searchHandler} placeholder="search recipe..."/> */}
            <h1 className="text-center mb-4">Select Your Favourite Recipe</h1>
            <div className="row">
                {
                    recipeData.length > 0 ? (
                        recipeData.filter(each=>each.name.toLowerCase().includes(search.toLowerCase())).map((each, index) => (
                            <div className="col-md-3 mb-5 box " key={index}>
                                {/* <div className="card h-75  shadow-lg p-2 mb-5 bg-white box"> */}
                                    <img 
                                        src={each.image || "https://source.unsplash.com/400x300/?food"} 
                                        className="w-100 images" 
                                        alt={each.name} 
                                    />
                                    <div className="card-body">
                                        <b className="card-title">{each.name.slice(0, 25)}...</b>  <b className="card-text ms-5"><strong>Rating:</strong> {each.rating} ⭐</b>
                                        <p className="card-text"><strong>Cook Time:</strong> {each.cookTimeMinutes} min</p>
                                        
                                        <p className="card-text"><strong>Prep Time:</strong> {each.prepTimeMinutes} min</p>
                                        {/* <p className="card-text"><strong>Servings:</strong> {each.servings}</p> */}
                                        {/* <p className="card-text"><strong>Cuisine:</strong> {each.cuisine}</p> */}
                                        <p className="card-text">
                                            <strong>Ingredients:</strong> {each.ingredients.slice(0, 2).join(", ")}...
                                        </p>
                                        <p className="card-text">
                                            {/* <strong>Instructions:</strong> {each.instructions.slice(0, 2).join(" ")}... */}
                                        </p>
                                        {/* <p><Instagram_heart/></p> */}
                                        {/* <a href={`/recipes/${each.id}`} className="btn btn-primary">View Full Recipe</a> */}
                                        <button className="btn btn-primary "><Link className="links" to={`recipes/${each.id}`}>View Full Recipe </Link></button>
                                <button className="btn btn-primary w-50" onClick={()=>each.isExist ? goFavHandler():handleFavorite(each)}>{each.isExist ? "go to fav":"Add to Favorites"} </button>

                                    </div>

                                    <div className="card-footer">
                                        <small className="text-muted">Reviews: {each.reviewCount}</small>
                                    </div>
                                </div>
                            // </div>
                        ))
                    ) : (
                        <div className="col-12">
                            <p>No recipes available at the moment.</p>
                        </div>
                    )
                }
            </div>
        </div>
        // </Search_glob.Provider>
     );
};

export default Recipe_screen;

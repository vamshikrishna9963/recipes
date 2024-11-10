import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { RECIPE_LIST } from "../../endpoints/endpoints";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom";
import { GlobalData } from "../../navStack/navStack";
import "../../navStack/color.css";
import { auth } from "../logins/firebase";
import { toast, ToastContainer } from "react-toastify";

const Recipe_screen = () => {
    const [recipeData, setRecipeData] = useState([]);
    const [userData,setUserData]=useState()
    const { handleFavoriteClick, search, searchHandlers, select, selectHandler } = useContext(GlobalData);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const { data, status } = await axios.get(RECIPE_LIST);
            if (status === 200) {
                const updatedRecipes = data.recipes.map(each => ({ ...each, isExist: false }));
                setRecipeData(updatedRecipes);
            }
        };
        fetchData();
        document.title = "Recipes";
        
    }, []);

    const handleFavorite = (each) => {
        const updatedRecipes = recipeData.map(item => 
            item.id === each.id ? { ...each, isExist: !each.isExist } : item
        );
        setRecipeData(updatedRecipes);
        handleFavoriteClick(each);
       
    };

    const goFavHandler = () => navigate("favourite");

    const filterData = 
        select === "All" ? recipeData : recipeData.filter((recipe) => {
            const prepTime = recipe.prepTimeMinutes;
            if (select === "15") return prepTime <= 15;
            if (select === "16 to 25") return prepTime >= 16 && prepTime <= 25;
            if (select === "25 to 40") return prepTime >= 26 && prepTime <= 40;
            if (select === "41") return prepTime >= 41;
            return false;
        });

     useEffect(()=>{
        fireBaseData()
     },[])

     const fireBaseData=()=>{
            
     }

       

    const filteredRecipes = filterData.filter(each => each.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <>
       
            <ToastContainer/>
            <div className="container m-4 shadow-lg p-3 mb-5 rounded ">
                <h1 className="text-center mb-4">Select Your Favourite Recipe</h1>

                <datalist id="options">
               {
               recipeData.map(each=> <option>{each.name}</option>)
               }
                </datalist> 

                <div className="row">
                    {filteredRecipes.length > 0 ? (
                        filteredRecipes.map((each, index) => (
                            <div className="col-md-3 mb-5 box" key={index}>
                                <Link className="links" to={`${each.id}`}>
                                    <img
                                        src={each.image || "https://source.unsplash.com/400x300/?food"}
                                        className="w-100 images"
                                        alt={each.name}
                                    />
                                </Link>
                                <div className="card-body">
                                    <b className="card-title">{each.name.slice(0, 14)}...</b>
                                    <b className="card-text ms-5"><strong>Rating:</strong> {each.rating} ⭐</b>
                                    <p className="card-text"><strong>Cook Time:</strong> {each.cookTimeMinutes} min</p>
                                    <p className="card-text"><strong>Prep Time:</strong> {each.prepTimeMinutes} min</p>
                                    <p className="card-text">
                                        <strong>Ingredients:</strong> {each.ingredients.slice(0, 2).join(", ")}...
                                    </p>
                                    <button
                                        className="btn btn-primary w-50 mb-0"
                                        onClick={() => each.isExist ? goFavHandler() : handleFavorite(each)}
                                    >
                                        {each.isExist ? "Go to Favorites" : "Add to Favorites"}
                                    </button>
                                </div>
                                <div className="card-footer  reviews">
                                    <small className="text-muted">Reviews: {each.reviewCount}</small>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12">
                            <p>No recipes available at the moment.</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Recipe_screen;

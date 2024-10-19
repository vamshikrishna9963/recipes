import axios from "axios";
import { useEffect, useState } from "react";
import { RECIPE_LIST } from "../../endpoints/endpoints";
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap
import { Link } from "react-router-dom";

const Recipe_screen = () => {
    const [recipeData, setRecipeData] = useState([]);

    useEffect(() => {
        fechData();
    }, []);

    const fechData = async () => {
        const { data, status } = await axios.get(RECIPE_LIST);
        if (status === 200) {
            setRecipeData(data.recipes);
            console.log(data.recipes);
        }
    };
    const handleFavoriteClick=()=>{

    }
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Recipe Screen is Ready</h1>
            <div className="row">
                {
                    recipeData.length > 0 ? (
                        recipeData.map((each, index) => (
                            <div className="col-md-4 mb-3 border-rad" key={index}>
                                <div className="card h-100 ">
                                    <img 
                                        src={each.image || "https://source.unsplash.com/400x300/?food"} 
                                        className="card-img-top  " 
                                        alt={each.name} 
                                    />
                                    <div className="card-body">
                                        <b className="card-title">{each.name.slice(0, 25)}...</b>  <b className="card-text ms-5"><strong>Rating:</strong> {each.rating} ⭐</b>
                                        <p className="card-text"><strong>Cook Time:</strong> {each.cookTimeMinutes} min</p>
                                        
                                        <p className="card-text"><strong>Prep Time:</strong> {each.prepTimeMinutes} min</p>
                                        <p className="card-text"><strong>Servings:</strong> {each.servings}</p>
                                        {/* <p className="card-text"><strong>Cuisine:</strong> {each.cuisine}</p> */}
                                        <p className="card-text">
                                            <strong>Ingredients:</strong> {each.ingredients.slice(0, 2).join(", ")}...
                                        </p>
                                        <p className="card-text">
                                            {/* <strong>Instructions:</strong> {each.instructions.slice(0, 2).join(" ")}... */}
                                        </p>
                                        {/* <a href={`/recipes/${each.id}`} className="btn btn-primary">View Full Recipe</a> */}
                                        <button className="btn btn-secondary "><Link to={`recipes/${each.id}`}>View Full Recipe </Link></button>
                                    </div>
                                <button className="btn btn-primary" onClick={handleFavoriteClick}>Add to Favorites</button>

                                    <div className="card-footer">
                                        <small className="text-muted">Reviews: {each.reviewCount}</small>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12">
                            <p>No recipes available at the moment.</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Recipe_screen;

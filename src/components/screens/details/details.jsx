import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Add useHistory for navigation
import { RECIPE_LIST } from "../../endpoints/endpoints";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

const Details_screen = () => {
    const [eachdata, setEachdata] = useState({});
    const { detailId } = useParams();
    // const history = useHistory(); // Hook to navigate programmatically

    useEffect(() => {
        const fetchData = async () => {
            const { data, status } = await axios.get(`${RECIPE_LIST}/${detailId}`);
            if (status === 200) {
                setEachdata(data);
            }
        };
        fetchData();
    }, [detailId]);

    const handleFavoriteClick = () => {
        // Navigate to favorites or handle adding to favorites here
        console.log("Added to favorites:", eachdata.name);
        history.push("/favorites");
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Recipe Details</h1>

            {eachdata.id ? (
                <div className="row">
                    {/* Image Section */}
                    <div className="col-md-8">
                        <img 
                            src={eachdata.image || "https://source.unsplash.com/400x300/?food"} 
                            className="img-fluid rounded mb-4" 
                            alt={eachdata.name} 
                        />
                    </div>

                    {/* Recipe Information Section */}
                    <div className="col-md-8">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">{eachdata.name}</h5>
                                <p className="card-text"><strong>Cuisine:</strong> {eachdata.cuisine}</p>
                                <p className="card-text"><strong>Difficulty:</strong> {eachdata.difficulty}</p>
                                <p className="card-text"><strong>Servings:</strong> {eachdata.servings}</p>
                                <p className="card-text"><strong>Prep Time:</strong> {eachdata.prepTimeMinutes} min</p>
                                <p className="card-text"><strong>Cook Time:</strong> {eachdata.cookTimeMinutes} min</p>
                                <p className="card-text"><strong>Calories per Serving:</strong> {eachdata.caloriesPerServing}</p>
                                
                                {/* Ingredients Table */}
                                <h5>Ingredients</h5>
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Ingredient</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {eachdata.ingredients ? eachdata.ingredients.map((ingredient, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{ingredient}</td>
                                            </tr>
                                        )) : <tr><td colSpan="2">No ingredients available</td></tr>}
                                    </tbody>
                                </table>

                                {/* Instructions Table */}
                                <h5>Instructions</h5>
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Step</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {eachdata.instructions ? eachdata.instructions.map((instruction, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{instruction}</td>
                                            </tr>
                                        )) : <tr><td colSpan="2">No instructions available</td></tr>}
                                    </tbody>
                                </table>

                                <p className="card-text"><strong>Rating:</strong> {eachdata.rating} ⭐</p>
                                <p className="card-text"><strong>Reviews:</strong> {eachdata.reviewCount}</p>
                                <button className="btn btn-primary" onClick={handleFavoriteClick}>Add to Favorites</button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading recipe details...</p>
            )}
        </div>
    );
};

export default Details_screen;

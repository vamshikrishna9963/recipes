import { useContext } from "react";
import { GlobalData } from "../../navStack/navStack";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Favourite_screen = () => {
    const { favItem, removeHandler } = useContext(GlobalData);
    const mainPage = useNavigate();

    const mainHanderl = () => {
        mainPage("/");
    };

    return (
        <>
            <div className="container mt-4">
                <h1>Favourite Items</h1>
                <button className="btn btn-primary mb-3" onClick={() => mainHanderl()}>Go to Main</button>

                <div className="row">
                    {
                        favItem.length > 0 ? favItem.map((each) => (
                            <div className="col-md-6 mb-4 shadow-lg p-3 mb-5 bg-white rounded" key={each.id}>
                                <div className="card h-100 shadow-lg p-3 mb-5 bg-white rounded">
                                    <img
                                        src={each.image}
                                        className="card-img-top"
                                        alt={each.name}
                                        style={{ height: "250px", objectFit: "cover" }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{each.name}</h5>
                                        <p><strong>Cuisine:</strong> {each.cuisine}</p>
                                        <p><strong>Difficulty:</strong> {each.difficulty}</p>
                                        <p><strong>Prep Time:</strong> {each.prepTimeMinutes} mins | <strong>Cook Time:</strong> {each.cookTimeMinutes} mins</p>
                                        <p><strong>Servings:</strong> {each.servings} | <strong>Calories:</strong> {each.caloriesPerServing} kcal</p>
                                        <p><strong>Rating:</strong> {each.rating} ⭐ | <strong>Reviews:</strong> {each.reviewCount}</p>
                                        <hr />
                                        <h6>Ingredients:</h6>
                                        <ul>
                                            {each.ingredients.map((ingredient, idx) => (
                                                <li key={idx}>{ingredient}</li>
                                            ))}
                                        </ul>
                                        <hr />
                                        <h6>Instructions:</h6>
                                        <ol>
                                            {each.instructions.map((step, idx) => (
                                                <li key={idx}>{step}</li>
                                            ))}
                                        </ol>
                                        <button className="btn btn-danger mt-3" onClick={() => removeHandler(each.id)}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        )) : (
                            <div className="col-12">
                                <p>No favourites found...</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default Favourite_screen;

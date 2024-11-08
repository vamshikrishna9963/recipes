import { useContext } from "react";
import { GlobalData } from "../../navStack/navStack";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Favourite_screen = () => {
    const { favItem, removeHandler } = useContext(GlobalData);
    const mainPage = useNavigate();

   
    const mainHanderl = () => {
        mainPage("/");
    };

    return (
        <>
     <ToastContainer/>

            <div className="container m-4 shadow-lg p-3 mb-5  rounded ">
                <h1>Favourite Items</h1>
                <button className="btn btn-primary mb-3" onClick={() => mainHanderl()}>Go to Main</button>

                <div className="row">
                    {
                        favItem.length > 0 ? favItem.map((each) => (
                            <div className="col-md-3 mb-5 box" key={each.id}>
                                {/* <div className="card h-100 shadow-lg p-3 mb-5 bg-white rounded"> */}
                                    
                                    
                                <Link className="links" to={`${each.id}`}>
                                    <img 
                                        src={each.image || "https://source.unsplash.com/400x300/?food"} 
                                        className="w-100 images" 
                                        alt={each.name} 
                                    />
                                    </Link>
                                    <div className="card-body">
                                        <b className="card-title">{each.name.slice(0, 14)}...</b>  <b className="card-text ms-5"><strong>Rating:</strong> {each.rating} ⭐</b>
                                        <p className="card-text"><strong>Cook Time:</strong> {each.cookTimeMinutes} min</p>
                                        
                                        <p className="card-text"><strong>Prep Time:</strong> {each.prepTimeMinutes} min</p>
                                        <p className="card-text">
                                            <strong>Ingredients:</strong> {each.ingredients.slice(0, 1).join(", ")}...
                                        </p>
                                        <p className="card-text">
                                        </p>
                                      
                                        {/* <button className="btn btn-primary "><Link className="links" to={`recipes/${each.id}`}> </Link></button> */}
                                        <button className="btn btn-danger mt-3" onClick={() => removeHandler(each.id)}>Remove</button>

                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted">Reviews: {each.reviewCount}</small>
                                    </div>
                                </div>
                            // </div>
                            
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




//<button className="btn btn-danger mt-3" onClick={() => removeHandler(each.id)}>Remove</button>

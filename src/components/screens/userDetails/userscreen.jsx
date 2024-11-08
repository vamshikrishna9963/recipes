import React, { useEffect, useState } from "react";
import { auth, db } from "../logins/firebase";
import { doc, getDoc } from "firebase/firestore";
import "bootstrap/dist/css/bootstrap.min.css";

const Profiles = () => {
  const [userData, setUserData] = useState(null); // Set initial state to null

  const fetchData = () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData({ ...user, ...docSnap.data() }); // Combine Firebase Auth and Firestore data
        } else {
          console.log("No user data found in Firestore.");
        }
      } else {
        console.log("No user is signed in.");
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogout = () => {
    try {
      auth.signOut();
      window.location.href = "/"; // Redirect to login page
    } catch (error) {
      console.log("Logout error: ", error.message);
    }
  };

  return (
    <>
      {userData ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="card text-center" style={{ width: '22rem' }}>
            <img
              src={userData.photo || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC0EDEBwYBnBuEt5RfgAN1Oc9fw7IKZAs67g&s"} // Fallback to placeholder if no photoURL
              alt="User Avatar"
              className="card-img-top rounded-circle mx-auto mt-3"
              style={{ width: "150px", height: "150px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Welcome, {userData.username || "User"}</h5>
              <p className="card-text"><strong>Email:</strong> {userData.email}</p>
              
              <button onClick={handleLogout} className="btn btn-danger mt-3">Logout</button>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="text-center mt-5">Loading...</h1>
      )}
    </>
  );
};

export default Profiles;

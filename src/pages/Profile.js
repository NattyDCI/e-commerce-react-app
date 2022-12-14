import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Navigate } from "react-router-dom";
import "../style/Profile.css";
import Wishlist from "../component/Wishlist";

export default function Profile() {
  const { user, setUser, wishlist } = useContext(AppContext);
  console.log(user)
  if (user) {
    return (
      <div className="Profile">
        <div className="profile-info">
          <p>PROFILE</p>
          <h4>
            {user.lastName} {user.firstName}
          </h4>
          <p>{user.email}</p>
          <h4>ACCOUNT</h4>
          <p>EMAIL, PASSWORD</p>
          <h4>ADDRESSES</h4>
          <p>SHIPPING AND BILLING ADDRESSES</p>
          <h4>WALLET</h4>
          <p>PAYMENT METHODS</p>
          <button onClick={() => setUser(null)}>SIGN OUT</button>
        </div>

        <div className="wishlist-wrapper">
          <p>YOUR WISHLIST</p>
          {wishlist.length === 0?<div id="wishlist-empty"><p>YOU HAVE NO PENDING ITEMS FOR LATER PURCHASE</p></div>:<Wishlist/>}
        </div>
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
}

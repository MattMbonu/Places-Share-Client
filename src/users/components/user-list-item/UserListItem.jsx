import React from "react";
import "./user-list-item.css";

const UserListItem = ({ id, name, placeCount, image }) => {
  return (
    <li className="user-item">
      <div className="user-item__content">
        <div className="user-item__image">
          <img style={{ width: "100%" }} src={image} alt="user" />
        </div>
        <div className="user-item__info">
          <h2>{name}</h2>
          <h3>Places Shared: {placeCount}</h3>
        </div>
      </div>
    </li>
  );
};

export default UserListItem;

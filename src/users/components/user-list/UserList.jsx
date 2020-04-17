import React from "react";
import UserListIem from "../user-list-item/UserListItem";
import "./user-list.css";

const UserList = ({ users }) => {
  if (!users || users.length === 0) {
    return (
      <div className="center">
        <h2>No users found</h2>
      </div>
    );
  }
  return (
    <ul className="user-list">
      {users.map((user) => (
        <UserListIem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places.length}
        />
      ))}
    </ul>
  );
};

export default UserList;

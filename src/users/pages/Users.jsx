import React from "react";
import UserList from "../components/user-list/UserList";

const User = () => {
  const USERS = [
    {
      id: "1234",
      name: "Matthew",
      image:
        "https://images.pexels.com/photos/2955277/pexels-photo-2955277.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      places: [{ name: "matt" }, { name: "bob" }],
    },
    {
      id: "12345",
      name: "Matthew2",
      image:
        "https://images.pexels.com/photos/3278364/pexels-photo-3278364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      places: [{ name: "matt" }, { name: "bob" }, { name: "greg" }],
    },
  ];

  return <UserList users={USERS} />;
};

export default User;

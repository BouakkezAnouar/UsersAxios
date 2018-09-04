import React from "react";
import User from "./User";
const ListUser = ({ users }) => {
  return (
    <div>
      {users.map((user, i) => (
        <User key={i} user={user} />
      ))}
    </div>
  );
};

export default ListUser;

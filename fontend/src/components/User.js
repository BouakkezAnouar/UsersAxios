import React from "react";

const User = props => {
  return (
    <div style={{ marginBottom: "20px", padding: "20px" }}>
      <p>{props.user.nom}</p>
      <p>{props.user.email}</p>
      <p>{props.user.telephone}</p>
    </div>
  );
};

export default User;

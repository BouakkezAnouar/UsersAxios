import React from "react";

const CreateUser = props => {
  return (
    <form onSubmit={props.handleAddUser}>
      <input
        type="text"
        placeholder="nom ici !"
        value={props.nom}
        onChange={props.handleNom}
        required
      />
      <input
        type="email"
        placeholder="email ici !"
        value={props.email}
        onChange={props.handleEmail}
        required
      />
      <input
        type="text"
        placeholder="telephone ici !"
        value={props.telephone}
        onChange={props.handleTelephone}
        required
      />

      <button type="submit">add user</button>
    </form>
  );
};

export default CreateUser;

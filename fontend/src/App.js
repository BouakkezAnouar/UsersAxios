import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import ListUser from "./components/ListUser";
import CreateUser from "./components/CreateUser";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      email: "",
      telephone: "",
      users: []
    };
  }

  handleNom = evt => {
    this.setState({ nom: evt.target.value });
  };
  handleEmail = evt => {
    this.setState({ email: evt.target.value });
  };
  handleTelephone = evt => {
    this.setState({ telephone: evt.target.value });
  };

  addUser = (nom, email, telephone) => {
    let user = { nom, email, telephone };

    axios({
      method: "post",
      url: "/user",
      data: user
    })
      .then(res => {
        let users = [...this.state.users];
        users = [].concat(res.data).concat(users);
        this.setState({ users });
      })
      .catch(err => {
        alert(JSON.stringify(err.response.data));
      });
  };

  handleAddUser = evt => {
    evt.preventDefault();
    //if (this.state.email.length < 8) return;
    //if (this.state.telephone.length != 8) return;
    //if (this.state.nom < 3 || this.state.nom > 30) return;
    this.addUser(this.state.nom, this.state.email, this.state.telephone);
  };

  componentDidMount() {
    axios
      .get("/user")
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  render() {
    return (
      <div>
        <CreateUser
          nom={this.state.nom}
          email={this.state.email}
          telephone={this.state.telephone}
          handleNom={this.handleNom}
          handleEmail={this.handleEmail}
          handleTelephone={this.handleTelephone}
          handleAddUser={this.handleAddUser}
        />
        <ListUser users={this.state.users} />
      </div>
    );
  }
}

export default App;

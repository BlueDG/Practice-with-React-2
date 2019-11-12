import React, { Component } from "react";
import "./App.css";
import Soldier from "./components/Soldier";

const team = {
  soldier1: {
    name: "William",
    age: 30
  },
  soldier2: {
    name: "Charles",
    age: 29
  },
  soldier3: {
    name: "Steve",
    age: 27
  }
};

class App extends Component {
  state = {
    team
  };

  // METHOD 1
  handleAgeBis = () => {
    const team = { ...this.state.team };
    team.soldier1.age += 1;
    this.setState({ team });
  };

  // METHOD 2 (As in COOKBOOK Project)
  handleAge(num) {
    this.setState(prevValue => ({
      team: {
        ...prevValue.team,
        soldier2: {
          ...prevValue.team.soldier2,
          age: prevValue.team.soldier2.age + num
        }
      }
    }));
  }

  // METHOD 1 again for practice
  handleAgeSteven = () => {
    const team = { ...this.state.team };
    team.soldier3.age += 1;
    this.setState({ team });
  };

  handleName = event => {
    const team = { ...this.state.team };
    const name = event.target.value;
    team.soldier1.name = name;
    this.setState({ team });
  };

  handleNameSteve = event => {
    const team = { ...this.state.team };
    const name = event.target.value;
    team.soldier3.name = name;
    this.setState({ team });
  };

  render() {
    const { team } = this.state;
    return (
      <>
        <div className="App">
          <h1>Timor Crew</h1>
          <Soldier name={team.soldier1.name} age={team.soldier1.age}>
            Team administrator
          </Soldier>
          <input
            type="text"
            value={team.soldier1.name}
            onChange={this.handleName}
          />
          <Soldier name={team.soldier2.name} age={team.soldier2.age} />
          <Soldier name={team.soldier3.name} age={team.soldier3.age} />
          <input
            type="text"
            value={team.soldier3.name}
            onChange={this.handleNameSteve}
          />
        </div>
        <div className="button-container">
          <button className="button" onClick={this.handleAgeBis}>
            Add +1 year Admin
          </button>
        </div>
        <div className="button-container">
          <button className="button" onClick={() => this.handleAge(+1)}>
            Add +1 year Charles
          </button>
        </div>
        <div className="button-container">
          <button className="button" onClick={this.handleAgeSteven}>
            Add +1 year Steven
          </button>
        </div>
      </>
    );
  }
}

export default App;

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
    team,
    isShown: false
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

  handleName = event => {
    const team = { ...this.state.team };
    const name = event.target.value;
    team.soldier1.name = name;
    this.setState({ team });
  };

  handleShowWorker = () => {
    const isShown = !this.state.isShown;
    this.setState({ isShown });
  };

  render() {
    const { team, isShown } = this.state;

    let member = null;
    if (isShown) {
      member = <Soldier name={team.soldier3.name} age={team.soldier3.age} />;
    }

    const list = Object.keys(team).map(member => (
      <Soldier name={team[member].name} age={team[member].age}>
        Team member
      </Soldier>
    ));

    return (
      <>
        <div className="App">
          <h1>Team</h1>
          {list}
          {member}
          <button className="button" onClick={this.handleShowWorker}>
            {isShown ? "Hide Member" : "Show Member"}
          </button>
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
          <div>
            <input
              type="text"
              value={team.soldier1.name}
              onChange={this.handleName}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;

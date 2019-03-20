import React, { Component } from "react";
import "./App.css";
import StudentContainer from "./components/StudentContainer";
import Filter from "./components/Filter";
import TeamList from "./components/TeamList";
const URL =
  "https://www.potterapi.com/v1/houses/5a05e2b252f721a3cf2ea33f?key=$2a$10$PzNhF6Vo79I8PyEjkd/TT.VlHrn1B.kcmXv5a.wjtuISj8pTGXSoy";

class App extends Component {
  state = {
    students: [],
    team: [],
    filteredWizard: [],
    searchTerm: ""
  };

  componentDidMount() {
    fetch(URL)
      .then(resp => resp.json())
      .then(students =>
        this.setState({
          students: students[0].members,
          filteredWizard: students[0].members
        })
      );
  }

  changeHandler = e => {
    console.log(e.target.value);
    const term = e.target.value.toLowerCase();
    const newArray = [...this.state.students].filter(student =>
      student.name.toLowerCase().includes(term)
    );

    this.setState({
      searchTerm: term,
      filteredWizard: newArray
    });
  };

  addHandler = studentObj => {
    console.log(studentObj);
    console.log("delete");

    let newArray = [...this.state.students].filter(
      student => student._id !== studentObj._id
    );
    console.log(newArray);
    this.setState({
      students: newArray,
      team: [studentObj, ...this.state.team]
    });
    console.log(newArray);
  };

  handleRemove = studentData => {
    const newStudentArray = [studentData, ...this.state.students];
    const newTeamArray = this.state.team.filter(
      student => student._id !== studentData._id
    );

    this.setState({
      students: newStudentArray,
      team: newTeamArray
    });
  };

  render() {
    console.log(this.state);
    return (
      <div id="character-container">
        <Filter
          value={this.state.searchTerm}
          changeHandler={this.changeHandler}
        />
        <StudentContainer
          clickHandler={this.addHandler}
          students={this.state.filteredWizard}
        />
        <TeamList clickHandler={this.handleRemove} students={this.state.team} />
      </div>
    );
  }
}

export default App;

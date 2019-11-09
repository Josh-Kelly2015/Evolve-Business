import React, { Component } from "react";
import NewProjectForm from "./NewProject";
import NewEmployeeForm from "./NewEmployee";
import AssignUser from "./AssignUser";
import API from "../utils/API";

class Home extends Component {
  state = {
    projectName: "",
    projects: [],
    employees: [],
    employeeName: "",
    email: "",
    rank: "",
    selectedOption: {}
  };
  componentDidMount() {
    API.getProjects()
      .then(res => this.setState({ projects: res.data }))
      .catch(err => console.log(err));
    API.getEmployees()
      .then(res => this.setState({ employees: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <div className="col">
            <NewProjectForm></NewProjectForm>
          </div>
          <div className="col">
            <NewEmployeeForm></NewEmployeeForm>
          </div>
        </div>
        <div className="col">
          <AssignUser></AssignUser>
        </div>
      </div>
    );
  }
}
export default Home;

import React, { Component } from "react";
import API from "../../utils/API";
import Board from "../Board";
class TableComponent extends Component {
  state = {
    project: [],
    projectName: "",
    projectNumber: ""
  };
  componentDidMount() {
    this.loadProjects();
  }
  loadProjects = () => {
    API.getProjects()
      .then(res =>
        this.setState({ project: res.data, projectName: "", projectNumber: "" })
      )
      .catch(err => console.log(err));
  };
  render(props) {
    return (
      <div className="table-responsive">
        <Board id="board-2" className="board">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Project</th>
                <th scope="col">Monday</th>
                <th scope="col">Tuesday</th>
                <th scope="col">Wednesday</th>
                <th scope="col">Thursday</th>
                <th scope="col">Friday</th>
                <th scope="col">Saturday</th>
                <th scope="col">Sunday</th>
              </tr>
            </thead>
            <tbody>
              {this.state.project.map(project => (
                <tr>
                  <th scope="row">
                    -{project.projectNumber}- <br></br>-{project.projectName}-
                  </th>
                  <td>{props}</td>
                  <td>{props}</td>
                  <td>{props}</td>
                  <td>{props}</td>
                  <td>{props}</td>
                  <td>{props}</td>
                  <td>{props}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Board>
      </div>
    );
  }
}

export default TableComponent;

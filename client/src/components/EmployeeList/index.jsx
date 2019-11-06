// ------------------------- Import Folders ---------------------- //
import React, { Component } from "react";
import API from "../../utils/API";
// ---------------------- Schedule App Main Page ------------------- //
class ScheduleMaker extends Component {
  // --------------------------- Declare state ---------------------------- //
  state = {
    employee: []
  };
  // --------------- Once the page loads, call loadEmployees() ------------ //
  componentDidMount() {
    this.loadEmployees();
  }
  // --------- Make an API call to Read all data in Employees docs -------- //
  loadEmployees = () => {
    API.getEmployees()
      .then(res => this.setState({ employee: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      // -------------- Draggable Container ------------ //
      <div className="container mb-4">
        <div className="row">
          {this.state.employee.map(employee => (
            <div
              className="col-2 employees"
              key={employee._id}
              id={employee._id}
            >
              {employee.name}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
// --------------------- Export Class Component ------------------- //
export default ScheduleMaker;

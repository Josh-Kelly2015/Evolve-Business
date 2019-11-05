import React from "react";
import Target from "../Target";
const ProjectRow = props => (
  <tr>
    <th scope="row">{props.Name}</th>
    <Target>Cell</Target>
    <Target>Cell</Target>
    <Target>Cell</Target>
    <Target>Cell</Target>
    <Target>Cell</Target>
    <Target>Cell</Target>
    <Target>Cell</Target>
  </tr>
);

export default ProjectRow;
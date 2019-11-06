const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: { type: String, required: true },
  active: { type: Boolean, default: true, required: true },
  assignedEmployees: [{ type: Schema.Types.ObjectId, ref: "Employee" }]
});
const Project = mongoose.model("project", ProjectSchema);

module.exports = Project;

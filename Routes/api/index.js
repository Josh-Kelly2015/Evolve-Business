const router = require("express").Router();
const EmployeeRoutes = require("./Employee");
const ProjectRoutes = require("./Project");
const UserRoutes = require("./user");
// const WorkDayRoutes = require("./WorkDay");
router.use("/employee", EmployeeRoutes);
router.use("/project", ProjectRoutes);
router.use("/user", UserRoutes);
// router.use("/workday", WorkDayRoutes);

module.exports = router;

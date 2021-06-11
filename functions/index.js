const functions = require("firebase-functions");
const app = require("express")();

const {
  getAllCourses,
  createCourse,
} = require("./APIs/courses");

app.get("/courses", getAllCourses); // /courses is the path for data
app.post("/courses", createCourse);
exports.api = functions.https.onRequest(app);

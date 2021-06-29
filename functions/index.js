const functions = require("firebase-functions");
const express = require("express");
const app = express();
const cors = require("cors");
// Automatically allow cross-origin requests
app.use(cors({origin: true}));

const {
  getAllCourses,
  createCourse,
} = require("./APIs/courses");

const {
  signUpUser,
} = require("./APIs/users");
app.post("/signup", signUpUser); // Signup and login with google
app.get("/courses", getAllCourses); // /courses is the path for data
app.post("/courses", createCourse);

exports.api = functions.https.onRequest(app);

const {db} = require("../util/admin");
// get all courses from firebase
exports.getAllCourses = (request, response) => {
  db
      .collection("Courses")
      .get()
      .then((data) => {
        const courses = [];
        data.forEach((doc) => {
          const item = doc.data();
          courses.push({
            id: doc.id,
            name: item.name,
            descriptionHeading: item.descriptionHeading,
            description: item.description,
            enrollmentCode: item.enrollmentCode,
          });
        });
        return response.json(courses);
      })
      .catch((err) => {
        console.error(err);
        return response.status(500).json({error: err.code});
      });
};
exports.createCourse = (request, response) => {
  if (request.body.id.trim() === "") {
    return response.status(400).json({courseId: "Must not be empty"});
  }

  if (request.body.name.trim() === "") {
    return response.status(400).json({name: "Must not be empty"});
  }

  if (request.body.playlistId.trim() === "") {
    return response.status(400).json({playlistId: "Must not be empty"});
  }

  const newCourse = {
    id: request.body.id,
    name: request.body.name,
    enrollmentCode: request.body.enrollmentCode,
    description: request.body.description,
    descriptionHeading: request.body.descriptionHeading,
    playlistId: request.body.playlistId,
    createdAt: new Date().toISOString(),
  };
  console.log(newCourse);
  db
      .collection("Courses")
      .doc(request.body.id)
      .set(newCourse)
      .then((doc) => {
        const responseCourse = newCourse;
        return response.json(responseCourse);
      })
      .catch((err) => {
        response.status(500).json({error: "Something went wrong"});
        console.error(err);
      });
};

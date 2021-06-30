async function getUserEnrolledCourses() {
    return new Promise((resolve, reject) => {
        window.gapi.client.classroom.courses
            .list({
                studentId: "me",
            })
            .then(
                function (response) {
                    //convert respone to JS object
                    const courses = [];
                    const jsonResponse = JSON.parse(response.body).courses;
                    if (jsonResponse != null) {
                        jsonResponse.forEach((item) => {
                            if (item.section === 'Bootcamp.af') {
                                courses.push(item);
                            }
                        })
                        resolve(courses);
                    }
                    else {
                        resolve(courses);
                    }
                });
    })
}

async function getUserCourses() {
    return new Promise((resolve, reject) => {
        window.gapi.client.classroom.courses
            .list({
                teacherId: "me",
            })
            .then(
                function (response) {
                    //convert respone to JS object
                    const courses = [];
                    const jsonResponse = JSON.parse(response.body).courses;
                    if (jsonResponse != null) {
                        jsonResponse.forEach((item) => {
                            if (item.section === 'Bootcamp.af') {
                                courses.push(item);
                            }
                        })
                        resolve(courses)
                    }
                    else {
                        resolve(courses)
                    }

                });
    })
};
async function createCourseInClassroom(name,
    description,
    descriptionHeading,
    PlaylistId) {
    return new Promise((resolve, reject) => {
        window.gapi.client.classroom.courses
            .create({
                resource: {
                    name: name,
                    descriptionHeading: descriptionHeading,
                    description: description,
                    ownerId: "me",
                    section: "Bootcamp.af",
                    room: PlaylistId,
                },
            })
            .then(
                function (response) {
                    //return the created course object
                    console.log(response)
                    resolve(response.result)

                })
    }
    )
}
async function joinCourse(id,
    enrollmentCode,
) {
    return new Promise((resolve, reject) => {
        window.gapi.client.classroom.courses.students
            .create({
                "courseId": id,
                "enrollmentCode": enrollmentCode,
                "resource": {
                    "userId": "me"
                }
            })
            .then(
                function (response) {
                    resolve(true)
                })
    }
    )
}
export { getUserEnrolledCourses, getUserCourses, createCourseInClassroom, joinCourse };
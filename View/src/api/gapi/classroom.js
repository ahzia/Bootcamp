async function getUserEnrolledCourses() {
    return new Promise((resolve, reject) => {
        window.gapi.client.classroom.courses
            .list({
                studentId: "me",
            })
            .then(
                function (response) {
                    const courses = [];
                    JSON.parse(response.body).courses.forEach((item) => {
                        if (item.section == 'Bootcamp.af') {
                            courses.push(item);
                        }
                    })
                    resolve(courses)
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
                    const courses = [];
                    JSON.parse(response.body).courses.forEach((item) => {
                        console.log(item);
                        if (item.section == 'Bootcamp.af') {
                            courses.push(item);
                        }
                    })
                    resolve(courses)
                });
    })
};
async function createCourseInClassroom(name,
    description,
    descriptionHeading,
    playListID) {
    return new Promise((resolve, reject) => {
        window.gapi.client.classroom.courses
            .create({
                resource: {
                    name: name,
                    descriptionHeading: descriptionHeading,
                    description: description,
                    ownerId: "me",
                    section: "Bootcamp.af",
                    room: playListID,
                },
            })
            .then(
                function (response) {
                    //return the created course object
                    resolve(response.result)
                })
    }
    )
}
export { getUserEnrolledCourses, getUserCourses ,createCourseInClassroom };
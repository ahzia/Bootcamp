import axios from 'axios'
const coursesEndpoint="https://us-central1-bootcampaf-1616570042819.cloudfunctions.net/api/courses"
async function getAllCourses() {
    return new Promise((resolve, reject) => {
        axios
            .get(coursesEndpoint)
            .then((response) => {
                console.log(response.data);
                resolve(response.data);
            })
    })
}
async function createCourseInDb(course) {
    axios.post(coursesEndpoint, {
        id: course.id,
        name: course.name,
        enrollmentCode: course.enrollmentCode,
        description: course.description,
        descriptionHeading: course.descriptionHeading,
        playlistId: course.room,
    })
        .then(function (response) {
            console.log(response);
        });
}
export { getAllCourses,createCourseInDb }


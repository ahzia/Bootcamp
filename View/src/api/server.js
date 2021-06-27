import axios from 'axios'
async function getAllCourses() {
    return new Promise((resolve, reject) => {
        axios
            .get('http://localhost:5000/bootcampaf-1616570042819/us-central1/api/courses')
            .then((response) => {
                console.log(response.data);
                resolve(response.data);
            })
    })
}
async function createCourseInDb(course) {
    axios.post('http://localhost:5000/bootcampaf-1616570042819/us-central1/api/courses', {
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


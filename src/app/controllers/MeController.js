const Course = require('../Models/Course')
const { multipleMongoeseToObject } = require('../../util/mongoese')

class MeController {
    //[GET] /stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then(courses => res.render('me/stored-courses', { courses: multipleMongoeseToObject(courses) }))
            .catch(next)

    }
}

module.exports = new MeController
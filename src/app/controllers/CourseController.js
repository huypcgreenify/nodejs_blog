const Course = require('../Models/Course')
const { mongoeseToObject } = require('../../util/mongoese')

class CourseController {
    //[GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course =>
                res.render('courses/show', { course: mongoeseToObject(course) })
            )
            .catch(next)
    }

}

module.exports = new CourseController
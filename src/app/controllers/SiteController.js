const Course = require('../Models/Course')
const { multipleMongoeseToObject } = require('../../util/mongoese')
class SiteController {

    index(req, res, next) {

        //Callbacks
        // Course.find({}, function (err, courses) {
        //     if (!err) {
        //         res.json(courses)
        //     } else {
        //         next(err);
        //     }
        // })

        //Promise
        Course.find({})
            .then(courses => {
                courses = multipleMongoeseToObject(courses)
                res.render('home', { courses })
            })
            .catch(err => next(err))

    }

    search(req, res) {
        res.render('search')
    }

}

module.exports = new SiteController
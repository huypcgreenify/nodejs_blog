const Course = require('../Models/Course')
const { multipleMongoeseToObject } = require('../../util/mongoese')

class MeController {
    //[GET] /stored/courses
    storedCourses(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) => //destructuring
                res.render('me/stored-courses', {
                    deletedCount,
                    courses: multipleMongoeseToObject(courses)
                })
            )
            .catch(next)
    }//Gộp 2 promisse ben dưới lên trên


    //         Course.countDocumentsDeleted()
    //             .then((deletedCount) => {
    //               console.log(deletedCount)
    //          })
    //             .catch (() => { })
    //          Course.find({})
    //              .then(courses => res.render('me/stored-courses', {
    //                   courses: multipleMongoeseToObject(courses)
    //                  }))
    //             .catch(next)
    //     }


    //[GET] /trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then(courses => res.render('me/trash-courses', {
                courses: multipleMongoeseToObject(courses)
            }),
            )
            .catch(next)

    }
}

module.exports = new MeController
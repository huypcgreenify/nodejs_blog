const newsRouter = require('./news')
const siteRouter = require('./site')

function route(app) {
    // Route --> dispatcher --> function handler
    app.use('/news', newsRouter)
    app.use('/', siteRouter)

    // app.post('/search', (req, res) => {
    //     console.log('post search: ' + JSON.stringify(req.body))
    //     res.send('')
    // })

}

module.exports = route
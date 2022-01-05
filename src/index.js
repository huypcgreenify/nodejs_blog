const express = require('express')

//DBMongo
const db = require('./config/db')
//Connect to DBMongo
db.connect()

//Handlebars import
const handlebars = require('express-handlebars')
const hbs = handlebars.create({
  extname: '.hbs',
  helpers: {
    sum: (a, b) => a + b,
  }
})
// end Handlerbars

const morgan = require('morgan')
const path = require('path')

//Route
const route = require('./routes')

//method override
const methodOverride = require('method-override')

//Start NodeJS
const app = express()
const port = 3000

//----------------------------------------------------
//Static files
app.use(express.static(path.join(__dirname, 'public')))

//HTTP logger
app.use(morgan('dev'))

//middleware xử lí gửi dữ liệu từ form
app.use(express.urlencoded({
  extended: true
}))

//middleware xử lí gửi dữ liệu từ js
app.use(express.json())

//method override
app.use(methodOverride('_method'))

//Template engine
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './resources/views'))
console.log('PATH: ', path.join(__dirname, 'resources', 'views'))

//Code route init
route(app)

//Server local
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})


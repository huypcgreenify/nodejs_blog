const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/H_education');
        console.log('Connect to database')
    } catch (error) {
        console.log('Error connecting to database')
    }
}

module.exports = { connect }
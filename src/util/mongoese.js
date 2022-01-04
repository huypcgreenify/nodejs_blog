module.exports = {

    multipleMongoeseToObject: function (mongooseArrays) {
        return mongooseArrays.map(mongooseArray => mongooseArray.toObject())
    },

    mongoeseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose
    },
}
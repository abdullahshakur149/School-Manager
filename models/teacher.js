const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true
    },

})


const Class = mongoose.model('Teacher', classSchema);

module.exports = Class;
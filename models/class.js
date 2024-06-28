const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },

    AssignedTeacher: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Teacher',
    },

})


const Class = mongoose.model('Class', classSchema);

module.exports = Class;
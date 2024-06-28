const mongoose = require('mongoose');

const timeTableSchema = new mongoose.Schema({
    classId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Class',
    },
    teacherId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Teacher',
    },
    dayOfWeek: {
        type: String,
        required: true,
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const TimeTable = mongoose.model('TimeTable', timeTableSchema);

module.exports = TimeTable;
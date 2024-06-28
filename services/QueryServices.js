const Teacher = require('../models/teacher')
const Class = require('../models/class')
const TimeTable = require('../models/timetable')

exports.getTeacher = async (req, res) => {
    try {
        let findTeacher = await Teacher.find();
        return findTeacher
    } catch (error) {
        return error;
    }
}

exports.generateTimeTable = async (req, res) => {
    try {
        let findClass = await Class.find();
        let findTeacher = await Teacher.find();
        return {
            classes: findClass,
            teachers: findTeacher
        };
    } catch (error) {
        return error;
    }
}


// services/QueryServices.js


exports.getTimeTable = async () => {
    try {
        const timetableData = await TimeTable.find()
            .populate('classId', 'name')
            .populate('teacherId', 'name');
        return timetableData;
    } catch (error) {
        return error;
    }
};

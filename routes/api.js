const express = require('express');
const { AddClass } = require('../controllers/ClassController');
const { AddTeacher } = require('../controllers/TeacherController');
const { AddTimeTable } = require('../controllers/timetableController');

const router = express.Router();

router.post('/addclass', AddClass)

router.post('/addteacher', AddTeacher)

router.post('/addtimetable', AddTimeTable)


module.exports = router;

const Teacher = require('../models/teacher')

exports.AddTeacher = async (req, res) => {
    const data = req.body;

    try {
        for (let field in data) {
            if (data[field] === '') {
                return res.status(400).json({ success: false, message: 'All fields are required' })
            }
        }

        const newTeacher = new Teacher(data);
        await newTeacher.save();
        res.status(200).json({ success: true, message: 'Teacher Added Successfully!' });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
};
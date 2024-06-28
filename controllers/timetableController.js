const TimeTable = require('../models/timetable');

exports.AddTimeTable = async (req, res) => {
    const data = req.body;

    try {
        for (let field in data) {
            if (data[field] === '') {
                return res.status(400).json({ success: false, message: 'All fields are required' });
            }
        }
        const timetable = new TimeTable(data);
        await timetable.save();
        res.status(200).json({ success: true, message: 'TimeTable Added Successfully!' });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};


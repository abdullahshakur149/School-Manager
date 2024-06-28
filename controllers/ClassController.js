const Class = require('../models/class')

exports.AddClass = async (req, res) => {
    const data = req.body;

    try {
        for (let field in data) {
            if (data[field] === '') {
                return res.status(400).json({ success: false, message: 'All fields are required' })
            }
        }
        const newClass = new Class(data);
        await newClass.save();
        res.status(200).json({ success: true, message: 'Class Added Successfully!' });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}
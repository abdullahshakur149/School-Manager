const bcrypt = require('bcrypt');
const User = require('../models/User');
const { upload, deleteFileMiddleware } = require('../middlewares/fileupload');

exports.registerUser = (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ success: false, message: 'File upload failed' });
        }

        const data = req.body;
        const file = req.file;

        try {
            // Check if all fields are filled
            for (const key in data) {
                if (data[key] === '') {
                    if (file) {
                        deleteFileMiddleware(req, res, () => { });
                    }
                    return res.status(400).json({ success: false, message: 'Fill in all fields' });
                }
            }

            // Check if email is already in use
            const emailExists = await User.findOne({ email: data.email });
            if (emailExists) {
                if (file) {
                    deleteFileMiddleware(req, res, () => { });
                }
                return res.status(400).json({ success: false, message: 'Email already in use' });
            }

            // Hash password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(data.password, salt);
            data.password = hashedPassword;

            // Check if file is uploaded
            if (!file) {
                return res.status(400).json({ success: false, message: 'Upload an image' });
            }

            data.image = file.filename;

            // Save data in MongoDB
            await User.create(data);
            return res.status(201).json({ success: true, message: 'User created successfully' });

        } catch (error) {
            console.log(error);
            return res.status(500).json({ success: false, message: 'Internal server error' });
        }
    });
};

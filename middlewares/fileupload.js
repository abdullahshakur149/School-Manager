const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Multer disk storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/uploads/'));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

// Multer instance with configured storage for single file upload
const upload = multer({ storage: storage }).single('image');

// Function to delete a file given its path
const deleteFile = (filePath) => {
    fs.unlink(filePath, (err) => {
        if (err) {
            // console.error('Error deleting file:', err);
        } else {
            // console.log('File deleted successfully');
        }
    });
};

const deleteFileMiddleware = (req, res, next) => {
    if (req.file) {
        // Delete the file if req.file exists (used in error handling in routes)
        deleteFile(req.file.path);
    }
    next(); // Proceed to the next middleware or route handler
};

module.exports = { upload, deleteFileMiddleware };

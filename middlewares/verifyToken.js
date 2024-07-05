const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        console.log('not verified')
    }


};

module.exports = authenticateToken;

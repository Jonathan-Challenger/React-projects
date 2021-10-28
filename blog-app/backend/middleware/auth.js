const config = require('config');
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    const token = req.header('x-auth-token');

    // Check for the token
    if(!token) {
        res.status(401).json({msg:"Invalid token, Access denied"})
    }

    // Verify token
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        // Add user from payload
        req.user = decoded;
        next();
    } catch (e) {
        res.status(400).json({msg: 'Token is not valid'})
    }
}

module.exports = auth;
const jwt = require('jsonwebtoken');
const Auth = require('../modals/auth');


const response = (res, code, message) => {
    res.status(code).send(message);
}

const verifyToken = async (token) => {
    if(token !== undefined) {
        console.log("hey, im going to verify token");
        let data = jwt.verify(token, process.env.PRIVATEKEY);
        let user = await Auth.count({_id: data});
        if(user> 0) {
            return true;
        }
    }
    return false;
}

const verifyUser = async (req, res, next) => {
    console.log("This is the cookie", req.cookies.bookstore);
    let val = await verifyToken(req.cookies.bookstore);
    if( val === true) {
        next();
    } else {
        res.status(400).json({message: 'Unauthorized. Access Denied'});
    }
}
exports.response = response;
exports.verifyUser = verifyUser;
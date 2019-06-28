

const response = (res, code, message) => {
    res.status(code).send(message);
}

exports.response = response;
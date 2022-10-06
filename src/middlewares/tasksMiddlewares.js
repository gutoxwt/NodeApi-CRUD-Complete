const validateBody = (req, res, next) => {
    const { body } = req;

    if (body.title == undefined) {
        return res.status(400).json({ message: 'The field "title" is required!'})
    } else if (body.title == '') {
        return res.status(400).json({ message: 'The field "title" can not be empty!'})
    } else {
        next()
    }
};

const validateStatus = (req, res, next) => { 

    const { body } = req;

    if (body.status == undefined) {
        return res.status(400).json({ message: 'The field "status" is required!'})
    } else if (body.status == '') {
        return res.status(400).json({ message: 'The field "status" can not be empty!'})
    } else {
        next()
    }
};

module.exports = {
    validateBody,
    validateStatus
}
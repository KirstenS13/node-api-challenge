const actionDb = require('../data/helpers/actionModel');

function validateActionId() {
    return (req, res, next) => {
        actionDb.get(req.params.actionId)
            .then(action => {
                if (action) {
                    req.action = action;
                    next();
                } else {
                    res.status(404).json({
                        message: "No action is associated with that ID."
                    });
                };
            })
            .catch(error => {
                next(error);
            });
    };
};

function validateActionBody() {
    return (req, res, next) => {
        if (!req.body) {
            res.status(400).json({
                message: "Missing action information"
            });
        } else if (!req.body.description || !req.body.notes) {
            res.status(400).json({
                message: "Missing description or notes information"
            });
        } else {
            next();
        };
    };
};

module.exports = {
    validateActionId,
    validateActionBody
};
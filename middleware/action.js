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

};

module.exports = {
    validateActionId,
    validateActionBody
};
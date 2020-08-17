const projectDb = require('../data/helpers/projectModel');

// validate project id
function validateProjectId() {
    return (req, res, next) => {
        projectDb.get(req.params.id)
            .then(project => {
                if (project) {
                    req.project = project;
                    next();
                } else {
                    res.status(404).json({
                        message: "No project is associated with that ID."
                    });
                };
            })
            .catch(error => {
                next(error);
            });
    };
};

// validate project body

module.exports = {
    validateProjectId
}
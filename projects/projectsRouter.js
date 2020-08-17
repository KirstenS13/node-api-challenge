// import express and helper
const express = require('express');
const project = require('../data/helpers/projectModel');

// create router
const router = express.Router();

// create endpoints
// get all projects - no body required
router.get("/", (req, res) => {
    project.get()
        .then(projects => {
            res.json(projects);
        })
        .catch(error => {
            next(error);
        });
});

// get project by id - id required
router.get("/:id", (req, res) => {
    project.get(req.params.id)
        .then(project => {
            res.json(project);
        })
        .catch(error => {
            next(error);
        });
});

// create new project - name & description (str) required, completed boolean optional

// update project - id, name & description (str) required, completed boolean optional

// delete project - id required

// export router
module.exports = router;
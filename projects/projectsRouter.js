// import express, helper, middleware
const express = require('express');
const project = require('../data/helpers/projectModel');
const { validateProjectId, validateProjectBody } = require('../middleware/project');

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
router.get("/:id", validateProjectId(), (req, res) => {
    res.json(req.project);
});

// create new project - name & description (str) required, completed boolean optional
router.post("/", validateProjectBody(), (req, res) => {
    project.insert(req.body)
        .then(newProject => {
            res.status(201).json(newProject);
        })
        .catch(error => {
            next(error);
        });
});

// update project - id, name & description (str) required, completed boolean optional
router.put("/:id", validateProjectBody(), validateProjectId(), (req, res) => {
    project.update(req.params.id, req.body)
        .then(updatedProject => {
            res.json(updatedProject);
        })
        .catch(error => {
            next(error);
        });
});

// delete project - id required
router.delete("/:id", validateProjectId(), (req, res) => {
    project.remove(req.params.id)
        .then(result => {
            if (result === 1) {
                res.json({
                    message: "Project successfully deleted"
                });
            } else {
                res.status(500).json({
                    message: "Something went wrong, please try again later."
                });
            };
        })
        .catch(error => {
            next(error);
        });
});

// export router
module.exports = router;
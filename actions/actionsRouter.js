// import express, helper, middleware
const express = require('express');
const action = require('../data/helpers/actionModel');
const { validateProjectId } = require('../middleware/project');
const { validateActionId, validateActionBody } = require('../middleware/action');

// create router
const router = express.Router();

// create endpoints
// get action by action id - proj id, action id req
router.get("/projects/:id/actions/:actionId", validateProjectId(), validateActionId(), (req, res) => {
    res.json(req.action);
});

// add action - proj id, action description & notes req
router.post("/projects/:id/actions", validateActionBody(), validateProjectId(), (req, res) => {
    action.insert(req.body)
        .then(newAction => {
            res.status(201).json(newAction);
        })
        .catch(error => {
            next(error);
        });
});

// update action - proj id, action id & description & notes req
router.put("/projects/:id/actions/:actionId", validateActionBody(), validateProjectId(), validateActionId(), (req, res) => {
    action.update(req.params.actionId, req.body)
        .then(updatedAction => {
            console.log(updatedAction);
            res.json(updatedAction);
        })
        .catch(error => {
            next(error);
        });
});

// delete action - proj id req

// export router
module.exports = router;
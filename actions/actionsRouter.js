// import express, helper, middleware
const express = require('express');
const project = require('../data/helpers/actionModel');
const { validateProjectId } = require('../middleware/project');
const { validateActionId, validateActionBody } = require('../middleware/action');

// create router
const router = express.Router();

// create endpoints
// get action by action id - proj id, action id req
router.get("/:actionId", validateProjectId(), validateActionId(), (req, res) => {
    res.json(req.action);
});

// add action - proj id, action description & notes req

// update action - proj id, action id & description & notes req

// delete action - proj id req

// export router
module.exports = router;
/*
play this: https://www.youtube.com/watch?v=d-diB65scQU

Sing along:

here's a little code I wrote, please read the README word for word, don't worry, you got this
in every task there may be trouble, but if you worry you make it double, don't worry, you got this
ain't got no sense of what is REST? just concentrate on learning Express, don't worry, you got this
your file is getting way too big, bring a Router and make it thin, don't worry, be crafty
there is no data on that route, just write some code, you'll sort it out… don't worry, just hack it…
I need this code, but don't know where, perhaps should make some middleware, don't worry, just hack it

Go code!
*/

// make server
// import express, routers, middleware
const express = require('express');
const logger = require('./middleware/logger');
const error = require('./middleware/error');
const projectsRouter = require('./projects/projectsRouter');
const actionsRouter = require('./actions/actionsRouter');

// define potential env variables
const port = 8000;

// create server
const server = express();

// add middleware
server.use(express.json());
server.use(logger());
server.use(error());

// bring in routers
server.use('/projects', projectsRouter);
server.use(actionsRouter);

// welcome endpoint
server.get("/", (req, res) => {
    res.json({
        message: "Hi, it's me the server. I'm working."
    });
});

// start the server
server.listen(port, () => {
    console.log("Server running on http://localhost:8000/");
});
/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");

/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";

/**
 * App Configuration
 */
//parse application/json
app.use(bodyParser.json());

/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
    res.status(200).send("Hi! My name is Ariga");
});

app.get('/listUsers', (req, res) => {
    fs.readFile(`${__dirname}/users.json`, 'utf8', (err, data) => {
        console.log(data);
        res.end(data);
    });
});

app.post('/addUser', (req, res) => {
    //prepare output in JSON format
    user4 = {
        name: req.body.name,
        password: req.body.password,
        proffesion: req.body.profession,
        id: req.body.id
    };
    fs.readFile(`${__dirname}/users.json`, 'utf8', (err, data) => {
        data = JSON.parse(data);
        data["user4"] = user4;
        console.log(data);
        res.end(JSON.stringify(data));
    });
})

app.get('/:id', (req, res) => {
    //First read exsisting users
    fs.readFile(`${__dirname}/users.json`, 'utf8', (err, data) => {
        const users = JSON.parse(data);
        const user = users[`user${req.params.id}`];
        console.log(user);
        res.end(JSON.stringify(user));
    })
})

app.delete('/:id', (req, res) => {
    //First read exsisting users
    fs.readFile(`${__dirname}/users.json`, 'utf8', (err, data) => {
        data = JSON.parse(data);
        delete data[`user${req.params.id}`];

        console.log(data);
        res.end(JSON.stringify(data));
    })
})

/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
})
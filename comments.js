//Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Add cors and body-parser middleware to express
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Add comments to the server
const comments = [
    {
        username: 'Todd',
        comment: 'This is the first comment'
    },
    {
        username: 'Bob',
        comment: 'This is the second comment'
    },
    {
        username: 'Tom',
        comment: 'This is the third comment'
    },
    {
        username: 'John',
        comment: 'This is the fourth comment'
    },
    {
        username: 'Ben',
        comment: 'This is the fifth comment'
    }
];

// GET request - get all comments
app.get('/comments', (req, res) => {
    res.send(comments);
});

// POST request - add a new comment
app.post('/comments', (req, res) => {
    comments.push(req.body);
    res.send(comments);
});

// DELETE request - delete a comment
app.delete('/comments/:index', (req, res) => {
    comments.splice(req.params.index, 1);
    res.send(comments);
});

// PUT request - update a comment
app.put('/comments/:index', (req, res) => {
    comments[req.params.index] = req.body;
    res.send(comments);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

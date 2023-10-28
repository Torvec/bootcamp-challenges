// File system module for reading and writing files
const fs = require('fs');
// NPM package that creates unique ids for each note
const uuid = require('uuid');
// Path module for working with file and directory paths
const path = require('path'); 
// NPM package for creating an Express.js server
const express = require('express'); 
// creates an Express.js server
const app = express();
// JSON file that contains all the notes
const JSONnotes = require('./db/db.json');

// process.env.PORT is for Heroku deployment since Heroku assigns a random port and 3001 is for local deployment
const PORT = process.env.PORT || 3001;

// Middleware for static files and parsing JSON data
app.use(express.static('public'));
app.use(express.json());

// HTML route that sends the user to the index.html page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

// HTML route that sends the user to the notes.html page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

// API that reads the db.json file and returns all saved notes as JSON
app.get('/api/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    res.json(notes);
});

// Receives a new note to save on the request body, adds it to the db.json file, and then returns the new note to the client
app.post('/api/notes', (req, res) => {
    // Destructuring assignment for the items in req.body
    const {title, text} = req.body;
    // If the title and text values exist, then a new note is created
    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuid.v4(),
        };
        // Adds the new note to the JSON array
        JSONnotes.push(newNote);
        // Writes the new note to the db.json file
        fs.writeFileSync('./db/db.json', JSON.stringify(JSONnotes, null, 4));
        // Returns the new note to the client
        res.json(JSONnotes);
    }
});

// Deletes the note with the given id property
app.delete('/api/notes/:id', (req, res) => {
    // Gets the id of the note to delete
    const noteID = req.params.id;
    // Finds the note with the given id property
    const deleteThisNote = JSONnotes.find((note) => note.id === noteID);
    // Deletes the note with the given id property from the JSON array
    JSONnotes.splice(deleteThisNote, 1);
    // Writes the new note to the db.json file
    fs.writeFileSync('./db/db.json', JSON.stringify(JSONnotes, null, 4));
    // Returns the new note to the client
    res.json(JSONnotes);
});

// Takes you to the index.html page if you type in a wrong url by using the wildcard * symbol. Has to be AFTER all other routes or it will override the other VALID routes
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Starts the server to begin listening
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
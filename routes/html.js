const express = require("express").Router();
const path = require('path');

// GET * to return the index.html
express.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

// GET /notes to return notes.html file
express.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

module.exports=express 
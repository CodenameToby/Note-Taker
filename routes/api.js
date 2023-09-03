const router = require("express").Router();
const path = require('path');

const fs = require("fs");
let db = require("../db/db.json");


// GET /api/notes to read the db.json file 
// and return all saved notes as JSON




// POST /api/notes to receive a new note to save on request body.
// Then dd it to the db.json file, then return new note to client
// give each a unique id when saved (npm packages will do this)



module.exports=router 
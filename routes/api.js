const app = require("express").Router();
let db = require("../db/db.json");
const fs = require("fs");

const generateUniqueId = require('generate-unique-id');
const id2 = generateUniqueId({
    length: 6,
    useLetters: false
  });

// GET /api/notes to read the db.json file 
// and return all saved notes as JSON
app.get("/api/notes",(req, res)=>{
    db = JSON.parse(fs.readFileSync(".db/db.json")) || []
    res.json(db)
  });

// POST /api/notes to receive a new note to save on request body.
// Then dd it to the db.json file, then return new note to client
// give each a unique id when saved 
// (npm package generateUniqueID will do this)
app.post("/api/notes",(req, res) => {
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: id1,
    }
    db.push(newNote)
    fs.writeFileSync("./db/db.json", JSON.stringify(db),function(err){
        if(err) throw err 
    })
    res.json(db)
});


module.exports=app 
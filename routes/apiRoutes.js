const express = require("express");
const router = express.Router();
const uuid = require("../helpers/uuid.js");
const notes = require("../db/db.json");
const fs = require("fs");

router.get("/notes", (req, res) => {
  res.json(notes);
});

router.post("/notes", (req, res) => {
  const newNote = {
    id: uuid(),
    title: req.body.title,
    text: req.body.text,
  };
  notes.push(newNote);
  fs.writeFileSync(__dirname + "/../db/db.json", JSON.stringify(notes));
  res.json(newNote);
});

router.delete("/notes/:id", (req, res) => {
  const noteId = req.params.id;
  const index = notes.findIndex((note) => note.id === noteId);

  if (index !== -1) {
    notes.splice(index, 1);
    fs.writeFileSync(__dirname + "/../db/db.json", JSON.stringify(notes));
    res.json({ success: true });
  } else {
    res.status(404).json({ success: false });
  }
});

module.exports = router;

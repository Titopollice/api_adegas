// routes/usuario.js
const express = require("express");
const router = express.Router();
const Usuario = require("../models/UsuarioModel");

router.get("/", (req, res) => {
  Usuario.getAll((err, results) => {
    if (err) res.status(500).json({ error: err.message });
    else res.json(results);
  });
});

router.get("/:id", (req, res) => {
  Usuario.getById(req.params.id, (err, result) => {
    if (err) res.status(500).json({ error: err.message });
    else res.json(result);
  });
});

router.post("/", (req, res) => {
  Usuario.create(req.body, (err, result) => {
    if (err) res.status(500).json({ error: err.message });
    else res.json({ id: result.insertId });
  });
});

router.put("/:id", (req, res) => {
  Usuario.update(req.params.id, req.body, (err, result) => {
    if (err) res.status(500).json({ error: err.message });
    else res.json({ affectedRows: result.affectedRows });
  });
});

router.delete("/:id", (req, res) => {
  Usuario.delete(req.params.id, (err, result) => {
    if (err) res.status(500).json({ error: err.message });
    else res.json({ affectedRows: result.affectedRows });
  });
});

module.exports = router;

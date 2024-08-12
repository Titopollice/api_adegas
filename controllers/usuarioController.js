// controllers/usuarioController.js
const db = require("../db");

exports.getAllUsuarios = (req, res) => {
  db.query("SELECT * FROM usuario", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getUsuarioById = (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM usuario WHERE usuarioID = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
};

exports.createUsuario = (req, res) => {
  const { usarioLogin, senha, tipoUsuario_idtipoUsuario } = req.body;
  db.query(
    "INSERT INTO usuario (usarioLogin, senha, tipoUsuario_idtipoUsuario) VALUES (?, ?, ?)",
    [usarioLogin, senha, tipoUsuario_idtipoUsuario],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: result.insertId });
    }
  );
};

exports.updateUsuario = (req, res) => {
  const { id } = req.params;
  const { usarioLogin, senha, tipoUsuario_idtipoUsuario } = req.body;
  db.query(
    "UPDATE usuario SET usarioLogin = ?, senha = ?, tipoUsuario_idtipoUsuario = ? WHERE usuarioID = ?",
    [usarioLogin, senha, tipoUsuario_idtipoUsuario, id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "Usuario updated successfully" });
    }
  );
};

exports.deleteUsuario = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM usuario WHERE usuarioID = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Usuario deleted successfully" });
  });
};

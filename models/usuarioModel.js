// models/Usuario.js
const db = require("../db");

class Usuario {
  static getAll(callback) {
    db.query("SELECT * FROM usuario", callback);
  }

  static getById(id, callback) {
    db.query("SELECT * FROM usuario WHERE usuarioID = ?", [id], callback);
  }

  static create(data, callback) {
    db.query(
      "INSERT INTO usuario (usarioLogin, senha, tipoUsuario_idtipoUsuario) VALUES (?, ?, ?)",
      [data.usarioLogin, data.senha, data.tipoUsuario_idtipoUsuario],
      callback
    );
  }

  static update(id, data, callback) {
    db.query(
      "UPDATE usuario SET usarioLogin = ?, senha = ?, tipoUsuario_idtipoUsuario = ? WHERE usuarioID = ?",
      [data.usarioLogin, data.senha, data.tipoUsuario_idtipoUsuario, id],
      callback
    );
  }

  static delete(id, callback) {
    db.query("DELETE FROM usuario WHERE usuarioID = ?", [id], callback);
  }
}

module.exports = Usuario;

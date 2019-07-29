const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nombre_1: String,
    nombre_2: String,
    apellido_1: String,
    apellido_2: String,
    usuario: String,
    password: String,
    correo: String,
    id_coins: [
        {
            type: Schema.Types.ObjectId,
            ref: "Coins"
        }
    ],
    id_nivelescurso: [
        {
            type: Schema.Types.ObjectId,
            ref: "Nivelescursos"
        }
    ]
});

var Usuarios = mongoose.model("Usuarios", userSchema);
module.exports = Usuarios;
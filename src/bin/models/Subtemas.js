const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subSchemas = new Schema({
    titulo: String,
    descripcion: String,
    id_tema: {
        type: Schema.Types.ObjectId,
        ref: "Temas"
    }
})

var Subtemas = mongoose.model('Subtemas', subSchemas);
module.exports = Subtemas;
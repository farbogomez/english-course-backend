const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const temaSchema = new Schema({
    titulo: String,
    descripcion: String,
    id_nivelcurso: {
        type: Schema.Types.ObjectId,
        ref: "Nivelescursos"
    }
})

var Temas = mongoose.model('Temas', temaSchema);
module.exports = Temas;
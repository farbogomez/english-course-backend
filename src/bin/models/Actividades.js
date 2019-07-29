const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const actSchemas = new Schema({
    proposito: String,
    descripcion: String,
    id_subtema: {
        type: Schema.Types.ObjectId,
        ref: "Subtemas"
    }
})

var Actividades = mongoose.model('Actividades', actSchemas);
module.exports = Actividades;
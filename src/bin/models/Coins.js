const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coinSchema = new Schema({
    cantidad: Number,
    id_usuarios: [
        {
            type: Schema.Types.ObjectId,
            ref: "Usuarios"
        }
    ]
});

var Coins = mongoose.model("Coins", coinSchema);
module.exports = Coins;
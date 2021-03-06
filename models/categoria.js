const { Schema, model } = require("mongoose");

const CategoriaSchema = new Schema({
    nombre: {
        type: String,
        required: [true, "El nombre es obligatorio"],
        unique: true
    },
    estado: {
        type: Boolean,
        default: true,
        required:true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
});

CategoriaSchema.methods.toJSON = function () {
    const { __v, estado, ...categoria } = this.toObject(); // desestructura el objeto
    return categoria; 
};


module.exports = model("Categoria", CategoriaSchema);
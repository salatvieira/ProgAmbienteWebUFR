import mongoose from "mongoose";
import "@/db";

var Schema = mongoose.Schema;

var ProdutoSchema = new Schema(
    {
        nome: String,
        quantidade: Number,
        categoria_id: { type: Schema.ObjectId, ref: "Categoria"  }
    },
    {  collection: "produtos", versionKey: false }
);

export const Produto = mongoose.models.Produto || 
    mongoose.model("Produto", ProdutoSchema);
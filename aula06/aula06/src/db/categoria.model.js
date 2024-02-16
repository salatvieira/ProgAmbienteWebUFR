import mongoose from "mongoose";
import "@/db";

var Schema = mongoose.Schema;

var CategoriaSchema = new Schema(
    {
        nome: String,
        sigla: String
    },
    {  collection: "categorias", versionKey: false }
);

export const Categoria = mongoose.models.Categoria || 
    mongoose.model("Categoria", CategoriaSchema);
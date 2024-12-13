import {Schema, model}from "mongoose";

export const EsquemaGeneral = new Schema({
    Cual_es_tu_nombre:{
        type:String
    },
    Cual_es_tu_apellido:{
        type:String
    },
    Cual_es_tu_edad :{
        type:Number
    },
    Cual_es_tu_correo:{
        type:String
    },
})

export const modeloCuestionarios = new model("Tabla de Cuestionarios",EsquemaGeneral)
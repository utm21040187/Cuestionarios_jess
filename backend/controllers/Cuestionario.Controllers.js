import { modeloCuestionarios } from "../models/Cuestionario.Models.js";

modeloCuestionarios.create({
    Cual_es_tu_nombre :"Jessica",
    Cual_es_tu_apellido:"Esparza",
    Cual_es_tu_edad:21,
    Cual_es_tu_correo:"utm21040187@utma.edu.mx"
})

export const testCuestionario=()=>{
    console.log("Funciona el controlador")
}
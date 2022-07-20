import { Router }  from "express";
import {  createUsuario, deleteUsuario, getUsuario, getUsuarios, updateUsuario } from "../controllers/Usuario";

const router = Router();

//Listas todos los pacientes
router.get('/usuarios', getUsuarios);

//Listar un paciente
router.get('/usuarios/:id', getUsuario);


//Crear paciente
router.post('/usuarios', createUsuario);

//Eliminar Paciente
router.delete('/usuarios/:id', deleteUsuario);

//Modificar Paciente
router.put('/usuarios/:id', updateUsuario);



export default router;
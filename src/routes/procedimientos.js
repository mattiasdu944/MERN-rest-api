import { Router }  from "express";
import {  createProcedimiento, deleteProcedimiento, getProcedimiento, getProcedimientos, updateProcedimiento } from "../controllers/Procedimiento";

const router = Router();

//Listas todos los pacientes
router.get('/procedimientos', getProcedimientos);

//Listar un paciente
router.get('/procedimientos/:id', getProcedimiento);

//Crear paciente
router.post('/procedimientos', createProcedimiento);

//Eliminar Paciente
router.delete('/procedimientos/:id', deleteProcedimiento);

//Modificar Paciente
router.put('/procedimientos/:id', updateProcedimiento);



export default router;
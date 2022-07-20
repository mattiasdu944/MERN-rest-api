import { Router }  from "express";
import { getPaciente, getPacientes, createPaciente, deletePaciente, updatePaciente } from "../controllers/Paciente";

const router = Router();

//Listas todos los pacientes
router.get('/pacientes', getPacientes);

//Listar un paciente
router.get('/pacientes/:id', getPaciente);

//Crear paciente
router.post('/pacientes', createPaciente);

//Eliminar Paciente
router.delete('/pacientes/:id', deletePaciente);

//Modificar Paciente
router.put('/pacientes/:id', updatePaciente);



export default router;
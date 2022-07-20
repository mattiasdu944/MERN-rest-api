import { connect } from "../database";


//LISTAR TODOS LOS PACIENTES
export const getPacientes = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query("SELECT * FROM pacientes ORDER BY paterno");
        res.json(rows);

    } catch (error) {
        res.json('Error en el servidor: ' + error.message);
    }
}

//LISTAR UN SOLO PACIENTE
export const getPaciente = async (req, res) => {
    try {
        const id = req.params.id;
        const connection = await connect()
        const [rows] = await connection.query("SELECT * FROM pacientea WHERE ci = ?", [id]);
        console.log(rows[0]);
        res.json(rows[0]);
        
    } catch (error) {
        res.json('Error en el servidor: ' + error.message);
    }
}

//CREAR UN NUEVO PACIENTE
export const createPaciente = async (req, res) => {
    const ci = req.body.ci;
    const nombres = req.body.nombres;
    const paterno = req.body.paterno;
    const materno = req.body.materno;
    const correo = req.body.correo;
    const telefono = req.body.telefono;
    const edad = req.body.edad;

    try {
        const connection = await connect()
        const [results] = await connection.query("INSERT INTO pacientes(ci, nombres, paterno, materno, correo, telefono, edad) VALUES (?,?,?,?,?,?,?)",[ci, nombres, paterno, materno, correo, telefono, edad]);
        res.json({
          ...req.body
        });
        
    } catch (error) {
        res.json('Error en el servidor:' + error.message);

    }
}

//ELIMINAR UN PACIENTE
export const deletePaciente = async (req, res) => {
    try {
        const id = req.params.id
        const connection = await connect()
        const results = await connection.query("DELETE FROM pacientes WHERE ci = ?", [id]);
        res.sendStatus(204);
        
    } catch (error) {
        res.json('Error en el servidor:' + error.message);
    }

}

//MODIFICAR UN PACIENTE
export const updatePaciente = async (req, res) => {

    try {
        const id = req.params.id;
        const connection = await connect()
        const results = await connection.query("UPDATE pacientes SET ? WHERE ci = ?",[
          req.body, id
        ]);
        res.sendStatus(204);
        
    } catch (error) {
        res.json('Error en el servidor:' + error.message);
    }
}


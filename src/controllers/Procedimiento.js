import { connect } from "../database";


//LISTAR TODOS LOS PACIENTES
export const getProcedimientos = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query("SELECT * FROM procedimiento");
        res.json(rows);

    } catch (error) {
        res.json('Error en el servidor: ' + error.message);
    }
}

//LISTAR UN SOLO ROCEDIMIENTO
export const getProcedimiento = async (req, res) => {
    try {
        const id = req.params.id;
        const connection = await connect()
        const [rows] = await connection.query("SELECT * FROM procedimiento WHERE id = ?", [id]);
        console.log(rows[0]);
        res.json(rows[0]);
        
    } catch (error) {
        res.json('Error en el servidor: ' + error.message);
    }
}

//CREAR UN NUEVO PACIENTE
export const createProcedimiento = async (req, res) => {
    const tipo_procedimiento = req.body.tipo_procedimiento;
    const estado = req.body.estado;
    const costo = req.body.costo;

    try {
        const connection = await connect()
        const [results] = await connection.query("INSERT INTO procedimiento(tipo_procedimiento, estado, costo) VALUES (?,?,?)",[tipo_procedimiento, estado, costo]);
        res.json({
          ...req.body
        });
        
    } catch (error) {
        res.json('Error en el servidor:' + error.message);

    }
}

//ELIMINAR UN PACIENTE
export const deleteProcedimiento = async (req, res) => {
    try {
        const id = req.params.id
        const connection = await connect()
        const results = await connection.query("DELETE FROM procedimiento WHERE id = ?", [id]);
        res.sendStatus(204);
        
    } catch (error) {
        res.json('Error en el servidor:' + error.message);
    }

}

//MODIFICAR UN PACIENTE
export const updateProcedimiento = async (req, res) => {

    try {
        const id = req.params.id;
        const connection = await connect()
        const results = await connection.query("UPDATE procedimiento SET ? WHERE id = ?",[
          req.body, id
        ]);
        res.sendStatus(204);
        
    } catch (error) {
        res.json('Error en el servidor:' + error.message);
    }
}


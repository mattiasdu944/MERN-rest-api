import { connect } from "../database";


//LISTAR TODOS LOS PACIENTES
export const getUsuarios = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query("SELECT * FROM usuarios");
        res.json(rows);

    } catch (error) {
        res.json('Error en el servidor: ' + error.message);
    }
}

//LISTAR UN SOLO PACIENTE
export const getUsuario = async (req, res) => {
    try {
        const id = req.params.id;
        const connection = await connect()
        const [rows] = await connection.query("SELECT * FROM usuarios WHERE id = ?", [id]);
        console.log(rows[0]);
        res.json(rows[0]);
        
    } catch (error) {
        res.json('Error en el servidor: ' + error.message);
    }
}

//CREAR UN NUEVO PACIENTE
export const createUsuario = async (req, res) => {
    const nombres = req.body.nombres;
    const paterno = req.body.paterno;
    const materno = req.body.materno;
    const correo = req.body.correo;
    const password = req.body.password;
    const rol = req.body.rol;

    try {
        const connection = await connect()
        const [results] = await connection.query("INSERT INTO usuarios(nombres, paterno, materno, correo, password, rol) VALUES (?,?,?,?,?,?,?)",[ nombres, paterno, materno, correo, password, rol]);
        res.json({
          ...req.body
        });
        
    } catch (error) {
        res.json('Error en el servidor:' + error.message);

    }
}

//ELIMINAR UN PACIENTE
export const deleteUsuario = async (req, res) => {
    try {
        const id = req.params.id
        const connection = await connect()
        const results = await connection.query("DELETE FROM usuarios WHERE id = ?", [id]);
        res.sendStatus(204);
        
    } catch (error) {
        res.json('Error en el servidor:' + error.message);
    }

}

//MODIFICAR UN PACIENTE
export const updateUsuario = async (req, res) => {

    try {
        const id = req.params.id;
        const connection = await connect()
        const results = await connection.query("UPDATE usuarios SET ? WHERE id = ?",[
          req.body, id
        ]);
        res.sendStatus(204);
        
    } catch (error) {
        res.json('Error en el servidor:' + error.message);
    }
}


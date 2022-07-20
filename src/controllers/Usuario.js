import { connect } from "../database";


//Enlista a todos los usuraios
export const getUsuarios = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query("SELECT * FROM usuarios;");
        console.log(rows)
        res.json(rows);
        
    } catch (error) {
        console.log(error);
    }
}


//Obtiene a solo un usuario
export const getUsuario = async (req, res) => {
    const id = req.params.id;
    const connection = await connect()
    const [rows] = await connection.query("SELECT * FROM usuario WHERE id = ?", [id]);
    console.log(rows[0]);
    res.json(rows[0]);
}

//Permite crear a un usuario
export const createUsuario = async (req, res) => {
  
    const nombres = req.body.nombres;
    const paterno = req.body.paterno;
    const materno = req.body.materno;
    const correo = req.body.correo;
    const password = req.body.password;
    const rol = req.body.rol;

    const connection = await connect()
    const [results] = await connection.query("INSERT INTO usuarios(nombres, paterno, materno, correo, password, rol) VALUES (?,?,?,?,?,?)",[nombres, paterno, materno, correo, password, rol]);
    res.json({
      ...req.body
    });
}

//Elimina a solo un usuario de la base de datos
export const deleteUsuario = async (req, res) => {
    const id = req.params.id
    const connection = await connect()
    const results = await connection.query("DELETE FROM usuarios WHERE id = ?", [id]);
    res.sendStatus(204);

}

//Actualiza los datos de un usuario
export const updateUsuario = async (req, res) => {
    const id = req.params.id;
    const connection = await connect()
    const results = await connection.query("UPDATE usuarios SET ? WHERE id = ?",[
      req.body, id
    ]);
    res.sendStatus(204);
}



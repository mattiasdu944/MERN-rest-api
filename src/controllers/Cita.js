import { connect } from "../database";

export const getCitas = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query("SELECT c.id ,c.fecha, c.hora_atencion, c.paciente, c.consultorio, c.procedimiento, p.nombres, p.paterno , p.materno, p.telefono, co.direccion, pro.tipo_procedimiento FROM citas as c INNER JOIN pacientes as p  ON c.paciente = p.ci INNER JOIN consultorio as co ON c.consultorio = co.id INNER JOIN procedimiento as pro ON c.procedimiento = pro.id");
    console.log(rows);
    res.json(rows);
}

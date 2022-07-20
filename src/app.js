import express from 'express';
import cors from 'cors';
import morgan from "morgan"

import pacientesRoutes from './routes/pacientes'
import usuariosRoutes from './routes/usuarios'

const app = express();

app.use(express.json());

app.use(cors());
app.use(morgan("dev"));
app.use(pacientesRoutes,usuariosRoutes);

export default app;
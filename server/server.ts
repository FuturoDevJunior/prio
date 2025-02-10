import './websocket/ws.server';
import express from 'express';
// Corrigido o caminho de importação e adicionado tipo explícito
import { login } from './auth/auth.controller.js'; // Mantemos a extensão .js para ES Modules
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(express.static('public'));
app.post('/api/login', login);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor rodando na porta ${port} - Powered by DevFerreiraG`));
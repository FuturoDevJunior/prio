import './websocket/ws.server';
import express from 'express';
import { login } from './auth/auth.controller';
const app = express();
app.use(express.json());
app.post('/api/login', login);
app.listen(3000, () => console.log('Servidor rodando na porta 3000'));

import express from 'express';
import cors from 'cors';
import path from 'path';
import helmet from 'helmet';
import compression from 'compression';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Middlewares atualizados
app.use(cors());
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"]
    }
  }
}));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos corrigido
app.use(express.static(path.join(__dirname, '../../public')));

// Endpoint de tarefas mockado
app.get('/api/tasks', (req, res) => {
  res.json([
    { id: 1, task: 'Configurar ambiente', priority: 'alta' },
    { id: 2, task: 'Implementar CI/CD', priority: 'crítica' }
  ]);
});

// Error handling melhorado
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(`[${new Date().toISOString()}] Error: ${err.message}`);
  res.status(500).json({ 
    error: 'Erro interno do servidor',
    message: process.env.NODE_ENV === 'development' ? err.message : null
  });
});

// Original listen call replaced for Vercel deployment
if (!process.env.VERCEL) {
  app.listen(port, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${port}`);
  });
}
export default app; 
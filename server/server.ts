import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

// Serve arquivos estáticos a partir da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Exemplo de endpoint para verificação
app.get('/api/health', (req: express.Request, res: express.Response): void => {
  res.json({ status: 'OK' });
});

app.get('/', (req, res) => {
  res.send('Servidor funcionando corretamente!');
});

app.listen(port, (): void => {
  console.log(`Servidor executando na porta ${port}`);
}); 
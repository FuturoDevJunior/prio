import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Servir arquivos estáticos do diretório public
app.use(express.static(path.join(__dirname, '../public')));

// Redirecionar todas as rotas para index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Exemplo de endpoint para verificação
app.get('/api/health', (req: express.Request, res: express.Response): void => {
  res.json({ status: 'OK' });
});

app.get('/', (req, res) => {
  res.send('Servidor funcionando corretamente!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 
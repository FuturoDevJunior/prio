"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Servir arquivos estáticos do diretório public
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
// Redirecionar todas as rotas para index.html
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public/index.html'));
});
// Exemplo de endpoint para verificação
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK' });
});
app.get('/', (req, res) => {
    res.send('Servidor funcionando corretamente!');
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//# sourceMappingURL=server.js.map
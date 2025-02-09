"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Serve arquivos estáticos a partir da pasta "public"
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// Exemplo de endpoint para verificação
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK' });
});
app.get('/', (req, res) => {
    res.send('Servidor funcionando corretamente!');
});
app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`);
});
//# sourceMappingURL=server.js.map
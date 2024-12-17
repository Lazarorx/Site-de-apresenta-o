const express = require('express'); // Importa o Express
const path = require('path'); // Permite manipular caminhos de arquivos

const app = express(); // Inicializa o servidor
const PORT = 3000; // Define a porta do servidor

// Middleware para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota de exemplo
app.get('/api/sobre', (req, res) => {
  res.json({
    nome: "Lázaro Xavier",
    ocupacao: "Engenharia de Software | Desenvolvimento Web",
    objetivo: "Criar soluções eficientes com tecnologias Fullstack"
  });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});


import express from "express";
const app = express();
const port = 5000;


import {
  buscarUsuarios,
  criarUsuario,
} from "./controllers/usuarioController.js";

import {
  buscarLivros,
  criarLivros,
  buscarLivroPorId,
  atualizarLivro,
  deletarLivro,
} from "./controllers/livroController.js";


//Ler o body e transforma-lo em JSON
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

import cors from "cors";

// Configuração das opções de CORS
const corsOptions = {
  // origin: "*", // Permite todas as origens (em ambiente de desenvolvimento)
  origin: "http://localhost:5173",
  credentials: true, // Permite envio de cookies/autenticação
  optionsSuccessStatus: 200, // Para compatibilidade com navegadores antigos
};

// Aplica o middleware CORS com as opções definidas
app.use(cors(corsOptions));


// Rota para usuarios
// Buscar
app.get("/usuarios", buscarUsuarios);
// Inserir
app.post("/usuarios", criarUsuario);

// Rota para livros
// Rota para buscar livros
app.get("/livros", buscarLivros);
// Rota para criação do livro
app.post("/livros", criarLivros);
// Rota para selecionar um livro
app.get("/livros/:id", buscarLivroPorId);
// Rota para atualizar um livro
app.put("/livros/:id", atualizarLivro);
// Rota para deletar um livro
app.delete("/livros/:id", deletarLivro);


app.get("/", (req, res) => {
  res.status(200);
  res.end();
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
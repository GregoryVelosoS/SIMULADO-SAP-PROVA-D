import conn from "../conexao.js"; // Importa a conexão do banco de dados

export const buscarLivros = async (req, res) => {
  const sql = `SELECT * FROM livros`;

  conn.query(sql, (erro, dados) => {
    if (erro) {
      console.log(erro);
    } else {
      res.json(dados);
      res.end();
    }
  });
};

export const criarLivros = async (req, res) => {
  const titulo = req.body.titulo;
  const autor = req.body.autor;
  const genero = req.body.genero;
  const status = req.body.status;
  const usuario = req.body.usuario;

  const sql = `INSERT INTO livros (titulo, autor, genero, status, usuario ) 
               VALUES ('${titulo}', '${autor}', '${genero}', '${status}', '${usuario}')`;

  conn.query(sql, (erro) => {
    if (erro) {
      console.log(erro);
      res.status(500).json(erro.sqlMessage).end();
    } else {
      res.status(200).json("Cadastro de livro efetuado").end();
    }
  });
};

export const buscarLivroPorId = (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM livros WHERE id = '${id}' `;

  conn.query(sql, (erro, dados) => {
    if (erro) {
      console.log(erro);
    } else {
      res.json(dados[0]);
      res.end();
    }
  });
};

export const atualizarLivro = (req, res) => {
  const id = req.params.id;
  const titulo = req.body.titulo;
  const autor = req.body.autor;
  const genero = req.body.genero;
  const status = req.body.status;
  const usuario = req.body.usuario;

  const sql = `UPDATE livros SET titulo = '${titulo}', autor = '${autor}', genero = '${genero}', status = '${status}', usuario = '${usuario}' WHERE id = '${id}' `;

  conn.query(sql, (erro) => {
    if (erro) {
      console.log(erro);
      res.status(500).end();
    } else {
      res.status(200).end();
    }
  });
};

export const deletarLivro = (req, res) => {
  const id = req.params.id;

  const sql = `DELETE FROM livros WHERE id = '${id}'`;

  conn.query(sql, (erro, result) => {
    if (erro) {
      console.log(erro);
      res.status(500).json(erro.sqlMessage).end();
    } else {
      res.status(200).json(JSON.stringify(result)).end();
    }
  });
};

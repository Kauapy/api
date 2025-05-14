const {
  getTodosLivros,
  getLivroPorId,
  insereLivro,
  modificaLivro,
  deletarLivroPorId,
} = require("../servicos/livros");

function getLivros(req, res) {
  try {
    const livros = getTodosLivros();
    res.send(livros);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function getLivro(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      return res.status(400).send("ID deve ser um número");
    } else {
      res.status(422);
      res.send("ID inválido");
    }

    const livro = getLivroPorId(id);

    if (!livro) {
      return res.status(404).send(`Livro com ID ${id} não encontrado`);
    }
    res.send(livro);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function postLivro(req, res) {
  try {
    const livroNovo = req.body;

    if(req.body.nome){
      insereLivro(livroNovo);
      res.status(201);
      res.send("Livro inserido com sucesso");

    }else{
      res.status(422).send("O campo nome é obrigatório")
    }

  } catch (error) {
    res.status(500).send(error.message);
  }
}

function patchLivro(req, res) {
  try {
    const id = parseInt(req.params.id);

    if (id && Number(id)) {
      const body = req.body;
      modificaLivro(body, id);
      res.send("Item modificado com sucesso");
    } else{
      res.status(422).send("ID inválido");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function deleteLivro(req, res) {
  try {
    const id = parseInt(req.params.id);

    if(id && Number(id)){
      deletarLivroPorId(id);
      res.send("Item deletado com sucesso");
    }else{
      res.status(422).send("ID inválido")
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  getLivros,
  getLivro,
  postLivro,
  patchLivro,
  deleteLivro,
};

const { getTodosLivros, getLivroPorId } = require("../servicos/livros"); 

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
    const livro = getLivroPorId(id);
    
    if (!livro) {
      return res.status(404).send(`Livro com ID ${id} não encontrado`);
    }
    
    res.send(livro);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  getLivros,
  getLivro,
};
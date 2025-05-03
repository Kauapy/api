const fs = require("fs");
const path = require("path");

// Caminho para o arquivo JSON relativo à raiz do projeto
const caminhoArquivo = path.join(__dirname, '..', 'livros.json');

function getTodosLivros() {
  return JSON.parse(fs.readFileSync(caminhoArquivo));
}

function getLivroPorId(id) {
  const livros = JSON.parse(fs.readFileSync(caminhoArquivo));
  const idNumerico = parseInt(id);
  const livroFiltrado = livros.filter(livro => livro.id === idNumerico || livro.id === id);
  return livroFiltrado[0]; 
}

module.exports = {
  getTodosLivros,
  getLivroPorId,
};
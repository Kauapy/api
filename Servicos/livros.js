const fs = require("fs");
const path = require("path");

const caminhoArquivo = path.join(__dirname, "..", "livros.json");

function getTodosLivros() {
  return JSON.parse(fs.readFileSync(caminhoArquivo));
}

function getLivroPorId(id) {
  const livros = JSON.parse(fs.readFileSync(caminhoArquivo));
  const idNumerico = parseInt(id);
  const livroFiltrado = livros.filter(
    (livro) => livro.id === idNumerico || livro.id === id
  );
  return livroFiltrado[0];
}

function insereLivro(livroNovo) {
  const livros = JSON.parse(fs.readFileSync(caminhoArquivo));

  const novaListaDeLivros = [...livros, livroNovo];

  fs.writeFileSync(caminhoArquivo, JSON.stringify(novaListaDeLivros, null, 2));
}

function modificaLivro(modificacoes, id) {
  let livrosAtuais = JSON.parse(fs.readFileSync(caminhoArquivo));
  const livroModificado = livrosAtuais.findIndex((livro) => livro.id === id);

  const conteudoMudado = {
    ...livrosAtuais[livroModificado],
    ...modificacoes,
  };

  livrosAtuais[livroModificado] = conteudoMudado

  fs.writeFileSync(caminhoArquivo, JSON.stringify(livrosAtuais, null, 2));

}

function deletarLivroPorId(id){
  const livros = JSON.parse(fs.readFileSync(caminhoArquivo));
  const idNumerico = parseInt(id);
  const livroFiltrado = livros.filter(
    (livro) => livro.id !== idNumerico
  );

  fs.writeFileSync(caminhoArquivo, JSON.stringify(livroFiltrado, null, 2));
}

module.exports = {
  getTodosLivros,
  getLivroPorId,
  insereLivro,
  modificaLivro,
  deletarLivroPorId,
};

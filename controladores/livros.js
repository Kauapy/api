const { get } = require("http");
function getLivros(req, res) {
  try {
    const livros = getTodosLivros();
    res.send(livros);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  getLivros,
};

const { Router } = require("express");
const { getLivros, getLivro, postLivro} = require("../controladores/livros")

const router = Router();

router.get("/", getLivros);

router.get("/:id", getLivro);

router.post('/', postLivro)

router.patch('/', (req, res) =>{
    res.send("Você fez uma requisição PATCH")
})

router.delete('/', (req, res) =>{
    res.send("Você fez uma requisição DELETE")
})

module.exports = router;

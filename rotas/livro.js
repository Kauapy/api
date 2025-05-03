const { Router } = require("express");
const { getLivros} = require("../controladores/livros.js")

const router = Router();

router.get("/", getLivros);

router.post('/', (req, res) =>{
    res.send("Você fez uma requisição POST")
})

router.patch('/', (req, res) =>{
    res.send("Você fez uma requisição PATCH")
})

router.delete('/', (req, res) =>{
    res.send("Você fez uma requisição DELETE")
})

module.exports = router;

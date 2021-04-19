import express from 'express'; //importação com os ... significa que instalou a biblioteca, mas precisa instalar as tipagens

const app = express();

/**
 * GET = Buscas
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alterar uma informação específica (alterar apenas a senha do usuário)
 * Posso utilizar a mesma rota com métodos diferentes
 */

app.get("/",(request,response) => {
    //return response.send("Olá NLW 05!");
    return response.json({ message: "Olá NLW 05!" })
})

app.post("/",(request,response) => {
    return response.json({ message: "Usuário salvo com sucesso!" })
})

app.listen(3333, () => console.log("Server is running on port 3333"))
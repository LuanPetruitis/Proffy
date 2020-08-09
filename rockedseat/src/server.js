// Servidor
const express = require('express')
const server = express()
const { pageLanding, pageStudy, giveClasses, saveClasses } = require('./pages')


// configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// receber os dados do req.body
// configurar arquivos estaticos (css, scripts, imagens)
// rotas da aplicação        
server
    .use(express.urlencoded({ extended: true }))
    .use(express.static("public"))
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", giveClasses)
    .post("/save-classes", saveClasses)
    .listen(8000)
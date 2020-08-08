// Servidor
const express = require('express')
const server = express()
const { pageLanding, pageStudy, giveClasses } = require('./pages')


// configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
// configurar arquivos estaticos (css, scripts, imagens)
    .use(express.static("public"))
    // rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", giveClasses)
    .listen(3000)
const express = require('express')
const route = require('./route')
const path = require('path')

const server = express()

/* Falando para o nosso server expresse que a nossa view engine será o modulo ejs */
server.set('view engine', 'ejs')
/* Configurando para que o ejs localize a pasta views dentro de src. O path pega o caminho da pasta onde está o nosso projeto e o join junta o caminho do projeto e o __dirname(que nesse caso seria o src, pois estamos usando a variável global __dirname no arquivo server.js que está na pasta src) com o views, que é o nome da nossa pasta onde está o arquivo ejs. */
server.set('views', path.join(__dirname, 'views'))


server.use(express.static('public'))

/* Configurando o middle */
server.use(express.urlencoded({ extended: true }))

server.use(route)

server.listen(3300, () => console.log("Rodando..."))



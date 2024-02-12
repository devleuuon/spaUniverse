//passar onclick no html.
//criar class Router.
//importar Router no main.js
//passar o Router para uma variável
//add variavel 'routes' para router.js em um objeto vazio.
//criar add para colher nome e link que serão passados.
// add routes com nome e link.
// criar função do disparo no click.
// criar função handle() e passar para main.js e colocar na função route()

import { Router } from "./router.js";

const router = new Router()
//passando nome e link para o router.js

router.add('/', '/pageOne/index.html')
router.add('/theUniverse', '/pageTwo/index.html')
router.add('/exploration', '/pageThree/index.html')

router.handle()

window.onpopstate = () => router.handle() //função para poder navegar pelas setas de avançar e retroceder do navegador.
window.route = () => router.route() //o onlick route() para de funcionar, necessário chama-lo direto no window

import { home } from './elements.js'
import { universe } from './elements.js'
import { exploration } from './elements.js'
import { bgBody } from './elements.js'

home.addEventListener('click', () => {
    //quando clicar muda cor do nav
    home.classList.add('active')
    universe.classList.remove('active')
    exploration.classList.remove('active')

    //trocando background
    bgBody.classList.add('bgHome')
    bgBody.classList.remove('bgExploration')
    bgBody.classList.remove('bgUniverse')
})

universe.addEventListener('click', () => {
    //quando clicar muda cor do nav
    universe.classList.add('active')
    home.classList.remove('active')
    exploration.classList.remove('active')

    //trocando background
    bgBody.classList.add('bgUniverse')
    bgBody.classList.remove('bgHome')
    bgBody.classList.remove('bgExploration')
} )

exploration.addEventListener('click', () => {
    //quando clicar muda cor do nav
    exploration.classList.add('active')
    home.classList.remove('active')
    universe.classList.remove('active')

    //trocando background
    bgBody.classList.add('bgExploration')
    bgBody.classList.remove('bgHome')
    bgBody.classList.remove('bgUniverse')
} )
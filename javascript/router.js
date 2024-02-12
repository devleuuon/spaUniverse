export class Router {
    routes = {} //objeto vazio

    add(routeName, link) {
        this.routes [routeName] = link //o routeName será passado para o link.
    }

route(event) { // função do disparo no click.
    event = event || window.event //retorna evento ou evento do window.
    event.preventDefault() //não carrega a página

    window.history.pushState( {}, "", event.target.href) //pega window, o histórico da aplicação, coloque o estado no histórico. o evento pega quem disparou ele, que foi o target e pega o href de quem disparou.

    this.handle() //sempre na classe tem que usar a palavra this.
}

handle() {
    const pathname = window.location.pathname
    const route = this.routes[pathname]

    fetch(route).then(data => data.text()).then(html => {
        document.querySelector('#app').innerHTML = html
    })
}

}
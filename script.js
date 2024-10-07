// Essa função vamos criar para quando clicar no toggle
// ele alternar automaticamente para Claro ou Escuro

function toggleMode() {
    const html = document.documentElement

    // Em vez de fazer todo o código acima para fazermos
    // a função, podemos usar a abaixo que ela faz a mesma
    // coisa porem com uma linha mais pequena e mais limpa
    html.classList.toggle('light')


    // if(html.classList.contains('light')) {
    //     html.classList.remove('light')
    // } else {
    //     html.classList.add('light')
    // }
    
    
    //pegar a tag img para quando trocar o light mode mudar a foto
        
    // pegar a tag img
        const img = document.querySelector("#profile img")
    //substituir a imagem
        if(html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light            
            img.setAttribute("src", "./assets/avatar-light.png")
        } else {
    //se tiver sem light mode, manter a imagem normal        
            img.setAttribute("src", "./assets/avatar.png")
        }


}
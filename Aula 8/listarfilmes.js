// querySelector busca o primeiro elemento. "#" se refere a id do elemento, e ".", sua classe
const btnClicar = document.querySelector("#btnClicar");
const listaFilmes = document.querySelector("#listaFilmes");
const inputUsuario = document.querySelector("#inputUsuario");


const filmes = [
    {
        nome: "Poderoso Chefão",
        diretor: "Copolla",
        ano: 1972,
        sinopse: "Lorem Ipsum Dolor Sit Ame"
    },
    {
        nome: "Meninas Malvadas",
        diretor: "Lindsay Lohan",
        ano: 2004,
        sinopse: "Bla bla bla"
    },
    {
        nome: "Os Trapalhões na Calda da Cometa",
        diretor: "Didi Mocó",
        ano: 1962,
        sinopse: "Didi"
    }
]

btnClicar.addEventListener("click", function criarFilme(infosDoEvento) {
    infosDoEvento.preventDefault();
    // Variável que cria um elemento
    let novoFilme = document.createElement("li");
    novoFilme.innerText = inputUsuario.value;

    let btnEditar = document.createElement("button");
    btnEditar.innerText = "Editar";
    btnEditar.addEventListener("click", function(){
        novoFilme.style.color = "red";
        // Interruptor que alterna a classe "fundo-preto"
        novoFilme.classList.toggle("fundo-preto"); 
    })

    novoFilme.innerHTML = `
    <h1> Titulo do filme </h1>
    <p> Sinopse do filme </p>
    <p> blablabla  </p>
    <a href = "#"> Saber mais </a>
    `

    let imagemFilme = document.createElement("img");
    imagemFilme.src = "";
    imagemFilme.alt = "";

    novoFilme.append(btnEditar);

    listaFilmes.append(novoFilme);
})


// CREATE
function criarFilme() {
    
    // Exemplar que define variáveis para elementos. Não funcional.
    let novoFilme = {
        nome: inputUsuario.value,
        diretor: inputDiretor.value,
        ano: inputAno.value,
        sinopse: inputSinopse.value
    }

    filmes.unshift(novoFilme);
    renderizarNaTela();
    inputUsuario.value = "";
}

window.onload = renderizarNaTela()
// READ
function renderizarNaTela() {

    // Limpa o elemento para não repetir as informações, garantindo eficiência de processamento
    listaFilmes.innerHTML = "";

    filmes.forEach(
        filme => {
            let novoFilme = document.createElement("li");
            novoFilme.innerText = filme.nome;

            filmes.sindexOf(filme) // Localiza o índice do array

            listaFilmes.append(novoFilme);
        }
    )
}

// UPDATE
function atualizarFilme() {

}

// DELETE
function removerFilme(idFilme) {

    filmes.splice(idFilme, 1) // deleta o array

}


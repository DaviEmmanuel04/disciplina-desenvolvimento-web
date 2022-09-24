class Autor {
    constructor(nome){
        this.nome = nome
    }
}

class Genero {
    constructor(genero){
        this.genero = genero
    }
}

class Livro {
    constructor(titulo, autor, dataLancamento, numPaginas, genero){
        this.titulo = titulo
        this.autor = autor
        this.dataLancamento = dataLancamento
        this.numPaginas = numPaginas
        this.genero = genero
    }

    validar = () => {
        if(this.titulo && this.autor.nome && this.dataLancamento && this.numPaginas &&  this.genero.genero){
            return true
        } else {
            return false
        }
    }

    temMesmoAutor = (livro) => {
        if(this.autor.nome === livro.autor.nome) {
            return true
        } else {
            return false
        }
    }
}

let nomeLivro = window.prompt('Qual o título do livro?')
let autor = new Autor(window.prompt('Qual o nome do autor'))
let dataLancamento = window.prompt('Qual a data de lançamento do livro?')
let numPaginas = window.prompt('Qual o número de páginas do livro')
let genero = new Genero(window.prompt('Qual o gênero do livro'))

let livro = new Livro(nomeLivro, autor, dataLancamento, numPaginas, genero)
let livro2 = new Livro(nomeLivro, autor, dataLancamento, numPaginas, genero)
let isValid = livro.validar()

if(isValid){
    window.alert(`Informações do livro: 
    \n \t Título: ${livro.titulo};
    \n \t Autor: ${livro.autor.nome};
    \n \t Gênero: ${livro.genero.genero};
    \n \t Páginas ${livro.numPaginas};
    \n \t Lançamento: ${livro,dataLancamento}.`)
} else {
    window.alert('Algo de errado não está cero')
}

window.alert(livro.temMesmoAutor(livro2))

const crypto = require('crypto');
class Livro {

    #nome = '';
    #autor = '';
    #codigo = 0;
    #generoLiterario = '';
    #quantidadePaginas = 0;

    constructor() {
        // this.#nome = nome;
        this.#codigo = crypto.randomUUID();
    }

    //constructor, podemos iniciar como vacio o pedir variables para cuando iniciar
    //constructor(codigo, nome, quantidadePaginas, genero, autor) {
    //this.#nome = nome;
    //this.#codigo = crypto.randomUUID();
    //this.#autor;
    //this.#generoLiterario;
    //this.#quantidadePaginas;
    //}

    get getNome() {
        return this.#nome;
    }

    set setNome(nome) {
        this.#nome = nome;
    }

    get getAutor() {
        return this.#autor;
    }

    set setAutor(autor) {
        this.#autor = autor;
    }

    get getGeneroLiterario() {
        return this.#generoLiterario;
    }

    set setGeneroLiterario(generoLiterario) {
        this.#generoLiterario = generoLiterario;
    }

    get getQuantidadePaginas() {
        return this.#quantidadePaginas;
    }

    set setQuantidadePaginas(quantidadePaginas) {
        this.#quantidadePaginas = quantidadePaginas;
    }

    get getCodigo() {
        return this.#codigo;
    }
}

module.exports = Livro;
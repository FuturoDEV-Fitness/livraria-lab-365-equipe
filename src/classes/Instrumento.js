const crypto = require("crypto");

class Instrumento {
    #codigo = "";
    #nome = "";
    #tipo = "";
    #estado = "";

    constructor(nome) {
        this.#codigo = crypto.randomUUID();
        this.#nome = nome || "";
    }

    // Código
    get codigo() {
        return this.#codigo;
    }

    // Nome
    get nome() {
        return this.#nome;
    }
    
    set nome(nome) {
        this.#nome = nome;
    }

    // Tipo
    get tipo() {
        return this.#tipo;
    }

    set tipo(tipo) {
        this.#tipo = tipo;
    }
    
    // Estado
    get estado() {
        return this.#estado;
    }

    set estado(estado) {
        this.#estado = estado;
    }
}

module.exports = Instrumento;

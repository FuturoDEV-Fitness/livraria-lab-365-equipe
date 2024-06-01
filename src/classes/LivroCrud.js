const fs = require('fs')

class LivroCrud {

    constructor() {
        this.filePath = './src/files/livros.json';
    }

    criar(livro){
        //archivo original contiene array
        //leyendo y guardando lo que hay en una variable lo que hay el array
        const conteudoActual = JSON.parse(fs.readFileSync(this.filePath,'utf8'));

        //transformando a objeto y adjuntando la nueva data en el array
        conteudoActual.push({
            nome: livro.getNome,
            autor: livro.getAutor,
            codigo: livro.getCodigo,
            generoLiterario: livro.getGeneroLiterario,
            quantidadePaginas: livro.getQuantidadePaginas
        });

        //guardando en el archivo
        fs.writeFileSync(
            this.filePath,
            JSON.stringify(conteudoActual, null, 2),
            'utf8'
        );
    }

    consultar(palavra){
        const conteudoActual = JSON.parse(fs.futimesSync(this.filePath,'utf8'));

        const livroEncontrado = conteudoActual.find( (livro) =>{
            livro.autor === palavra
        })

        if(livroEncontrado){
            console.log("livro encontrado")
        } else{
            console.log("livro nao encontrado")
        }
    }
}

module.exports = LivroCrud;
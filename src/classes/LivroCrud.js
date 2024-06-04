const fs = require('fs')

class LivroCrud {

    constructor() {
        this.filePath = './src/files/livros.json';
    }

    criar(livro) {
        //archivo original contiene array
        //leyendo y guardando lo que hay en una variable lo que hay el array
        const conteudoActual = JSON.parse(fs.readFileSync(this.filePath, 'utf8'));

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

    consultar(palavra) {
        const conteudoActual = JSON.parse(fs.readFileSync(this.filePath, 'utf8'));

        const livroEncontrado = conteudoActual.find((livro) => {
            return livro.autor === palavra
        })

        //otra forma
        //const livroEncontrado = conteudoActual.find( livro => livro.autor === palavra)

        if (livroEncontrado) {
            console.log(`Livro encontrado.\n Nome: ${livroEncontrado.nome}\n Autor: ${livroEncontrado.autor}\n NomeGenero: ${livroEncontrado.generoLiterario}\n Numero de paginas: ${livroEncontrado.quantidadePaginas}\n Codigo: ${livroEncontrado.codigo}`)
        } else {
            console.log("Livro NAO encontrado")
        }
    }

    codigoExiste(codigo) {
        const conteudoActual = JSON.parse(fs.readFileSync(this.filePath, 'utf8'));

        const livroEncontrado = conteudoActual.find((livro) => {
            return livro.codigo === codigo
        })
        if (livroEncontrado){
            return true
        }else{ return false}
    }

    alterar(codigo, nome, quantidadePaginas, generoLiterario, autor) {
        const conteudoActual = JSON.parse(fs.readFileSync(this.filePath, 'utf8'));

        let livroEncontrado = {};
        let livroModificado = {};

        const novaLista = conteudoActual.map((livro) => {
            if (livro.codigo === codigo) {
                //solo asignar no sirve pues no copia solo crea una referencia
                livroEncontrado = {...livro};
                if (nome != '') {
                    livro.nome = nome;
                }
                if (quantidadePaginas != '') {
                    livro.quantidadePaginas = quantidadePaginas;
                }
                if (generoLiterario != '') {
                    livro.generoLiterario = generoLiterario;
                }
                if (autor != '') {
                    livro.autor = autor;
                }
                livroModificado = {...livro};
            }
            return livro
        })

        fs.writeFileSync(
            this.filePath,
            JSON.stringify(novaLista, null, 2),
            'utf8'
        )

        console.log(`Dados sem Alterar:\n Nome: ${livroEncontrado.nome}\n Autor: ${livroEncontrado.autor}\n NomeGenero: ${livroEncontrado.generoLiterario}\n Numero de paginas: ${livroEncontrado.quantidadePaginas}`)

        console.log(`\nDados Alterados:\n Nome: ${livroModificado.nome}\n Autor: ${livroModificado.autor}\n NomeGenero: ${livroModificado.generoLiterario}\n Numero de paginas: ${livroModificado.quantidadePaginas}\n Codigo: ${livroModificado.codigo}`)
    }
}

module.exports = LivroCrud;
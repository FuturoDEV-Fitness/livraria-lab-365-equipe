const readline = require('readline/promises');
const Livro = require('./classes/Livro');
const LivroCrud = require('./classes/LivroCrud');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function run() {

    const resposta = await rl.question('Escolha uma ação (criar, deletar, alterar, consultar): ');

    switch (resposta) {
        case 'criar':
            
            const nome = await rl.question('Qual e o nome do livro? ');
            const livro = new Livro(nome)

            const quantidadePaginas = await rl.question('Digite o numero de paginas do livro: ');
            const generoLiterario = await rl.question('Qual e u genero Literario? ');
            const autor = await rl.question('Digite o autor do livro: ');

            livro.setAutor = autor;
            livro.setQuantidadePaginas = quantidadePaginas;
            livro.setGeneroLiterario = generoLiterario;
            
            rl.close();

            const livroCrud = new LivroCrud()
            livroCrud.criar(livro);
            
            console.log("nome: ", livro.getNome);
            console.log("autor: ", livro.getAutor);
            console.log("genero: ", livro.getGeneroLiterario);
            console.log("numero pag: ", livro.getQuantidadePaginas);
            console.log("cod: ", livro.getCodigo);

            // const livro = new Livro('', nome, quantidadePaginas, generoLiterario, autor)
            // livro.setNome = nome;
            break;
        case 'deletar': {
            /* Coloque sua resposta aqui */
            rl.close();
            break;
        }
        case 'consultar': {
            /* Coloque sua resposta aqui */
            const  palavra = await rl.question("Autor do libro a buscar:")

            const livroCrud = new LivroCrud();
            livroCrud.consultar(palavra);


            rl.close();
            break;
        }
        default:
            console.log("Ação não reconhecida.");
            rl.close();
    }

}

run();

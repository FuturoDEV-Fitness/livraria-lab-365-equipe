const readline = require('readline/promises');
const Livro = require('./classes/Livro');
const LivroCrud = require('./classes/LivroCrud');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function run() {

    const resposta = await rl.question('Escolha uma ação ("c" = criar, "co" = consultar, "a" = alterar, "d" = deletar): ');

    switch (resposta.trim().toLocaleLowerCase()) {
        case 'c':
            const livro = new Livro()

            const nome = await rl.question('Digite o NOME do Livro: ');
            const quantidadePaginas = await rl.question('Digite o NUMERO de paginas do Livro: ');
            const generoLiterario = await rl.question('Digite o GENERO Literario do Livro: ');
            const autor = await rl.question('Digite o AUTOR do Livro: ');

            livro.setNome = nome;
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

            break;
        case 'co': {
            const palavra = await rl.question("Digite o autor do libro procurado: ")

            const livroCrud = new LivroCrud();
            livroCrud.consultar(palavra);

            rl.close();
            break;
        }
        case 'a': {
            const codigo = await rl.question("Digite o CODIGO do livro a alterar: ")

            const livroCrud = new LivroCrud();
            const codigoValido = livroCrud.codigoExiste(codigo);

            if(codigoValido){
                const nome = await rl.question('\n(Si nao deseja alterar alguma entrada, deixe em branco e presione enter)\nDigite o novo NOME do Livro: ');
                const autor = await rl.question('Digite o novo AUTOR do Livro: ');
                const generoLiterario = await rl.question('Digite o novo GENERO Literario do Livro: ');
                const quantidadePaginas = await rl.question('Digite o novo NUMERO de paginas do Livro: ');
    
                livroCrud.alterar(codigo, nome, quantidadePaginas, generoLiterario,autor);
            }else{
                console.log("CODIGO NAO REGISTRADO!")
            }

            rl.close();
            break;
        }
        default:
            console.log("Ação não reconhecida.");
            rl.close();
    }

}

run();

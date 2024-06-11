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
            const autor = await rl.question('Digite o AUTOR do Livro: ');
            const generoLiterario = await rl.question('Digite o GENERO Literario do Livro: ');
            const quantidadePaginas = await rl.question('Digite o NUMERO de paginas do Livro: ');

            livro.setNome = nome.trim();
            livro.setAutor = autor.trim();
            livro.setQuantidadePaginas = quantidadePaginas.trim();
            livro.setGeneroLiterario = generoLiterario.trim();

            rl.close();

            const livroCrud = new LivroCrud()
            livroCrud.criar(livro);

            console.log("\nLIBRO REGISTRADO COM SUCESSO!")
            console.log("Nome: ", livro.getNome);
            console.log("Autor: ", livro.getAutor);
            console.log("Genero: ", livro.getGeneroLiterario);
            console.log("Numero pag: ", livro.getQuantidadePaginas);
            console.log("Codigo: ", livro.getCodigo);

            break;
        case 'co': {
            const palavra = await rl.question("Digite o autor do libro procurado: ");

            const livroCrud = new LivroCrud();
            livroCrud.consultar(palavra.trim());

            rl.close();
            break;
        }
        case 'a': {
            const codigo = await rl.question("Digite o CODIGO do livro a alterar: ")

            const livroCrud = new LivroCrud();
            const codigoValido = livroCrud.codigoExiste(codigo.trim());

            if(codigoValido){
                const nome = await rl.question('\n(Si nao deseja alterar alguma entrada, deixe em branco e presione enter)\nDigite o novo NOME do Livro: ');
                const autor = await rl.question('Digite o novo AUTOR do Livro: ');
                const generoLiterario = await rl.question('Digite o novo GENERO Literario do Livro: ');
                const quantidadePaginas = await rl.question('Digite o novo NUMERO de paginas do Livro: ');
    
                livroCrud.alterar(codigo.trim(), nome.trim(), quantidadePaginas.trim(), generoLiterario.trim(), autor.trim());
            }else{
                console.log("CODIGO NAO REGISTRADO!")
            }

            rl.close();
            break;
        }
        case 'd': {
            const codigo = await rl.question("Digite o CODIGO do livro a Apagar: ")

            const livroCrud = new LivroCrud();
            const livroEncontrado = livroCrud.codigoExiste(codigo.trim());

            if(livroEncontrado){
                const apagar = await rl.question(`\nLivro encontrado:\n Nome: ${livroEncontrado.nome}\n Autor: ${livroEncontrado.autor}\n NomeGenero: ${livroEncontrado.generoLiterario}\n Numero de paginas: ${livroEncontrado.quantidadePaginas} \n\nDeseja APAGAR ese registro? ("sim" ou "nao"): `)
                if (apagar.trim().toLocaleLowerCase() === 'sim'){
                    livroCrud.deletar(codigo)
                    console.log("Registro deletado com sucesso")
                    rl.close();
                    break;
                }else{
                    console.log("Açao cancelada pelo usuario.")
                    rl.close();
                    break;
                }

            }else{
                console.log("CODIGO NAO REGISTRADO!")
                rl.close();
                break;
            }

        }
        default:
            console.log("Ação não reconhecida.");
            rl.close();
    }
}

run();
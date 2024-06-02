const readline = require('readline/promises');
const Instrumento = require('./classes/Instrumento');
const InstrumentoCrud = require('./classes/IntrumentoCrud');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false // não repete a resposta
});

async function run() {
    const resposta = await rl.question('Escolha uma ação \n 1. criar\n 2. deletar\n 3. consultar \n'); // o \n pula uma linha no terminal, fonte --> stack overflow
    const instrumento = new Instrumento();
    const crud = new InstrumentoCrud();

    switch (resposta) {
        case '1':    // deixando mais facil para o usuário 
        case 'criar':
            const nomeDoUsuario = await rl.question("Insira seu nome: ");
            const tipoDoInstrumento = await rl.question("Qual é o tipo de instrumento? ");
            const estadoDoInstrumento = await rl.question("Qual é o estado atual do instrumento? ");

            if (!!nomeDoUsuario && !!tipoDoInstrumento && !!estadoDoInstrumento) {
                instrumento.nome = nomeDoUsuario.toLocaleLowerCase();
                instrumento.tipo = tipoDoInstrumento.toLocaleLowerCase();
                instrumento.estado = estadoDoInstrumento.toLocaleLowerCase();
                crud.criar(instrumento); 
                console.log("Criado!")
                rl.close();
            }
            rl.close();
            break;
        
        case '2':
        case 'deletar': {
            const confirmacao = await rl.question("Você já visualizou a lista de instrumentos antes de continuar? (S/n): ");
            if (confirmacao.toLowerCase().trim() === 's' || confirmacao.toLowerCase().trim() === 'sim') {
                const nomeParaDeletar = await rl.question("Insira o nome usado para o cadastro do instrumento: ");
                const listaInstrumentos = crud.listar(); 
                const instrumentosComMesmoNome = listaInstrumentos.filter(instrumento => instrumento.nome === nomeParaDeletar);
        
                if (instrumentosComMesmoNome.length === 0) {
                    console.log("Não foi encontrado nenhum instrumento com neste2 nome.");
                } else {
                    console.log("Foi encontrado este(s) instrumento(s) com neste nome:");
                    instrumentosComMesmoNome.forEach((instrumento, i) => { // mostra o um numero de acordo com a quantidade
                    console.log(`${i + 1}:`, instrumento);
                });
                // 1 {nome: ...}
                // 2 {nome: ...}
                const escolha = Number(await rl.question("Insira o número do cadastro para deleta-lo: "));
                const i = escolha - 1;

                if (i >= 0 && i < instrumentosComMesmoNome.length) {
                    const instrumentoDeletar = instrumentosComMesmoNome[i];
                    crud.deletar(instrumentoDeletar.codigo);
                    console.log(`O instrumento  ${instrumentoDeletar.tipo} foi deletado.`);
                } else {
                    console.log("Número de instrumento inválido.");
                }
            }
            } else {
                console.log("Operação cancelada.");
            }
        
            rl.close();
            break;
        }
        case '3':
        case 'consultar': {
        const perguntaConsultar = await rl.question("Digite:\n 1. para listar todos\n 2. para procurar por nome\n ");
        if (perguntaConsultar === '1') {
            const listaInstrumentos = crud.listar();
            console.log("Lista de instrumentos:");
            listaInstrumentos.forEach((instrumento, i) => { // i -> index
                console.log(i + 1, instrumento);
            });
            rl.close();
        } else if (perguntaConsultar === '2') {
            const nomeParaConsultar = await rl.question("Insira o nome usado para o cadastro do instrumento: ");
            if (nomeParaConsultar.trim()) {
                const listaInstrumentos = crud.listar();
                // Considerando que todos os nomes no banco de dados estão em minúsculo
                const instrumentosComMesmoNome = listaInstrumentos.filter(instrumento => 
                    instrumento.nome.toLowerCase() === nomeParaConsultar.toLowerCase().trim()
                );
                if (instrumentosComMesmoNome.length === 0) {
                    console.log("Não foi encontrado nenhum instrumento com esse nome.");
                } else {
                    console.log("Esses foram os instrumentos encontrados")
                    instrumentosComMesmoNome.forEach((instrumento, i) => {
                    console.log(`${i + 1}:`, instrumento);
                });
            }
        }
        rl.close();
        }
        break;
    }

        default:
            console.log("Ação não reconhecida.");
            rl.close();
    }

}

run();

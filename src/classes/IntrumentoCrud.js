const fs = require('fs');

class InstrumentoCrud {

    constructor() {
        this.filePath = './src/files/instrumentos.json';
    }

    listar() { // lista todo o instrumentos.json
        if (fs.existsSync(this.filePath)) { // caso de algum problema com o .json vai ser retornado um erro
            try {
                return JSON.parse(fs.readFileSync(this.filePath, "utf-8"));
            } catch (error) {
                console.error("🐞 Erro ao ler o arquivo JSON:", error);
                return [];
            }
        } else {
            console.log('Arquivo não encontrado');
            return [];
        }
    }

    criar(instrumento){
        const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))

        conteudoAtual.push({
            codigo: instrumento.codigo,
            nome: instrumento.nome,
            tipo: instrumento.tipo,
            estado: instrumento.estado
        });

        fs.writeFileSync(
            this.filePath,
            JSON.stringify(conteudoAtual, null, 2), // Formata o JSON com indentação de 2 espaços
            'utf-8'
        ); 
    }

    deletar(codigo) {
        const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))
        delentandoInstrumento = conteudoAtual.filter(instrumento => instrumento.codigo !== codigo) // remove com o código -> código duplicado remove também 
        fs.writeFileSync(
            this.filePath,
            JSON.stringify(delentandoInstrumento, null, 2), 
            'utf-8'
        );
    }

}

module.exports = InstrumentoCrud;
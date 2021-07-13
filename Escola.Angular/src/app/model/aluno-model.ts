export class dtoAluno{
    codAluno: number;
    nomeAluno: string;
    codEscola: number;
    cpf: string;
    dtInsercao: Date;
    nomeEscola: string;

    constructor() {
        this.dtInsercao = new Date();
        this.nomeAluno = "";
        this.cpf = "";
        this.nomeEscola = "";
    }
}
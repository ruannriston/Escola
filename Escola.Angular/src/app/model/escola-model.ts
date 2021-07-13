export class dtoEscola {
    codEscola: number;
    nomeEscola: string;
    cnpj: string;
    dtInsercao: Date;

    constructor() {
        this.dtInsercao = new Date();
        this.nomeEscola = "";
        this.cnpj = "";
    }
}
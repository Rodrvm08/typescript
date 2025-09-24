class saudacao {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    saudar(): string {
        return `Olá ${this.nome}`
    }
}

const apresenta = new saudacao('joão');

console.log(apresenta.saudar())

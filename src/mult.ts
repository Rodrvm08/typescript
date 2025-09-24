class mult {
    valA: number;
    valB: number;

    constructor(valA: number, valB: number) {
        this.valA = valA;
        this.valB = valB;
    }

    multiplica(): number {
        return this.valA*this.valB;
    }

}

const produto = new mult (5, 6);

console.log(produto.multiplica())
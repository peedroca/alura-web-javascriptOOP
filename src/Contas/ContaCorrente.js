import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;

    constructor(cliente, agencia) {
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }

    // Sobrescrevendo o comportamento de Sacar.
    sacar(valor) {
        return this._sacar(valor, 1.1);
    }
}
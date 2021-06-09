// Classe Abstrata
export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta) {
            throw new Error("Você não deveria instânciar um objeto do tipo Conta.");
        }
        
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }
    
    // Método Abstrato
    sacar(valor) {
        throw new Error("Você deve sobscrever esse método.");
    }

    _sacar(valor, taxa) {
        let novoValor = valor * taxa;

        if (this._saldo >= novoValor) {
            this._saldo -= novoValor;
            return novoValor;
        }

        return 0;
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
        }
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
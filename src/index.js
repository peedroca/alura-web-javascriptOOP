import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';
import { Conta } from './Conta.js';
import { ContaSalario } from './ContaSalario.js';

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

const contaCorrente = new ContaCorrente(cliente1, 101);
contaCorrente.depositar(500);
contaCorrente.sacar(100);

const contaPoupanca = new ContaPoupanca(1000, cliente2, 102);

contaCorrente.transferir(200, contaPoupanca);

const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);

console.log(contaSalario);
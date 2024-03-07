"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
const Base_1 = require("./Base");
// como nasce um novo dado do tipo Pedido?
class Pedido extends Base_1.Base {
    constructor() {
        super(); // chamar o construtor da classe pai
        // default
        this.itens = [];
        this.valorTotal = 0;
    }
    adicionarItem(item) {
        this.itens.push(item);
        this.valorTotal += item.valor;
    }
    mostrarDados() {
        this.itens.forEach((item) => {
            console.log(`${item.nome}`);
        });
        console.log(this.valorTotal.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }));
    }
}
exports.Pedido = Pedido;

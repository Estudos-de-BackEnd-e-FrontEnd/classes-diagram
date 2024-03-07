interface Desconto {
    aplicarDescontoEmReais(desconto: number): void;
    aplicarDescontoEmPorcentagem(desconto: number): void
 
}

interface ValorPedido {

  recuperarValorTotal(): void
}

export class Pedido implements ValorPedido {
  itens: ItemPedido[] = [];
  
  add(item: ItemPedido): void {
    this.itens.push(item);
    console.log(this.itens)
  }

  removeItem(item: ItemPedido): void {
    const index = this.itens.findIndex((i) => i.nome === item.nome);
    if (index > -1) {
      this.itens.splice(index, 1);
      console.log(this.itens)
    }
  }
  recuperarValorTotal(): number {
    let total = this.itens
      .map((i) => i.recuperarValorTotal())
      .reduce((sum, v) => sum + v, 0);

    return total;
  }


}

export class ItemPedido implements ValorPedido, Desconto {
  valor: number;
  nome: string;
  quantidade: number;

  constructor(valor: number, nome: string, quantidade: number) {
    this.valor = valor;
    this.nome = nome;
    this.quantidade = quantidade;
  }

  recuperarValorTotal(): number {
    return this.valor * this.quantidade;
  }

  aplicarDescontoEmReais(desconto: number): void {
    this.valor -= desconto;
  }

  aplicarDescontoEmPorcentagem(desconto: number): void {
    const porcentagem = desconto / 100;
    const descontoEmReais = this.valor * porcentagem;
    this.valor -= descontoEmReais;
  }
}



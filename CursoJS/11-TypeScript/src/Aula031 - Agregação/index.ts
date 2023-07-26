/*
  Agregação é quando uma classe depende de outra, mas elas podem existir
  sozinhas mesmo não funciondo adequdamente
*/
export class CarrinhoDeCompras {
  constructor(private readonly produtos: Array<Produto>) {}

  public inserirProduto(...produtos: Produto[]): void {
    produtos.forEach((produto) => {
      this.produtos.push(produto);
    });
  }

  public quantidade(): number {
    return this.produtos.length;
  }

  public total(): number {
    return this.produtos.reduce((soma, produto) => {
      return (soma += produto.preco);
    }, 0);
  }
}

export class Produto {
  constructor(
    public nome: string,
    public preco: number,
  ) {}
}

const p1 = new Produto('caneta', 13.9);
const p2 = new Produto('Mouse', 75.7);
const p3 = new Produto('Teclado', 147.0);

const carrinho = new CarrinhoDeCompras([p1, p2]);
console.log(carrinho.quantidade());
console.log(carrinho.total());
carrinho.inserirProduto(p3);
console.log(carrinho.quantidade());

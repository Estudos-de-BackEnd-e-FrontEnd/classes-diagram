import { Item } from './exercicio1/item';
import { Pedido } from './exercicio1/pedido';


import { Comentario } from "./exercicio4/classes/comentario";
import { Produto } from "./exercicio4/classes/produto";
import { Usuario } from "./exercicio4/classes/usuario";
import { listaUsuarios } from "./exercicio4/database/usuarios";
import { Avaliacao } from "./exercicio4/types/avaliacao";

import { Pedido as NovoPedido} from "./exercicio5/atividade5"
import { ItemPedido } from './exercicio5/atividade5';
// concretizando algo que foi criado um modelo
const pedido = new Pedido();
const camiseta = new Item(100, 'Camiseta', 'Camiseta preta da Vans');
const tenis = new Item(600, 'Tenis', 'Tenis da Nike');
pedido.adicionarItem(camiseta);
pedido.adicionarItem(tenis);

tenis.mostrarDados();
pedido.mostrarDados(); // output = 700


// USUARIOS
const joao = new Usuario("João Perreira", "@joao_perreira");
const maria = new Usuario("Maria Lurdes", "@maria_lurdes_ofc");

listaUsuarios.push(joao);
listaUsuarios.push(maria);

// PRODUTOS
const camisa = new Produto("Camisa Lacosti", 30);
const calca = new Produto("Calça de sair", 200);
const sapato = new Produto("Tenis 12 molas", 500);

const chinelo = new Produto("Havaianas", 48);

// ADICIONA PRODUTOS
joao.addProduto(camisa);
joao.addProduto(camisa);
joao.addProduto(camisa);
joao.addProduto(calca);
joao.addProduto(sapato);

// REMOVE PRODUTOS
joao.removeProduto(camisa);

// LOGS
joao.visualizarProdutos();
joao.visualizar();

// LOGS PRODUTO
chinelo.visualizar();

// COMENTÁRIOS
const comentario1 = new Comentario("Produto muito bom, original pakas.", maria);
const comentario2 = new Comentario("Produto razoável, não é original.", joao);

// ADICIONAR COMENTÁRIOS AOS PRODUTOS
camisa.addComentario(comentario1);
camisa.addComentario(comentario2);

camisa.visualizarDetalhes();

// ADICIONAR AVALIAÇÃO
calca.addAvaliacao(4, "@joao_perreira");
calca.addAvaliacao(1, "@joao_perreira");


const item = new ItemPedido(150, "arroz", 50 )
const novoPedido = new NovoPedido()


console.log(novoPedido.add(item))
console.log(novoPedido.removeItem(item))
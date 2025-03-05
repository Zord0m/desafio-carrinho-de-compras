import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];

console.log("Welcome to the your Shoppe Cart!");

const item1 = await createItem("hotweels ferrari", 20.99, 1);
const item2 = await createItem("hotweels lamborghini", 39.99, 3);

//adicionei itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item2);

//mostra carrinho
await cartService.displayCart(myCart);

//deletei itens do carrinho
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);

await cartService.calculateTotal(myCart);

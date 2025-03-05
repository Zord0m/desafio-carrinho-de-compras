// quais ações meu carrinho pode fazer?

// adicionar item - adiciona item ao carrinho
async function addItem(userCart, item) {
    userCart.push(item);
};

// deletar item - exclui item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if (index !== -1) {
        userCart.splice(index, 1);
    };
};

// remover item - diminui um item
async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name);
    
    if ( indexFound == -1 ){
        console.log ("Item não encontrado");
        return;
    }

    if ( userCart[indexFound].quantity > 1 ) {
        userCart[indexFound].quantity -= 1;
        return;
    };

    if ( userCart[indexFound].quantity == 1 ) {
        userCart.splice(indexFound, 1);
        return;
    };
};

// calcular total
async function calculateTotal(userCart) {
    console.log("\nShoppe Cart");
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`Total: ${result}`);
};

// mostra o carrinho
async function displayCart(userCart) {
    console.log("\nShopee Cart List:");
    userCart.forEach ((item, index) => {
        console.log(`${index + 1} - ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal: ${item.subtotal()}`);
    });
};

export { 
    addItem, 
    deleteItem, 
    removeItem, 
    calculateTotal, 
    displayCart,
};
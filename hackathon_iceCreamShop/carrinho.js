// Armazenar os itens do carrinho de compras
let cart = [];

// Selecionar os botões "Adicionar" e adicionar um ouvinte de eventos a cada um
let addToCartButtons = document.querySelectorAll('.myButton');
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

// Adicionar um item ao carrinho de compras
function addToCart(event) {
  let id = event.target.dataset.id;
  let item = {
    id: id,
    
    price: Math.floor(Math.random() * 5) + 1
  };
  cart.push(item);
  updateCart();
}

// Atualizar o carrinho de compras
function updateCart() {
  let cartList = document.getElementById('cart');
  cartList.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    let li = document.createElement('li');
    li.innerText = `Gelado -  Euros ${item.price}`;
    cartList.appendChild(li);
    total += item.price;
  });
  let totalLi = document.createElement('li');
  totalLi.innerText = `Total: Euros ${total}`;
  cartList.appendChild(totalLi);
}
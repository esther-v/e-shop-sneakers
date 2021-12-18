// VARIABLES
const cart = document.querySelector(".container-cart")
const cartContents = document.querySelector(".articles-cart")
const cartIcone = document.querySelector('#cart-icone')

//display cart
cartIcone.addEventListener('click', () => {
    cart.classList.toggle('appear')
})
// VARIABLES
const cart = document.querySelector(".container-cart")
const cartContents = document.querySelector(".articles-cart")
const cartIcone = document.querySelector('#cart-icone')
const quantityItem = document.querySelector('.num-quantity')
// const addToCartBtn = document.querySelector('.add')
const addToCart = document.querySelector('.add-to-cart')    
const plusBtn = document.querySelector('.plus')
const minusBtn = document.querySelector('.minus')

let panier = []

//display cart
cartIcone.addEventListener('click', () => {
    cart.classList.toggle('appear')
})

// plus or minus quantity buttons
let numberArticles = parseInt(quantityItem.value)
 
plusBtn.addEventListener('click', () => {
    if (numberArticles >= 0) {
        numberArticles += 1
        quantityItem.value = numberArticles
    }   
})

minusBtn.addEventListener('click', () => {
    if (numberArticles > 0) {
        numberArticles -= 1
        quantityItem.value = numberArticles
    } 
})

//adding articles to cart

// VARIABLES
const cart = document.querySelector(".container-cart")
const cartContents = document.querySelector(".articles-cart")
const cartIcone = document.querySelector('#cart-icone')
const quantityItem = document.querySelector('.num-quantity')
const pastille = document.querySelector('.pastille')
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
addToCart.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log('ok')
    console.log(numberArticles)
    let price = 125.00
    let total = price * numberArticles
    if(numberArticles > 0) {
        pastille.textContent = numberArticles
        pastille.classList.add('appear')
        cartContents.innerHTML = `
            <div class="articles-in-cart">
                <img src="./images/image-product-1-thumbnail.jpg">
                <div class="info-cart">
                    <p>Fall Limited Edition Sneakers</p>
                    <p>$${price}.00 x ${numberArticles} = <strong> $${total}.00</strong> </p>
                </div>
                <button><img src="./images/icon-delete.svg">
                <button class="checkout add">Checkout</button>
            </div>
        `
    }
})
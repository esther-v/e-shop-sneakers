// VARIABLES
const cart = document.querySelector(".container-cart")
const cartContents = document.querySelector(".articles-cart")
const cartIcone = document.querySelector('#cart-icone')
const quantityItem = document.querySelector('.num-quantity')
const pastille = document.querySelector('.pastille')
const addToCart = document.querySelector('.add-to-cart')    
const plusBtn = document.querySelector('.plus')
const minusBtn = document.querySelector('.minus')

let quantityInCart = 0

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
    
    quantityInCart += numberArticles
    let price = 125.00
    let total = price * quantityInCart
    if(quantityInCart > 0) {
        pastille.textContent = quantityInCart
        pastille.classList.add('appear')
        cartContents.innerHTML = `
            <div class="articles-in-cart">
                <img src="./images/image-product-1-thumbnail.jpg">
                <div class="info-cart">
                    <p>Fall Limited Edition Sneakers</p>
                    <p>$${price}.00 x ${quantityInCart} = <strong> $${total}.00</strong> </p>
                </div>
                <button onclick=removeArticles()><img src="./images/icon-delete.svg">
                <button class="checkout add">Checkout</button>
            </div>
        `
    }
    quantityItem.value = 0
    numberArticles = 0
})

const removeArticles = () => {
    quantityInCart = 0
    pastille.classList.remove('appear')
    cartContents.innerHTML = `
        <p>Your cart is empty.</p> 
    `
}

//galerie d'images clickable
const imgGallery = document.querySelectorAll('.btn-modale')
const modaleGallery = document.querySelector('.bloc-modale')
const imgIndex = document.querySelector('.bloc-modale img')
const closeModale = document.querySelector('.fermeture-modale')
const prevImg = document.querySelector('.prev')
const nextImg = document.querySelector('.next')
let currentIndex

if(window.matchMedia("(min-width: 850px").matches) {
    imgGallery.forEach(image => {
        image.addEventListener('click', (e) => {
            currentIndex = `${e.target.getAttribute('data-index')}`
            imgIndex.src = `./images/image-product-${currentIndex}.jpg`
            modaleGallery.classList.add('active-modale')
            let numIndex = parseInt(currentIndex)

            nextImg.addEventListener('click', () => {
                if(numIndex < 4) {
                    console.log('ok')
                    imgIndex.src = `./images/image-product-${numIndex + 1}.jpg`
                    numIndex +=1
                }     
               
            })
            prevImg.addEventListener('click', () => {
                if(numIndex > 1) {
                    imgIndex.src = `./images/image-product-${numIndex - 1}.jpg`
                    numIndex -=1
                } 
            })
        })
    })

    closeModale.addEventListener('click', () => {
        modaleGallery.classList.remove('active-modale')
    })
  
}
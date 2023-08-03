
// Set a cookie with SameSite attribute
var items = {}
const carrinho = document.getElementById("carrinho")


//criação da loja
startShop = (items) => {
    var containerProdutos = document.getElementById("produtos")
    items.map((val) => {
        containerProdutos.innerHTML += `
        <div class"produtos-single">
        <img src="${val.image}" width="100px">
        <p>${val.title}</P>
        <p>R$ ${val.price.toFixed(2)}</p>
        <button key="${val.id}" onclick="addProdutc(this)">adicionar ao carrinho!</button>
        </div>        
        `
    })
}

//adiciona items no carrinho
function addProdutc(button) {
    let key = button.getAttribute("key")
    if (!items[key]) {
        items[key] = { quantity }
    } else {
        items[key].quantity = isNaN(items[key].quantity) ? 1 : items[key].quantity + 1;
    }
    updateCart()
}

//display carrinho
let conteinerCarrinho = document.getElementById('conteinerCarrinho')
conteinerCarrinho.addEventListener('click', () => {
    if(carrinho.style.display===''){
        carrinho.style.display='block'
    }else if(carrinho.style.display==='block'){
        carrinho.style.display=''
    }
})

//consomi a APi
async function getApi() {
    const dados = await fetch('https://fakestoreapi.com/products')
    items = await dados.json()
    startShop(items)
}

// calcula valor de item por produto especifico
/*function TotalUnidade(){
    items.map((val)=>{
        if(val.){

        }
    })
}*/

//Cria o carrinho
updateCart = () => {
    carrinho.innerText = " "
    items.map((val) => {
        if (val.quantity > 0) {
            carrinho.innerHTML += `
            <p>${val.title} quantidade: ${val.quantity}</P>
            <p></p>
            <hr>
            `
        }
    })
}





getApi()


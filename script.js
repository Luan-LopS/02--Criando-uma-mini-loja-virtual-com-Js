/*const items = [{
    id: 0,
    nome: 'camiseta',
    img: 'https://images.tcdn.com.br/img/img_prod/275189/camisa_azul_royal_100_poliester_para_sublimacao_m_2701_1_20200722153204.jpg',
    quantidade: 0,
}, {
    id: 1,
    nome: 'calsa',
    img: 'https://images.tcdn.com.br/img/img_prod/275189/camisa_azul_royal_100_poliester_para_sublimacao_m_2701_1_20200722153204.jpg',
    quantidade: 0,
}, {
    id: 2,
    nome: 'tenis',
    img: 'https://images.tcdn.com.br/img/img_prod/275189/camisa_azul_royal_100_poliester_para_sublimacao_m_2701_1_20200722153204.jpg',
    quantidade: 0,
}]*/
//item de teste


//criação da loja
startShop = (items) => {
    console.log(items)
    var containerProdutos = document.getElementById("produtos")
    items.map((val) => {
        containerProdutos.innerHTML += `
        <div class"produtos-single">
        <img src="${val.image}" width="100px">
        <p>${val.title}</P>
        <p>$ ${val.price}</p>
        <a key="${val.id}" href="#">adicionar ao carrinho!</a>
        </div>        
        `
    })
}

async function getApi() {
    const items = await fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    startShop(items)
    updateCart(items)
}

getApi()

updateCart = (items) => {
    var containerCarrinho = document.getElementById("carrinho")
    containerCarrinho.innerHTML = ""
    items.map((val) => {
        if (val.quantidade === 0 || val.quantidade<0) {
           let quantidade = 
            containerCarrinho.innerHTML += `
            <p>${val.title}| quantidade: ${val.quantidade}</P>
            <hr>
            `
        }
    })
}

var links = document.getElementsByTagName("a")

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        let key = this.getAttribute("key")
        items[key].quantidade++
        updateCart()
        return false
    })
}
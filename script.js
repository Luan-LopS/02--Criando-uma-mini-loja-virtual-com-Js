const items = [{
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
}]


iniciarLoja = ()=>{
    var containerProdutos = document.getElementById("produtos")
    items.map((val)=>{
        containerProdutos.innerHTML+=`
        <div class"produtos-single>
        <img src="${val.img}" width="100px">
        <p>${val.nome}</P>
        <a key="${val.id}" href="#">adicionar ao carrinho!</a>
        </div>        
        `
    })
}

iniciarLoja()

atualizarCarrinho = ()=>{
    var containerCarrinho = document.getElementById("carrinho")
    containerCarrinho.innerHTML=""
    items.map((val)=>{
        if(val.quantidade!=0){
        containerCarrinho.innerHTML+=`
        <p>${val.nome}| quantidade: ${val.quantidade}</P>
        <hr>
        `
        }
    })
}

var links = document.getElementsByTagName("a")

for(var i = 0; i<links.length;i++){
    links[i].addEventListener("click",function(){
            let key = this.getAttribute("key")
            items[key].quantidade++
            atualizarCarrinho()
            return false
    })
}
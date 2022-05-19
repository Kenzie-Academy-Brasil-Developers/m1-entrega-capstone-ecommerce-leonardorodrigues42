import {data} from "./database.js"

const ul = document.querySelector('.lista')

function insereCard() {
    for(let i = 0; i < data.length; i++) {
        
        const card = document.createElement('li')
        card.className = 'cardProduct'
        
        const imagem = document.createElement('div')
        const img = document.createElement('img')
        imagem.appendChild(img)
        imagem.className = 'imagem'
        img.src = data[i].img
        
        const informacoes = document.createElement('div')
        informacoes.className = 'informacoes'

        const categoria = document.createElement('button')
        const title = document.createElement('h3')
        const description = document.createElement('p')
        const price = document.createElement('h4')
        const addCart = document.createElement('p')
        categoria.className = 'categoria'
        addCart.className = 'addCart'
        addCart.id = i+1

        categoria.innerText = data[i].tag[0]
        title.innerText = data[i].nameItem
        description.innerText = data[i].description
        price.innerText = `R$ ${data[i].value}.00`
        addCart.innerText = 'Adicionar ao carrinho'

        informacoes.appendChild(categoria)
        informacoes.appendChild(title)
        informacoes.appendChild(description)
        informacoes.appendChild(price)
        informacoes.appendChild(addCart)

        card.appendChild(imagem)
        card.appendChild(informacoes)

        ul.appendChild(card)
    }
}

insereCard()

const addCart = document.querySelectorAll('.addCart')

const ulCart = document.querySelector('.carrinho')

const precoTotal = document.querySelector('.precoParagrafo')
const quantidadeTotal = document.querySelector('.quantidadeParagrafo')
let precoResumo = 0

for (let item of addCart) {
    item.addEventListener('click', () => {

        precoResumo += data[item.id - 1].value
        
        const li = document.createElement('li')
        li.className = 'item-cart'
        
        const img = document.createElement('img')
        img.src = data[item.id - 1].img
        
        const caracteristicas = document.createElement('div')
        caracteristicas.className = 'caracteristicas'
        
        const title = document.createElement('h3')
        title.innerText = data[item.id - 1].nameItem
        
        const preco = document.createElement('h4')
        preco.innerText = `R$ ${data[item.id-1].value}.00`
        
        const remover = document.createElement('p')
        remover.innerText = 'Remover produto'
        
        caracteristicas.appendChild(title)
        caracteristicas.appendChild(preco)
        caracteristicas.appendChild(remover)
        
        li.appendChild(img)
        li.appendChild(caracteristicas)
        
        ulCart.appendChild(li)

        const itensCart = document.querySelectorAll('.item-cart')
        
        let contador = 0
        
        precoTotal.innerHTML = `R$ ${precoResumo}.00`
        
        itensCart.forEach(produto => {
            contador++
            quantidadeTotal.innerText = contador
            
            const p = produto.querySelector('p')
            
            p.addEventListener('click', () => {
                produto.remove()
                contador -= 1
                quantidadeTotal.innerText = contador
                console.log(contador)
            })
        })
    
    })
}



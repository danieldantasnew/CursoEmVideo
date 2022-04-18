let numeros = []

//Função que é ativa ao apertar no botão adicionar
function add() {
    var numero = document.getElementById('numero_adiciona')
    
    var texto = document.getElementById('texto')

    let verifica_numero = numeros.indexOf(Number(numero.value)) // verifica se contém um elemento (número) no array

    if(verifica_numero != -1){
        //Quando o indeOf não encontra o elemento dentro do array ele retorna -1 então se for diferente disso, significa que já foi adicionado
        alert('O número já foi adicionado, tente novamente!')
    }
    else{
        numeros.push(Number(numero.value))
        texto.innerHTML += `O número ${Number(numero.value)} foi adicionado\n`
    }

}

//Função que é ativa ao apertar no botão finalizar

function verifica() {
    var conteudo = document.querySelector('p')
    conteudo.style.padding = '10px'

    var texto_total = document.getElementById('total_numeros')
    var texto_maior = document.getElementById('maior_numero')
    var texto_menor = document.getElementById('menor_numero')
    var texto_soma = document.getElementById('soma_numeros')
    var texto_media = document.getElementById('media_numeros')

    texto_total.innerText = `Ao todo, temos ${numeros.length} números`

    numeros.sort() // coloca os números em ordem crescente
    let maior = numeros[0]
    let menor =  numeros[0]
    let soma = 0

    for(let i = 0; i < numeros.length; i++){
        if(i + 1 == numeros.length){
            maior = numeros[i]
        }

        soma += numeros[i]
    }

    texto_maior.innerText = `O maior número informado é o ${maior}`
    texto_menor.innerText = `O menor número informado é o ${menor}`
    texto_soma.innerText = `Somando todos os valores, temos ${soma}`
    texto_media.innerText = `A média dos valores digitados é ${soma/numeros.length}`

}
let numeros = []
var texto_total = document.getElementById('total_numeros')

function isNumero(n) {
    if(Number (n) <= 0 || Number (n) > 100) {
        return false
    }

    else{
        return true
    }
}

function verifica_inLista(numero_lista, lista = []) {
    let verifica_numero = lista.indexOf(numero_lista)
        //Quando o indexOf não encontra o elemento dentro do array ele retorna -1 então se for diferente disso, significa que já foi adicionado

    if(verifica_numero != -1){
        return true
    }

    else{
        return false
    }
}
//Função que é ativa ao apertar no botão adicionar
function add() {
    var numero = document.getElementById('numero_adiciona')
    
    var texto = document.getElementById('texto')

    texto_total.innerHTML = ''
     // verifica se contém um elemento (número) no array

    if(isNumero(Number(numero.value)) == false || verifica_inLista(Number(numero.value), numeros) == true){
        alert('O número já foi adicionado ou inválido, tente novamente!')
    }
    else{
        numeros.push(Number(numero.value))
        texto.innerHTML += `O número ${Number(numero.value)} foi adicionado\n`
    }

}

//Função que é ativa ao apertar no botão finalizar

function mostra_texto() {
    
    var conteudo = document.querySelector('p')
    conteudo.style.padding = '10px'

    let soma = 0

    // let maior = numeros[0]
    // let menor =  numeros[0]
    
    //numeros.sort() // coloca os números em ordem crescente. Sort está dando bug qnd coloca o 100 pois ele deixa na primeira posição

    // for(let i = 0; i < numeros.length; i++){
    //     if(i + 1 == numeros.length){
    //         maior = numeros[i]
    //     }

    //     soma += numeros[i]
    // }


    let maior = numeros[0]
    let menor =  numeros[0]


    for(let i = 0; i < numeros.length; i++){
        if(maior < numeros[i]){
            maior = numeros[i]
        }

        if(numeros[i] < menor){
            menor = numeros[i]
        }
        soma += numeros[i]
    }


    texto_total.innerText = `Ao todo, temos ${numeros.length} números. \nO maior número informado é o ${maior} \nO menor número informado é o ${menor} \nSomando todos os valores, temos ${soma} \nA média dos valores digitados é ${soma/numeros.length}`
}
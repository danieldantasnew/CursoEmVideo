var botao = document.getElementById('botao')
botao.addEventListener('click', verifica)

function verifica(){
    var numero = 0
    var numero_digitado = document.getElementById('numero')

    var valor_numero = Number(numero_digitado.value)

    var armazena = 0;

    var resultado = document.getElementById('area')

    for(numero; numero <= 10; numero += 1){
        armazena = valor_numero * numero;
        resultado.innerHTML += `${valor_numero} X ${numero} = ${armazena}\n`
    }
}
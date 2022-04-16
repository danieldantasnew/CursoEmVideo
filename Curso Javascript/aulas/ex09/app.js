var botao = document.getElementById('contar')
botao.addEventListener('click', verifica)

function verifica() {
    var inicio_valor = document.getElementById('inicio')
    var fim_valor = document.getElementById('fim')
    var passo_valor = document.getElementById('passo')

    var contador = Number(inicio_valor.value);
    var fim = Number(fim_valor.value)
    var passo = Number(passo_valor.value)
    var res = document.getElementById('resultado')


    var mensagem = document.getElementById('titulo')

    if(inicio_valor.value.length == 0 || fim_valor.value.length == 0 || passo_valor.value.length == 0){
        alert('Por favor, preencha os campos corretamente!')
    }

    else if(contador > fim){
        alert('Início é maior que o fim, por favor corrija os dados!')
    }
    
    else{
        mensagem.innerText ='Contando:'
        for(contador; contador <= fim; contador += passo){
            if((contador + passo) > (fim)){
                res.innerText += `${contador} 🏁`
            }
    
            else{
                res.innerText += `${contador} 👉`
            }
        }
    }

}
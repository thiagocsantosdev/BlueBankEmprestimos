function simular(){
 
  const juros = 16
  const valorSolicitado = parseFloat(document.getElementById('valorSolicitado').value) 
  const parcelaSolicitada = parseFloat( document.getElementById('parcelaSolicitada').value)
 
 
  const solicitado = document.getElementById('displayValorSolicitado')
  const parcelamento = document.getElementById('displayParcelaSolicitada')
  
  
  const totalComJuros = document.getElementById('totalJuros')
  const valorAcrescimo = document.getElementById('valorAcrescimo')
  const valorParcela = document.getElementById('valorParcela')

  const acrescimo = (valorSolicitado*juros)/100
  const resultado = valorSolicitado+acrescimo
  const parcelaMensal = resultado/parcelaSolicitada

  
  solicitado.type="text"
  parcelamento.type="text"
  valorAcrescimo.type="text"
  totalComJuros.type="text"
  valorParcela.type="text"

  solicitado.value = "R$:"+ valorSolicitado
  parcelamento.value= parcelaSolicitada+"x"
  valorAcrescimo.value="R$:"+ acrescimo
  totalComJuros.value="R$:"  +resultado
  valorParcela.value="R$:" +parcelaMensal.toFixed(2)
  
}
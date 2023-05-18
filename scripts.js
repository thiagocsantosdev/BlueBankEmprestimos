// Recebe os valores solicitados e aplica uma taxa de juros fixa

function simular() {

 // A taxa fixa que será calculada, o valor inserido pelo usario, e a parcela solicitada
  const juros = 16
  const valorSolicitado = parseFloat(document.getElementById('valorSolicitado').value)
  const parcelaSolicitada = parseFloat(document.getElementById('parcelaSolicitada').value)

// Recebe as ID's do formulario para serem manipuladas 
  const solicitado = document.getElementById('displayValorSolicitado')
  const parcelamento = document.getElementById('displayParcelaSolicitada')
  const totalComJuros = document.getElementById('totalJuros')
  const valorAcrescimo = document.getElementById('valorAcrescimo')
  const valorParcela = document.getElementById('valorParcela')

 // Recebe o ID para o efeito de rolagem da pagina (HREF)
 const rolammento = document.getElementById('rolamento')
 
// Calculo
  const acrescimo = (valorSolicitado * juros) / 100
  const resultado = valorSolicitado + acrescimo
  const parcelaMensal = resultado / parcelaSolicitada

//Validacao, evita que o usuario solicte um valor menor que 100 e maior que 100.000,00
 if (isNaN(valorSolicitado) || valorSolicitado < 100 || valorSolicitado > 100000000){
    window.alert('O valor disponivel é entre 100 e 100.000,00')
    rolammento.href=""
  }
  else{

  // Adiciona o link, caso fosse colocado antes a pagina rolaria mesmo com a negação dos valores acima    
  rolammento.href="#containerResultado"
 
  // Estes elementos no formulário estão como number, evitando input de letras, foi mudado para text para fazer a contatenação com o "R$" 
 
  solicitado.type = "text"
  parcelamento.type = "text"
  valorAcrescimo.type = "text"
  totalComJuros.type = "text"
  valorParcela.type = "text"

  solicitado.value = "R$:" + valorSolicitado
  parcelamento.value = parcelaSolicitada + "x"
  valorAcrescimo.value = "R$:" + acrescimo
  totalComJuros.value = "R$:" + resultado
  valorParcela.value = "R$:" + parcelaMensal.toFixed(2)
 
  }


}

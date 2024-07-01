let partidasGanhas = 100
let partidasPerdidas = 15
let nivel = ganharRankeadas(partidasGanhas, partidasPerdidas)
let saldoVitorias = vitoriasTotais(partidasGanhas, partidasPerdidas)

function vitoriasTotais(vitorias, derrotas){
let saldo = vitorias - derrotas
return saldo
}

function ganharRankeadas(vitorias, derrotas){
	
    let ganhoTotal = vitorias - derrotas
    
    if (ganhoTotal <= 10) {
    ganharRankeadas = ("ferro")}
    else if (ganhoTotal <= 20) {
    ("bronze")}
    else if (ganhoTotal <= 50) {
    ganharRankeadas =("prata")}
    else if (ganhoTotal <= 80){
    ganharRankeadas =("ouro")}
    else if (ganhoTotal <= 90) {
    ganharRankeadas =("diamante")}
    else if (ganhoTotal <= 100) {
    ganharRankeadas =("lendário")}
    else if (ganhoTotal <100){
    ganharRankeadas =("Imortal")}
    
  	return ganharRankeadas
}

console.log (`O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`)
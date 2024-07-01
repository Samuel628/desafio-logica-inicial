let nome = "Adolfo";
let XP = 10001;
let mensagemNome = "Seu Herói de nome ";
let mensagemNivel = " está no nível de ";
let nivel;
if (XP <= 1000) {
    nivel = "Ferro"
}
else if (XP <= 2000) {
    nivel ="Bronze"
}
else if (XP <= 6000) {
    nivel = "Prata"
}
else if (XP <= 7000) {
    nivel = "Ouro"
}
else if (XP <= 8000) {
  nivel = "Platina"
}
else if (XP <= 9000) {
  nivel = "Ascendente"
}
else if (XP <= 10000) {
  nivel = "Imortal"
}
else {
  nivel = "Radiante"
};
console.log (mensagemNome + nome + mensagemNivel + nivel);

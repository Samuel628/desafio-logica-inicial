class heroiGenerico{
	constructor(nomeHeroi, idadeHeroi, tipoHeroi){
    	this.nomeHeroi = nomeHeroi
        this.idadeHeroi = idadeHeroi
        this.tipoHeroi = tipoHeroi
    }
    
    atacar(tipoHeroi){
    	let ataque
        if (this.tipoHeroi === "mago"){
        ataque = "magia"}
        else if (this.tipoHeroi === "guerreiro"){
        ataque = "a espada"}
        else if (this.tipoHeroi === "monge"){
        ataque = "artes marciais"}
        else if(this.tipoHeroi === "ninja"){
        ataque = "shuriken"}
    	console.log(`o ${this.tipoHeroi} de nome ${this.nomeHeroi} e de idade ${this.idadeHeroi} atacou usando ${ataque}`)
    }
}
let novoHeroi = new heroiGenerico("Adalberto", 19, "ninja")
novoHeroi.atacar()

class EstudianteHenryClass{
    constructor(nombre, apellido){
        this.firtsName = nombre || "nombre no enviado"
        this.lastName= apellido || "nombre no enviado"
        this.esEstudiante = true
    }

    presentarHenryChallengeClass() {
        return console.log("El estudiante  "+ this.lastName + "  Presento el examen")
    }

}

let estudiante1 = new EstudianteHenry('angel', 'serrato');
let estudiante2 = new EstudianteHenry('harol', 'henao');
let estudiante3 = new EstudianteHenry('ádalberto', 'leon');
let estudiante4 = new EstudianteHenry('nahuel', 'pacheco');
console.log(estudiante1.presentarHenryChallenger());

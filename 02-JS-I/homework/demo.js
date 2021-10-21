function mayorDeEdad(edad){

if(edad >= 18 ){
return "Esa mayor de edad";
}else if(edad <18){
    return "Es menor";
}else{
    return "No es un numero"
}

}
var persona = mayorDeEdad("leo");
console.log(persona);
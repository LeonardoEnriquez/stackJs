/* var personal1='Leonardo';
var sueldo=1000;
var telefono='6642044836';

var info = 'Hola soy'+personal1+ 'mi numero de telefono es'+telefono;

console.log(info); */
/* 
function personalInfo(nombre,telefono,tema)
{
    var info = 'Hola soy '+nombre+ ' mi numero de telefono es '+telefono+ ' y actualmente estoy cursando el tema '+tema;
    return info;
}

console.log(personalInfo("Leonardo","6642044836","Javascript")) */



var folioActual=(function() {
    var folio=0;
    console.log(folio);
    return folio;    
})();

function obtenerFolioSiguiente(){
    //var folioActual=1; //Este valor debera ser obtenido de la tabla de folios
    return "Nuevo Folio: "+parseInt(folioActual+1);
}


function boletinDatos(nombre,numeroEmpleado,extension,descripcion) {
    var datos= "{\nnombre:"+nombre+"\nnumEmpleado:"+numeroEmpleado+"\nextension:"+extension+"\ndescripcion:"+descripcion+"\n}";
    return datos;
}

console.log(obtenerFolioSiguiente());

console.log(boletinDatos("Leonardo Enriquez","2399","7734","Ampliar la longitud de captura del nombre"));

/* console.log ("Ready for Js");
console.log("Hello Bedu coders");
console.log("Vamos dando los primeros pasos en Js")
console.log('Log con comillas simples')
 
var descripcion="Este es un reto que pertenece a la sesion 1";
console.log("Su descripcion es "+descripcion);
var folio="F00001";
console.log("El folio es "+ folio);

var numFolio= 1;
console.log("Numero de folio"+numFolio);
var numRegistro =-15.1;
console.log("Numero de registro "+numRegistro);

var resultado=true;
console.log("El resultado es "+resultado);
var exitoso=false;
console.log("Se registro correctamente? "+exitoso)

var a=5;
var b=10;
var c=15;
*/
// (13)*(3)*2; 
//((5+150)/5)*2
// (155/5)*2


// b/a+2*c;
// (a+b+c/c)*a
//30*5=150

// ((3*a)/c)+a+b+c
// ((15*5)/15)+30
// 35


// a-(b+c)*a/1
// 5-(25)*5/1
// 5-125=-120
/* 
var time = 33;
var greeting;

if (time>=0 && time <= 12) {
  greeting = "Buen dia";
} else if (time>12 && time < 20) {
  greeting = "Buenas tardes";
} else if (time >= 20 && time <24) {
  greeting = "Buenas noches";
}
else {
    greeting="Hora desconocida"
}

/* console.log(greeting); 
for(var i=1;i<=100;i++)   
{   
    var tipo=(i%2)?"Impar":"Par";
    if(tipo=="Par")
    console.log("El valor "+i+" es un numero par");

} */
for(var i=1;i<=100;i++)   
{   
    if(i==1 || i==3 || i==5) {
        console.log("El valor "+i+" es un numero primo");         
    }    
    for(var p=6;p<=i;p++)
    {
         if(i%p==0 && i%2!=0 && i%3!=0 && i%5!=0 )   
        console.log("El valor "+i+" es un numero primo");         
    }
}       




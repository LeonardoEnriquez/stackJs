/* function multiplyByTwo(numbers){
    var multipiedNumbers=[];
    for (var i=0; i< numbers.length; i++) {
        multipiedNumbers.push(numbers[i]*2);
    }
}

function calculateAverage(numbers){
    var promedio=0;
    for (var i=0; i< numbers.length; i++){
        promedio=promedio+numbers[i];
    }
    promedio=promedio/numbers.length;
    return promedio;
}
var numbers=[2,2,2,2,2];
console.log("promedio= "+calculateAverage(numbers));
 */

 var alumnosBedu=
    [ 
        {
            nombre: "Leonardo",
            lenguajePreferido: "Javascript",
            tiempoExperiencia: 5,
            mensajeBienvenida: function(nombre){
                return "Bienvenido " + this.nombre;
            },
            trabajoPrevios: 
            [
                {
                    nombreEmpresa: "foxconn",
                    puesto: "Ingenierio aplicacion",
                    salario: "20,000"    
                }
            ]
        },
        {
            nombre: "Osmara",
            lenguajePreferido: "Javascript",
            tiempoExperiencia: 5,
            mensajeBienvenida: function(nombre){
                return "Bienvenido " + this.nombre;
            },
            trabajoPrevios: 
            [
                {
                    nombreEmpresa: "Telcel",
                    puesto: "Ingenierio Senior",
                    salario: "30,000"    
                }
            ]
        }
        ,
        {
            nombre: "Alvarez",
            lenguajePreferido: "Javascript",
            tiempoExperiencia:1,
            mensajeBienvenida: function(nombre){
                return "Bienvenido " + this.nombre;
            },
            trabajoPrevios: 
            [
                {
                    nombreEmpresa: "Google corp",
                    puesto: "Ingenierio Junior",
                    salario: "40,000"   
                }
            ]

        }        
    ]

//console.log(alumnosBedu.length);
for(var i=0; i<alumnosBedu.length;i++)
{
  console.log(alumnosBedu[i].mensajeBienvenida());
  console.log("Lenguaje preferido= "+alumnosBedu[i].lenguajePreferido);
  console.log("Años de experiencia= "+alumnosBedu[i].tiempoExperiencia);
  for (var m=0; m<alumnosBedu[i].trabajoPrevios.length;m++)
  {
    console.log("Trabajo anterior= "+alumnosBedu[i].trabajoPrevios[m].nombreEmpresa);
    console.log("Puesto anterior= "+alumnosBedu[i].trabajoPrevios[m].puesto);
    console.log("Salario anterior= "+alumnosBedu[i].trabajoPrevios[m].salario);
  }
  console.log("\n\n");
}
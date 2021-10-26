let cantidadNiños = prompt('¿Cuantos niños van a jugar?');
let saltos = prompt('¿Cada canto se hara la eliminacion de un niño para elegir el primer buscador?');

var niños = [];
var buscador = [];
let contador = 1;

const jugadores = (cantidadNiños) => {
    
    for( i = 1; i <= cantidadNiños; i++) {
            niños.push(i);
        }

    while(niños.length > 1) {
         for(i = 0; i < niños.length; i++) {
             if(contador != saltos) {
                 buscador.push(niños[i]);
                 contador++
            } else {
                contador = 1
            }
        }
        niños = buscador;
        buscador = [];
        }
    return niños;
}

jugadores(cantidadNiños);
console.log(niños);
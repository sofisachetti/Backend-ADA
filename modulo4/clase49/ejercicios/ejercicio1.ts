// Ejercicio 1: Uso básico de type y tuplas (Ejercicio Entrevista) 
//Define un type para representar una tupla de coordenadas en un sistema 2D 
// y una función que reciba dicha tupla para calcular la distancia desde el origen (0,0)

type Coordenadas = [number, number];

function distancia(param: Coordenadas): number {
    let [x, y] = param;
    let distancia = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
    return distancia
}

console.log(distancia([1, 1]));

// 1. Intervado indefinido (hasta cancelacion manual)
let contador = 0;
const intervalo = setInterval(() => {
    contador++;
    console.log(`Contador indefinido: ${contador}`);
}, 1000); // 1000 aca es el intervalo entre cada impresion, serian milisegundos
console.log('Intervalo indefinido iniciado.');

// 1. Ejercicio de Coche 
// Diseña una clase Coche que represente un vehículo. Esta clase debe tener propiedades privadas para marca, modelo, año, y kilometraje. 
// Implementa métodos para encender el coche y realizar un viaje, que incrementen el kilometraje.
// Asegúrate de que el año no sea menor que 1886 (el año en que se inventó el coche) y que el kilometraje no pueda ser negativo. 
// Si se intenta establecer un año o kilometraje no válido, imprime un mensaje indicando el error.

export class Coche {
    private _marca: string;
    private _modelo: string;
    private _anio: number;
    private _kilometraje: number;

    constructor(marca: string, modelo: string, anio: number, kilometraje: number) {
        this._marca = marca;
        this._modelo = modelo;
        this._anio = anio;
        this._kilometraje = kilometraje;
    }

    public get encenderCoche(): string {
        return 'El vehiculo está encendido.';
    }

    public set hacerViaje(km :number) {
        if (km > 0) {
            this._kilometraje += km
            console.log(`El kilometraje actual es: ${this._kilometraje}`);
        } else {
            console.log('El kilometraje debe ser mayor a 0.');
        }
    }

    public set validarAnio(value:number) {
        if (value < 1886) {
            console.log(`El anio ingresado es invalido.`);
        } else {
            console.log('El anio del coche es valido.');
        }
    }
}

const miAuto = new Coche('Fiat', 'Uno', 2000, 20);
miAuto.encenderCoche()
miAuto.hacerViaje(50)
miAuto.validarAnio(2010)


// export class Coche {
//     private _marca:string;
//     private _modelo:string;
//     private _anio:number;
//     private _kilometraje:number;
//     constructor(_marca:string, _modelo:string, _anio:number, _kilometraje:number){
//         this._marca = _marca;
//         this._modelo = _modelo;
//         this._anio = _anio;
//         this._kilometraje = _kilometraje;
//     }
// public get encenderCoche(): string{
//     return "El vehiculo esta encendido.";    
// }
// public set hacerViaje(value:number) {
//     if(value > 0){
//         this._kilometraje += value;
//         console.log(`Su kilometraje actual es: ${this._kilometraje}`);
        
//     }else{
//         console.log("Debe realizar un viaje mayor a 0km para modificar el kilometraje.");        
//     }
// }
// public set validarAnio(value:number) {
//     if(value < 1886) {
//         console.log(`El coche no es valido.`);        
//     }else{
//         this.hacerViaje;
//     }
// }
// }
// const coche1 = new Coche("tutu", "lolo", 1989, 20)
// console.log(coche1.validarAnio)
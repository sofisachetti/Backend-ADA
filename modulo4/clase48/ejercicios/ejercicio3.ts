// Ejercicio 3: Encapsulamiento con Métodos Privados
// Crea una clase Banco con un saldo inicial privado. El saldo solo puede ser modificado a través de un método depositar y otro retirar, los cuales deben validar que la cantidad no sea negativa. Implementa métodos públicos para consultar el saldo.

class Banco {
    private _saldoInicial: number;

    constructor(saldoInicial: number) {
        this._saldoInicial = saldoInicial;
    }

    public set depositar(value: number) {
        if (value > 0) {
            this._saldoInicial += value;
        } else {
            console.log('El saldo debe ser mayor a 0.');
        }
    }

    public set retirar(value: number) {
        if (value <= this._saldoInicial) {
            this._saldoInicial -= value;
        } else {
            console.log('Saldo insuficiente.');
        }
    }

    public get consultarSaldo(): string {
        return `Su saldo actual es de ${this._saldoInicial}`;
    }
}

let cuenta = new Banco(100);
cuenta.depositar = 200;
console.log(cuenta.consultarSaldo);
cuenta.retirar = 50;
console.log(cuenta.consultarSaldo);
cuenta.retirar = 400;
//console.log(cuenta.consultarSaldo);

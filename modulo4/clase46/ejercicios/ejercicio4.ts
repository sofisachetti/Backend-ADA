// Ejercicio 4: Comparación - Clases Abstractas vs Interfaces
// Crea una interfaz PagoOnline con un método procesarPago().
// Crea una clase abstracta Pago con un método concreto validarMonto() y un método abstracto completarPago().
// Implementa ambas estructuras en una clase concreta PagoConTarjeta.

interface PagoOnline {
    procesarPago(): void;
}

abstract class Pago {
    constructor(protected monto: number) {}

    validarMonto(): void {
        console.log(`El monto a abonar es ${this.monto}`);
    }

    abstract completarPago(): void;
}

class PagoConTarjeta extends Pago implements PagoOnline {
    constructor(monto: number) {
        super(monto)
    }

    // validarMonto(): void {
    //     super.validarMonto()
    // }

    procesarPago(): void {
        console.log(`El pago del monto ${this.monto} se proceso con exito.`);
    }

    completarPago(): void {
        console.log('Pago completado.');
    }
}

const nuevoPago = new PagoConTarjeta(1000);
nuevoPago.validarMonto();
nuevoPago.procesarPago();
nuevoPago.completarPago();
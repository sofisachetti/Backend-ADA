// Ejercicio 5: Herencia con Modificadores de Acceso
// Consigna: Crea una clase base Compania con un atributo privado nombreCompania y un atributo protegido ingresosAnuales. Crea una clase derivada EmpresaTecnologia que use el atributo protegido y agregue un método que calcule el doble de los ingresos anuales.

class Compania {
    private nombreCompania: string;
    protected ingresosAnuales: number;
    constructor(nombreCompania: string, ingresosAnuales: number) {
        this.nombreCompania = nombreCompania;
        this.ingresosAnuales = ingresosAnuales;
    }
}

class EmpresaTecnologia extends Compania {
    constructor(nombreCompania: string, ingresosAnuales: number) {
        super(nombreCompania, ingresosAnuales);
    }
    dobleIngresos() {
        console.log(`El doble de los ingresos anuales es: ${this.ingresosAnuales * 2}`)
    }
}

const apple = new EmpresaTecnologia("Apple", 1000);
apple.dobleIngresos()
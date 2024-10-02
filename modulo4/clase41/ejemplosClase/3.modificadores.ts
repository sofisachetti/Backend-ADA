class Animal {
    // Propiedad publica (acceso desde cualquier parte - por defecto)
    public nombre: string;
    
    // Propiedad privada (solo accesible dentro de esta clase)
    private tipoAlimento: string;

    // Propiedad protegida (accesible dentro de esta clase y clases hijas - herencia)
    protected especie: string;

    constructor(nombre: string, tipoAlimento: string, especie: string) {
        this.nombre = nombre;
        this.tipoAlimento = tipoAlimento;
        this.especie = especie;
    }

    // Metodo publico (accesible desde cualquier parte)
    public describirAnimal(): void {
        console.log(`${this.nombre}, un animal de la especie ${this.especie}.`);
    }

    // Metodo privado (accesible solo dentro de la clase)
    private mostrarTipoAlimento(): void {
        console.log(`${this.nombre}, se alimenta de: ${this.tipoAlimento}`);
    }

    // Metodo protegido (accesible dentro de esta clas y de las clases hijas - herencia)
    protected sonidoAnimal(): void {
        console.log(`${this.nombre}, hace un sonido.`);
    }

    // Metodo para acceder al privado dentro de la clase
    public alimentarAnimal(): void {
        this.mostrarTipoAlimento() // Llamo al metodo privado dentro de la clase
    }
}

// Crear una instancia de la clase animal
const miAnimal = new Animal("Gato", "Croquetas", "Felino");
miAnimal.describirAnimal();
miAnimal.alimentarAnimal();
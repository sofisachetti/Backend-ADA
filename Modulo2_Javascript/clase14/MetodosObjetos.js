// Metodos de Objetos: Acciones que realiza.
/*let curso = {
    cantidadDeAlumnas : 32,
    docentes : ["Berni", "Mariana"],
    horario : "de 19 a 22 hs",
    dias : "lunes, miercoles y viernes",
    notificaciones : function () {
        return "El horario de la cursada es de 19 a 22 hs.";
    }
}

console.log(curso.notificaciones());*/

//Cuando ya tenemos definida la propiedad:
/*let curso = {
    cantidadDeAlumnas : 32,
    docentes : ["Berni", "Mariana"],
    horario : "de 19 a 22 hs",
    dias : "lunes, miercoles y viernes",
    notificaciones : function () {
        return "El horario de la cursada es " + curso.horario;
    }
}

console.log(curso.notificaciones())*/

// Palabra reservada This: Buena práctica. Es lo mismo que
//poner el nombre del objeto
let curso = {
    cantidadDeAlumnas : 32,
    docentes : ["Berni", "Mariana"],
    horario : "de 19 a 22 hs",
    dias : "lunes, miercoles y viernes",
    notificaciones : function () {
        return "El horario de la cursada es " + this.horario;
    }
}

console.log(curso.notificaciones())
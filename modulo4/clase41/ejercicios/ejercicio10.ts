// Ejercicio 10: Registro de Estudiantes
// 1. Crea un sistema para registrar Estudiantes con las siguientes clases:
// o Estudiante: Clase que incluye propiedades como nombre, edad y
// curso, además de un método que muestre la información del estudiante.
// o RegistroEstudiantes: Clase que maneje una lista de estudiantes, con
// métodos para agregar un estudiante y mostrar todos los estudiantes registrados.

class Student {
    name: string;
    age: number;
    course: string;

    constructor(name: string, age: number, course: string) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    studentInfo(): void {
        console.log(`Name: ${this.name}\nAge: ${this.age}\nCourse: ${this.course}`);
    }
}

class StudentRegister {
    studentsList: Student[] = [];

    addStudent(newStudent: Student): void {
        this.studentsList.push(newStudent);
    }

    showStudentsList(): void {
        console.log(`Complete list of students: \n`);
        this.studentsList.forEach(student => {
            student.studentInfo();
            console.log('\n');
        });
    }
}

const newRegister = new StudentRegister();
const student1 = new Student('Ana', 20, 'Literature');
const student2 = new Student('John', 21, 'History');
const student3 = new Student('Martha', 20, 'Law');

newRegister.addStudent(student1);
newRegister.addStudent(student2);
newRegister.addStudent(student3);

newRegister.showStudentsList()
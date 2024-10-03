// Declaramos funciones y constantes
// Despues las exportamos al final del archivo utilizando la exportacion separada.

const calculateRectangleArea = (width: number, height: number): number => {
    return width + height;
}

const RECTANGLE_NAME = 'Rectangle';

// Exportacion separada
export {calculateRectangleArea, RECTANGLE_NAME}
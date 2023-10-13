class Persona{
    //funcion que permite construir la instancia de un objeto
    constructor(elNombre) {
        this.nombre = elNombre
        this.edad = 0
    }

    saludar() {
        console.log(`Hola soy ${this.nombre}`)
        }
}
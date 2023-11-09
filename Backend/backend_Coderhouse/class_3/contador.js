class Contador{
    static cantidadContadores = 0
    static sumaTodosLosContadoress=0

    constructor(nombre){
        this.responsable = nombre
        this.contador=0
        Contador.cantidadContadores++
    }

    incrementarContador(){
        this.contador++
        Contador.sumaTodosLosContadoresson++
    }

    verContador(){
        return this.contador
    }

    verResponsable(){
        return this.responsable
    }
}

let cont01 = new Contador('contador1')
let cont02 = new Contador('contador2')
let cont03 = new Contador('contador3')

cont01.incrementarContador()
cont01.incrementarContador()
cont01.incrementarContador()


cont02.incrementarContador()

console.log(`el responsable del cont01 es ${cont01.verResponsable}`)

class TicketManager{

    static #precioBaseGanancia=0.15

    constructor(){
        this.eventos = []
    }

    getEventos(){
        return this.eventos
    }

    agregarEvento(nombre, luga, precio, capacidad=50, fecha){

        let id= 1
        if(this.eventos.length>0){
            id=this.eventos[this.eventos.length-1].id +1
        }
        let nuevoEvento = {
            id,
            nombre, lugar,
            precio:precio+precio*TicketManager.#precioBaseGanancia,
            capaciad, 
            fecha,
            participantes:[]
        }

        this.eventos.push(nuevoEvento)
    }

}
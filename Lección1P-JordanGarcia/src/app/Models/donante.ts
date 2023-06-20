export class donante {
    
    nombre: string;
    apellido: string;
    fechaEntrega: string;
    valorDonar: number;
    estado:boolean;
    

    constructor( nombre: string, apellido: string,fechaEntrega:string,valorDonar:number, estado: boolean) {
        
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaEntrega= fechaEntrega;
        this.valorDonar= valorDonar;
        this.estado = estado;

    }
}
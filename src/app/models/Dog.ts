export class Dog{
    id: number = 0;
    raza: string = "";
    nombre: string = "";
    fecha_nac: string = "";
    edad: number = 0;

    constructor(id:number, raza: string, nombre: string, fecha_nac: string, edad: number){}
}

export class Raza{
    img:string="";
    raza:string="";
    cantidadInscritos:number=0
    constructor(img:string,raza:string){}
}
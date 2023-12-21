import { Teacher } from "./Teacher";

export interface IAviso{
    teacher?:number;
    header?:string;
    text?:string;
    hora?:string;
}

export class Aviso{
    teacher?:number;
    header?:string;
    text?:string;
    hora?:string;

constructor(aviso:IAviso){
    this.teacher=aviso.teacher;
    this.header=aviso.header;
    this.text=aviso.text;
    this.hora=aviso.hora;
}

}
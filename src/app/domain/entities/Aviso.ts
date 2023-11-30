import { Teacher } from "./Teacher";

export interface IAviso{
    teacher:string;
    header:string;
    text:string;
}

export class Aviso{
    teacher?:string;
    header?:string;
    text?:string;

constructor(aviso:IAviso){
    this.teacher=aviso.teacher;
    this.header=aviso.header;
    this.text=aviso.text
}

}
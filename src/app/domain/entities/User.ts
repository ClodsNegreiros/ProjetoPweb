export interface IUser{
    id?:string,
    email?: string;
    senha?:string;
    isaluno?:boolean
}

export class User{
    id?:string;
    email?: string;
    senha?:string;
    isaluno?:boolean

    constructor(User:IUser){
        this.id=User.id,
        this.email=User.email,
        this.senha=User.senha,
        this.isaluno=User.isaluno
    }
}
export class UsuarioModel{
    id: number;
    name: string;
    email: string;

    constructor(partial: Partial<UsuarioModel>){
        Object.assign(this, partial);
    }
}
import { Injectable, NotFoundException } from '@nestjs/common';
import { UsuarioModel } from './models/usuario.model';

@Injectable()
export class UsuarioService {
  private users: UsuarioModel[] = [];

  findAll(): UsuarioModel[] {
    return this.users;
  }

  findOne(id: number): UsuarioModel {
    const user = this.users.find(user => user.id === id);
    if (!user) throw new NotFoundException(Usuario con ID ${id} no encontrado);
    return user;
  }

  create(userData: Partial<UsuarioModel>): UsuarioModel {
    const newUser = new UsuarioModel({ id: Date.now(), ...userData });
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updateData: Partial<UsuarioModel>): UsuarioModel {
    const user = this.findOne(id);
    Object.assign(user, updateData);
    return user;
  }

  delete(id: number): void {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) throw new NotFoundException(Usuario con ID ${id} no encontrado);
    this.users.splice(index, 1);
  }
}
import { Injectable, NotFoundException } from '@nestjs/common';
import { UserModel } from './models/usuario.model';

@Injectable()
export class UsersService {
  private users: UserModel[] = [];

  findAll(): UserModel[] {
    return this.users;
  }

  findOne(id: number): UserModel {
    const user = this.users.find(user => user.id === id);
    if (!user) throw new NotFoundException(Usuario con ID ${id} no encontrado);
    return user;
  }

  create(userData: Partial<UserModel>): UserModel {
    const newUser = new UserModel({ id: Date.now(), ...userData });
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updateData: Partial<UserModel>): UserModel {
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
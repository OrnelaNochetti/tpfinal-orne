import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioModel } from './models/usuario.model';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsuarioService) {}

  @Get()
  getAllUsers(): UsuarioModel[] {
    return this.usersService.findAll();
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number): UsuarioModel {
    return this.usersService.findOne(id);
  }

  @Post()
  createUser(@Body() userData: Partial<UsuarioModel>): UsuarioModel {
    return this.usersService.create(userData);
  }

  @Put(':id')
  updateUser(@Param('id', ParseIntPipe) id: number, @Body() updateData: Partial<UsuarioModel>): UsuarioModel {
    return this.usersService.update(id, updateData);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number): void {
    return this.usersService.delete(id);
  }
}
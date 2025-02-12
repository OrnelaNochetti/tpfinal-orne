import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './usuario.service';
import { UserModel } from './models/usuario.model';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers(): UserModel[] {
    return this.usersService.findAll();
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number): UserModel {
    return this.usersService.findOne(id);
  }

  @Post()
  createUser(@Body() userData: Partial<UserModel>): UserModel {
    return this.usersService.create(userData);
  }

  @Put(':id')
  updateUser(@Param('id', ParseIntPipe) id: number, @Body() updateData: Partial<UserModel>): UserModel {
    return this.usersService.update(id, updateData);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number): void {
    return this.usersService.delete(id);
  }
}
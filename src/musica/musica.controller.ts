import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { MusicaService } from './musica.service';
import { MusicaModel } from './models/musica.model';

@Controller('music')
export class MusicaController {
  constructor(private readonly musicService: MusicaService) {}

  @Get()
  getAllMusic(): MusicaModel[] {
    return this.musicService.findAll();
  }

  @Get(':id')
  getMusic(@Param('id', ParseIntPipe) id: number): MusicaModel {
    return this.musicService.findOne(id);
  }

  @Post()
  addMusic(@Body() musicData: Partial<MusicaModel>): MusicaModel {
    return this.musicService.create(musicData);
  }

  @Put(':id')
  updateMusic(@Param('id', ParseIntPipe) id: number, @Body() updateData: Partial<MusicaModel>): MusicaModel {
    return this.musicService.update(id, updateData);
  }

  @Delete(':id')
  deleteMusic(@Param('id', ParseIntPipe) id: number): void {
    return this.musicService.delete(id);
  }
}
import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { MusicService } from './musica.service';
import { MusicModel } from './models/musica.model';

@Controller('music')
export class MusicController {
  constructor(private readonly musicService: MusicService) {}

  @Get()
  getAllMusic(): MusicModel[] {
    return this.musicService.findAll();
  }

  @Get(':id')
  getMusic(@Param('id', ParseIntPipe) id: number): MusicModel {
    return this.musicService.findOne(id);
  }

  @Post()
  addMusic(@Body() musicData: Partial<MusicModel>): MusicModel {
    return this.musicService.create(musicData);
  }

  @Put(':id')
  updateMusic(@Param('id', ParseIntPipe) id: number, @Body() updateData: Partial<MusicModel>): MusicModel {
    return this.musicService.update(id, updateData);
  }

  @Delete(':id')
  deleteMusic(@Param('id', ParseIntPipe) id: number): void {
    return this.musicService.delete(id);
  }
}
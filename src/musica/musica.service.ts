import { Injectable, NotFoundException } from '@nestjs/common';
import { MusicaModel } from './models/music.model';

@Injectable()
export class MusicaService {
  private musicCollection: MusicaModel[] = [];

  findAll(): MusicaModel[] {
    return this.musicCollection;
  }

  findOne(id: number): MusicaModel {
    const song = this.musicCollection.find(song => song.id === id);
     if (!song) throw new NotFoundException('Canción con ID ${id} no encontrada');
    return song;
  }

  create(musicData: Partial<MusicaModel>): MusicaModel {
    const newMusic = new MusicaModel({ id: Date.now(), ...musicData });
    this.musicCollection.push(newMusic);
    return newMusic;
  }

  update(id: number, updateData: Partial<MusicaModel>): MusicaModel {
    const song = this.findOne(id);
    Object.assign(song, updateData);
    return song;
  }

  delete(id: number): void {
    const index = this.musicCollection.findIndex(song => song.id === id);
     if (index === -1) throw new NotFoundException('Canción con ID ${id} no encontrada');
    this.musicCollection.splice(index, 1);
  }
}
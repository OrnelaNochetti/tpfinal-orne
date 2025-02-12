import { Injectable, NotFoundException } from '@nestjs/common';
import { MusicModel } from './models/musica.model';

@Injectable()
export class MusicService {
  private musicCollection: MusicModel[] = [];

  findAll(): MusicModel[] {
    return this.musicCollection;
  }

  findOne(id: number): MusicModel {
    const song = this.musicCollection.find(song => song.id === id);
    if (!song) throw new NotFoundException(Canción con ID ${id} no encontrada);
    return song;
  }

  create(musicData: Partial<MusicModel>): MusicModel {
    const newMusic = new MusicModel({ id: Date.now(), ...musicData });
    this.musicCollection.push(newMusic);
    return newMusic;
  }

  update(id: number, updateData: Partial<MusicModel>): MusicModel {
    const song = this.findOne(id);
    Object.assign(song, updateData);
    return song;
  }

  delete(id: number): void {
    const index = this.musicCollection.findIndex(song => song.id === id);
    if (index === -1) throw new NotFoundException(Canción con ID ${id} no encontrada);
    this.musicCollection.splice(index, 1);
  }
}
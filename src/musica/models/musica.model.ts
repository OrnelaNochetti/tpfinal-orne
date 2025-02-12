export class MusicaModel {
  id: number;
  title: string;
  artist: string;
  genre?: string;

  constructor(partial: Partial<MusicaModel>) {
    Object.assign(this, partial);
  }
}
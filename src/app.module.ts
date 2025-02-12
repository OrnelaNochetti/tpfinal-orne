
import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { MusicaModule } from './musica/musica.module';

@Module({
  imports: [UsuarioModule, MusicaModule],
})
export class AppModule {}
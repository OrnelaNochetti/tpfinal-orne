
import { Module } from '@nestjs/common';
import { UsersModule } from './usuario/usuario.module';
import { MusicModule } from './musica/musica.module';

@Module({
  imports: [UsersModule, MusicModule],
})
export class AppModule {}
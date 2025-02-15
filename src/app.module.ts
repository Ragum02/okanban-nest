import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListModule } from './list/list.module';
import { CardModule } from './card/card.module';
import { TagModule } from './tag/tag.module';
import { TypeOrmModule } from '@nestjs/typeorm';

// TODO - Implanté Dotenv integrés a NEST

@Module({
  imports: [
    TypeOrmModule.forRoot({
      //On lui déclare qu'il va utilisé TypeOrm
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'okanban',
      password: 'okanban',
      database: 'okanban',
      autoLoadEntities: true,
    }),
    ListModule,
    CardModule,
    TagModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

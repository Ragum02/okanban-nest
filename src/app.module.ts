import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListModule } from './list/list.module';
import { CardModule } from './card/card.module';
import { TagModule } from './tag/tag.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'okanban',
      password: 'okanban',
      database: 'okanban',
      autoLoadEntities: true,
    }),
    ListModule,CardModule,TagModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListController } from './list/list.controller';
import { ListService } from './list/list.service';
import { ListModule } from './list/list.module';

 @Module({
  imports: [ListModule],
  controllers: [AppController, ListController],
  providers: [AppService, ListService],
})
export class AppModule {}

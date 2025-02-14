import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { List } from '../models/list';
import { ListController } from './list.controller';
import { ListService } from './list.service';

@Module({
  imports: [SequelizeModule.forFeature([List])],
  providers: [ListService],
  controllers: [ListController],
})
export class ListModule { }


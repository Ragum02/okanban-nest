import { Module } from '@nestjs/common';
import { ListModule } from './list.module';
import { ListService } from './list.service';
import { ListController } from './list.controller';

@Module({
  imports: [ListModule],
  providers: [ListService],
  controllers: [ListController]
})
export class UserHttpModule {}
import { Controller, Get, Param } from '@nestjs/common';
import { ListService } from './list.service';

@Controller('list')
export class ListController {
  constructor(private listService: ListService) {}

  @Get()
  async findAll() {
    return this.listService.findAll();
  }

  @Get('/:id')
  async findOne(@Param() params: { id: number }) {
    return this.listService.findOne(params);
  }
}

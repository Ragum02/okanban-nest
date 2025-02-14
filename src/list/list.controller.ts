import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

  @Post()
  async addList(@Body() body: object) {
    return this.listService.addList(body);
  }
}

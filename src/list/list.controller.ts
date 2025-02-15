import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ListService } from './list.service';

@Controller('api/lists')
export class ListController {
  constructor(private listService: ListService) {}

  @Get()
  async findAll() {
    return await this.listService.findAll();
  }

  @Get('/:id')
  async findOne(@Param() params: { id: number }) {
    return await this.listService.findOne(params.id);
  }

  @Post()
  async addList(@Body() body: object) {
    return await this.listService.addList(body);
  }

  @Patch('/:id')
  async updateList(@Body() body: object, @Param() params: { id: number }) {
    return await this.listService.updateList(body, params.id);
  }

  @Delete('/:id')
  async deleteList(@Param() params: { id: number }) {
    return await this.listService.deleteList(params.id);
  }
}

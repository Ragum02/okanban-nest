import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TagService } from './tag.service';

@Controller('api/tags')
export class TagController {
  constructor(private tagService: TagService) {}

  @Get()
  async findAll() {
    return await this.tagService.findAll();
  }

  @Get('/:id')
  async findOne(@Param() params: { id: number }) {
    return await this.tagService.findOne(params.id);
  }

  @Post()
  async addTag(@Body() body: object) {
    return await this.tagService.addTag(body);
  }

  @Patch('/:id')
  async updateTag(@Body() body: object, @Param() params: { id: number }) {
    return await this.tagService.updateTag(body, params.id);
  }

  @Delete('/:id')
  async deleteTag(@Param() params: { id: number }) {
    return await this.tagService.deleteTag(params.id);
  }

  @Get('/:id/cards')
  async findOneAndCards(@Param() params: { id: number }) {
    return await this.tagService.findOneAndCards(params.id);
  }
}

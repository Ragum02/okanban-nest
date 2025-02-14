import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CardService } from './card.service';

@Controller('api/cards')
export class CardController {
  constructor(private cardService: CardService) {}

  @Get()
  async findAll() {
    return await this.cardService.findAll();
  }

  @Get('/:id')
  async findOne(@Param() params: { id: number }) {
    return await this.cardService.findOne(params.id);
  }

  @Post()
  async addCard(@Body() body: object) {
    return await this.cardService.addCard(body);
  }

  @Patch('/:id')
  async updateCard(@Body() body: object, @Param() params: { id: number }) {
    return await this.cardService.updateCard(body, params.id);
  }

  @Delete('/:id')
  async deleteList(@Param() params: { id: number }) {
    return await this.cardService.deleteCard(params.id);
  }
}

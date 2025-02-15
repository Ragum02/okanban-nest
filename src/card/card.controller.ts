import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CardService } from './card.service';

@Controller('api/cards') //Url source de ce controller
export class CardController {
  constructor(private cardService: CardService) {}

  @Get()
  async findAll() {
    return await this.cardService.findAll({ relations: { tags: true } });
  }

  @Get('/:id') //Plus de route :D
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

  @Put('/:card_id/tags/:tag_id')
  //@Decorateur pour signifié qu'il faut recuperé le paramètre de l'url , et lui indique les types de chacuns
  async addTagOnCard(@Param() params: { card_id: number; tag_id: number }) {
    return await this.cardService.addTagOnCard(params.card_id, params.tag_id);
  }

  @Delete('/:card_id/tags/:tag_id')
  async removeTagFromCard(
    @Param() params: { card_id: number; tag_id: number },
  ) {
    return await this.cardService.removeTagFromCard(
      //ESlint qui pete un cable...
      params.card_id,
      params.tag_id,
    );
  }
}

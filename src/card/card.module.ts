import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from './entities/card.entity';
import { Tag } from 'src/tag/entities/tag.entity';
import { CardService } from './card.service';
import { CardController } from './card.controller';

@Module({
  //Ajout de tag pour la relation
  imports: [TypeOrmModule.forFeature([Card, Tag])],
  providers: [CardService],
  controllers: [CardController],
})
export class CardModule {}

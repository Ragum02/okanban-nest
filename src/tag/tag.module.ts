import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag } from './entities/tag.entity';
import { TagService } from './tag.service';
import { TagController } from './tag.controller';
import { Card } from 'src/card/entities/card.entity';

@Module({
  //Il me semble que le CARD n'est pas nécessaire ici
  //Puisque la géstion de l'ajout et suppression n'est utile que du côté des cartes justement, mais dans le doute...
  imports: [TypeOrmModule.forFeature([Tag, Card])],
  providers: [TagService],
  controllers: [TagController],
})
export class TagModule {}

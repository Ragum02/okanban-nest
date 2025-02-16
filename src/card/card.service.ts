import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Card } from './entities/card.entity';
import { Tag } from '../tag/entities/tag.entity';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card)
    private cardRepository: Repository<Card>,
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>,
  ) {}

  findAll(options?: { relations: { tags: boolean } }): Promise<Card[]> {
    return this.cardRepository.find(options);
  }

  findOne(id: number): Promise<Card | null> {
    return this.cardRepository.findOne({
      where: { id: id },
      relations: ['tags'],
    });
  }

  async addCard(body: object): Promise<Card> {
    const card = this.cardRepository.create(body);
    return await this.cardRepository.save(card);
  }

  async updateCard(body: object, id: number): Promise<Card[]> {
    await this.cardRepository.update(id, body);
    return await this.cardRepository.findBy({ id: id });
  }

  async deleteCard(id: number) {
    await this.cardRepository.delete(id);
    console.log('Supprimer');
  }

  async addTagOnCard(card_id: number, tag_id: number) {
    const card = await this.cardRepository.findOne({
      where: { id: card_id },
      relations: ['tags'],
    });
    const tag = await this.tagRepository.findOne({ where: { id: tag_id } });

    if (!card || !tag) {
      //obligé de créer une condition et une erreur sinon typescript refuse
      throw new Error('Carte ou Tag non trouver');
    }

    card.tags.push(tag);
    await this.cardRepository.save(card);

    return this.cardRepository.findOne({
      where: { id: card_id },
      relations: ['tags'],
      select: { tags: { name: true } },
    });
  }

  async removeTagFromCard(card_id: number, tag_id: number) {
    const card = await this.cardRepository.findOne({
      where: { id: card_id },
      relations: ['tags'],
    });

    const tag = await this.tagRepository.findOne({ where: { id: tag_id } });

    if (!card || !tag) {
      //obligé de créer une condition et une erreur sinon typescript refuse
      throw new Error('Carte ou Tag non trouver');
    }
    card.tags = card.tags.filter((tag) => tag.id === tag_id);
    //J'suis trop con j'ai persisté pendant 2h avec un ' !== '
    await this.cardRepository.save(card);

    return this.cardRepository.findOne({
      where: { id: card_id },
      relations: ['tags'],
    });
  }

  async findOneAndList(id: number): Promise<Card | null> {
    return this.cardRepository.findOne({
      where: { id },
      relations: ['list'],
    });
  }
}

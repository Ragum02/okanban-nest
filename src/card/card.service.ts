import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Card } from './entities/card.entity';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card)
    private cardRepository: Repository<Card>,
  ) {}

  findAll(): Promise<Card[]> {
    return this.cardRepository.find();
  }

  findOne(id: number): Promise<Card[]> {
    return this.cardRepository.findBy({ id: id });
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
}

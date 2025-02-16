import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tag } from './entities/tag.entity';
import { Card } from '../card/entities/card.entity';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>,
    @InjectRepository(Card)
    private cardRepository: Repository<Card>,
  ) {}

  findAll(): Promise<Tag[]> {
    return this.tagRepository.find();
  }

  findOne(id: number): Promise<Tag[]> {
    return this.tagRepository.findBy({ id: id });
  }

  async addTag(body: object): Promise<Tag> {
    const tag = this.tagRepository.create(body);
    return await this.tagRepository.save(tag);
  }

  async updateTag(body: object, id: number): Promise<Tag[]> {
    await this.tagRepository.update(id, body);
    return await this.tagRepository.findBy({ id: id });
  }

  async deleteTag(id: number) {
    await this.tagRepository.delete(id);
    console.log('Supprimer');
  }

  findOneAndCards(id: number) {
    return this.tagRepository.findOne({
      where: { id: id },
      relations: ['cards'],
    });
  }
}

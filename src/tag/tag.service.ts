import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tag } from './entities/tag.entity';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>,
  ) { }

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
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { List } from './entities/list.entity';

@Injectable()
export class ListService {
  constructor(
    @InjectRepository(List)
    private listRepository: Repository<List>,
  ) {}

  findAll(): Promise<List[]> {
    return this.listRepository.find();
  }

  findOne(id: number): Promise<List[]> {
    return this.listRepository.findBy({ id: id });
  }

  async addList(body: object): Promise<List> {
    const list = this.listRepository.create(body);
    return await this.listRepository.save(list);
  }

  async updateList(body: object, id: number): Promise<List[]> {
    await this.listRepository.update(id, body);
    return await this.listRepository.findBy({ id: id });
  }

  async deleteList(id: number) {
    await this.listRepository.delete(id);
    console.log('Supprimer');
  }
}

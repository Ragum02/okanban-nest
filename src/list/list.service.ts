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

  findOne(params: { id: number }): Promise<List[]> {
    return this.listRepository.findBy({ id: params.id });
  }
}

import { Injectable, Dependencies } from '@nestjs/common';
import { getModelToken } from '@nestjs/sequelize';
import List from '../models/list';

@Injectable()
@Dependencies(getModelToken(List))
export class ListService {
  constructor(listsRepository) {
    this.listsRepository = listsRepository;
  }

  async findAll() {
    return this.listModel.findAll();
  }

  findOne(id) {
    return this.listModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id) {
    const list = await this.findOne(id);
    await list.destroy();
  }
}
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import List from '../models/list';
import { ListService } from './list.service';

@Controller('/api/lists')
export class ListController {
    constructor(listService) {
        this.listService = listService;
      }

  @Get()
  findAll(){
    return this.listService.findAll();
  }

}
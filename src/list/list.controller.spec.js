import { Test } from '@nestjs/testing';
import { ListController } from './list.controller';

describe('List Controller', () => {
  let controller;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [ListController],
    }).compile();

    controller = module.get(ListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test } from '@nestjs/testing';
import { ListService } from './list.service';

describe('ListService', () => {
  let service;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ListService],
    }).compile();

    service = module.get(ListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

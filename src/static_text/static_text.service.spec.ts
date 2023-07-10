import { Test, TestingModule } from '@nestjs/testing';
import { StaticTextService } from './static_text.service';

describe('StaticTextService', () => {
  let service: StaticTextService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StaticTextService],
    }).compile();

    service = module.get<StaticTextService>(StaticTextService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

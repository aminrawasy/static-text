import { Test, TestingModule } from '@nestjs/testing';
import { StaticTextController } from './static_text.controller';
import { StaticTextService } from './static_text.service';

describe('StaticTextController', () => {
  let controller: StaticTextController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StaticTextController],
      providers: [StaticTextService],
    }).compile();

    controller = module.get<StaticTextController>(StaticTextController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

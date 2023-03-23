import { Test, TestingModule } from '@nestjs/testing';
import { AboutInfoService } from './about-info.service';

describe('AboutInfoService', () => {
  let service: AboutInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AboutInfoService],
    }).compile();

    service = module.get<AboutInfoService>(AboutInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

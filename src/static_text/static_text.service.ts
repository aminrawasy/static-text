import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StaticText } from './entities/static_text.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StaticTextService {
  constructor(
    @InjectRepository(StaticText)
    private readonly staticTextRepo: Repository<StaticText>,
  ) {}

  async findAll() {
    return await this.staticTextRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} staticText`;
  }

  remove(id: number) {
    return `This action removes a #${id} staticText`;
  }
}

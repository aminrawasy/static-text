import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StaticText } from './entities/static_text.entity';
import { Repository } from 'typeorm';
import { UpdateStaticTextDto } from './dto/update-static_text.dto';

@Injectable()
export class StaticTextService {
  constructor(
    @InjectRepository(StaticText)
    private readonly staticTextRepo: Repository<StaticText>,
  ) {}

  async findAll() {
    return await this.staticTextRepo.find();
  }

  async update(
    id: number,
    updateUserDto: UpdateStaticTextDto,
  ): Promise<StaticText> {
    const static_text = await this.staticTextRepo.findOne({
      where: { id },
    });
    static_text.key = updateUserDto.key;
    static_text.language = updateUserDto.language;
    static_text.value = updateUserDto.value;

    return await this.staticTextRepo.save(static_text);
  }

  remove(id: number) {
    return `This action removes a #${id} staticText`;
  }
  async findOne(id: number) {
    return await this.staticTextRepo.find({ where: { id } });
  }
}

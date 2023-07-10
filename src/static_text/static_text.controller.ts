import { Controller, Get, Param, Delete } from '@nestjs/common';
import { StaticTextService } from './static_text.service';

@Controller('static-text')
export class StaticTextController {
  constructor(private readonly staticTextService: StaticTextService) {}

  @Get()
  findAll() {
    return this.staticTextService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.staticTextService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.staticTextService.remove(+id);
  }
}

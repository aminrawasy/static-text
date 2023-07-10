import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StaticTextService } from './static_text.service';
import { CreateStaticTextDto } from './dto/create-static_text.dto';
import { UpdateStaticTextDto } from './dto/update-static_text.dto';

@Controller('static-text')
export class StaticTextController {
  constructor(private readonly staticTextService: StaticTextService) {}

  @Post()
  create(@Body() createStaticTextDto: CreateStaticTextDto) {
    return this.staticTextService.create(createStaticTextDto);
  }

  @Get()
  findAll() {
    return this.staticTextService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.staticTextService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStaticTextDto: UpdateStaticTextDto,
  ) {
    return this.staticTextService.update(+id, updateStaticTextDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.staticTextService.remove(+id);
  }
}

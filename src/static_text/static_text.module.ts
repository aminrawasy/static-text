import { Module } from '@nestjs/common';
import { StaticTextService } from './static_text.service';
import { StaticTextController } from './static_text.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaticText } from './entities/static_text.entity';

@Module({
  controllers: [StaticTextController],
  providers: [StaticTextService],
  imports: [TypeOrmModule.forFeature([StaticText])],
})
export class StaticTextModule {}

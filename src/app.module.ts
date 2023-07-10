import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StaticTextModule } from './static_text/static_text.module';

@Module({
  imports: [StaticTextModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

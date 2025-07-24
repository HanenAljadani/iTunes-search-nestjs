import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { HttpModule } from '@nestjs/axios';
import { Result } from './search.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([Result])],
  providers: [SearchService],
  controllers: [SearchController],
})
export class SearchModule {}

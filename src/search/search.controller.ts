import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';
import { Result } from './search.entity';

@Controller('search')
export class SearchController {
  constructor(private searchService: SearchService) {}

  @Get()
  search(
    @Query('media') media = 'podcast',
    @Query('term') term = '',
  ): Promise<Result[]> {
    return this.searchService.search(media, term);
  }
}

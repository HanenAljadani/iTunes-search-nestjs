/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { Result } from './search.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SearchService {
  constructor(
    private httpService: HttpService,
    @InjectRepository(Result)
    private resultRepository: Repository<Result>,
  ) {}
  async search(media, term): Promise<Result[]> {
    try {
      const result = await firstValueFrom(
        this.httpService.get('https://itunes.apple.com/search', {
          params: {
            term: term,
            media: media,
          },
        }),
      );
      await this.resultRepository.insert({ result: result.data });

      return result.data;
    } catch (error) {
      console.error('Error fetching from iTunes API:', error);
      throw error;
    }
  }
}

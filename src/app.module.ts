import { Module } from '@nestjs/common';
import { SearchModule } from './search/search.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Result } from './search/search.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'postgres',
      username: 'postgres',
      entities: [Result],
      database: 'itunes-app',
      synchronize: true,
      logging: true,
    }),
    SearchModule,
  ],
})
export class AppModule {}

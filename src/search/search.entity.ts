import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('itunes_search_result')
export class Result {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  result: string;
}

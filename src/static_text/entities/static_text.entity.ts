import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class StaticText {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  language: string;
  @Column()
  key: string;
  @Column()
  value: string;
}

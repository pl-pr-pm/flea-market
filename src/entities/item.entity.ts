import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ItemStatus } from '../items/item-status.enum';

@Entity()
export class Item {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column()
  status: ItemStatus;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;
}

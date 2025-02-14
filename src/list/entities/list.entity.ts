import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class List {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  position: number;

  @Column({ type: 'timestamp', nullable: false })
  createdAt: Date;

  @Column({ type: 'timestamp', nullable: false })
  updatedAt: Date;
}

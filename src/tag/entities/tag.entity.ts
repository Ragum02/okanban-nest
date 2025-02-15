import { Card } from 'src/card/entities/card.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity('tag') // Replace with the table name if needed
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 7, nullable: false })
  color: string;

  //Obligé d'ajouté le default ,
  //car soucis d'ajout de timestamp automatique sinon
  //(surement a cause de ma migration sequelize pas opti que je n'ai pas passé en TypeORM)
  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @ManyToMany(() => Card)
  @JoinTable({
    name: 'card_has_tag',
    joinColumn: {
      name: 'tag_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'card_id',
      referencedColumnName: 'id',
    },
  })
  cards: Card[];
}

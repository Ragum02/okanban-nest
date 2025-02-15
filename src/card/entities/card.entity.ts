import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { List } from '../../list/entities/list.entity';
import { Tag } from 'src/tag/entities/tag.entity';

@Entity('card')
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: false })
  content: string;

  @Column({ type: 'varchar', length: 7, nullable: true })
  color: string;

  @Column({ type: 'int', nullable: false, default: 1 })
  position: number;

  @Column({ type: 'int', nullable: false })
  list_id: number;

  @ManyToOne(() => List, (list) => list.cards) //Je lui indique avec qui il est en relation et qu'il y'a une rélation dans l'autre sens aussi.
  @JoinColumn({ name: 'list_id' })
  list: List[];

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @ManyToMany(() => Tag, (tags) => tags.cards, { cascade: true })
  //Mettre en cascade pour la suppression des tags
  @JoinTable({
    //On lui signifie a qu'elle table il fait la jointure avec les parametres
    //comme j'en ai déjà une existante
    name: 'card_has_tag',
    joinColumn: {
      name: 'card_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'tag_id',
      referencedColumnName: 'id',
    },
  })
  tags: Tag[];
}

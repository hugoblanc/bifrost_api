import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { MetaMedia } from '../meta-media/meta-media.entity';

@Entity()
export class Content {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  contentId: string;

  @Column({ length: 200 })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({type: 'timestamp'})
  date: Date;

  @ManyToOne(type => MetaMedia, metaMedia => metaMedia.contents)
  metaMedia: MetaMedia;

}

import { BaseEntity, Entity,  Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Blog extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    blogName: string;

    @Column()
    blogUrl: string;
}

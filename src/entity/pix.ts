import{
    Entity, 
    PrimaryGenerateColumn,
    JoinColumn,
    OneToOne,
    Column,
    CreateDateColumn,
    ManyToOne,
    UpdateDateColumn
} from `typeorm`

@Entity()
export class pix {
    @PrimaryGenerateColumn(`uuid`)
    id: string;

    @Column()
    status: string;

    @Column()
    value: number;

    @CreateDateColumn()
    updatedAt: Date;

    @UpdateDateColumn()
    updatedAt: Date



}
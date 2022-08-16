import { AbstractEnity } from 'src/abstractions/entity.abstraction';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'users' })
export class User extends AbstractEnity {
    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    password: string;

    @Column({ type: Boolean, default: true })
    isActive: boolean;
}

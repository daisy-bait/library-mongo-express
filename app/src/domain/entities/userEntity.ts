import Entity from "./entity";

export default class UserEntity extends Entity<UserEntity> {
    id!: string | undefined;
    username!: string;
    password!: string;
    roles!: string[];

}
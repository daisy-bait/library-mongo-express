import Entity from "./entity";

export default class UserEntity extends Entity<UserEntity> {
    id!: string | undefined;
    username!: string | undefined;
    password!: string | undefined;
    roles!: string[];

}
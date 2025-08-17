import Entity from "./entity";

export default class UserEntity extends Entity<UserEntity> {
    id!: unknown;
    username!: string | undefined;
    password!: string | undefined;
    roles!: string[];

}
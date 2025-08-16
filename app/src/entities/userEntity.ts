import Entity from "./entity";

export default class UserEntity extends Entity<UserEntity> {
    username!: string;
    password!: string;
    roles!: string[];

}
import BookEntity from "./bookEntity";
import Entity from "./entity";

export default class AuthorEntity extends Entity<AuthorEntity> {
    readonly id!: string;
    name!: string;
    age!: number;
    biography?: string;
    books?: BookEntity[];

}
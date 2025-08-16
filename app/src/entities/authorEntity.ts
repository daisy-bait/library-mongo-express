import BookEntity from "./bookEntity";
import Entity from "./entity";

export default class AuthorEntity extends Entity<AuthorEntity> {
    name!: string;
    age!: number;
    biography?: string;
    books?: BookEntity[];

}
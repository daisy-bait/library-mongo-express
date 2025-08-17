import AuthorEntity from "./authorEntity";
import Entity from "./entity";

export default class BookEntity extends Entity<BookEntity> {
    readonly id!: string;
    isbn!: string;
    title!: string;
    genre!: string;
    description?: string;
    publishedDate: Date = new Date();
    author!: AuthorEntity;

}
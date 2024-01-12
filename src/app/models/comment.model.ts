import {Author} from "./author.model";

export interface Comment {

    id?: string;
    content: string;
    article: string;
    authorId?: string;
    author?: Author;
    createdAt?: Date;

}

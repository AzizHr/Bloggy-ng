import {Author} from "./author.model";

export interface Comment {

    id?: string;
    content: string;
    articleId: string;
    authorId?: string;
    author?: Author;
    createdAt?: Date;

}

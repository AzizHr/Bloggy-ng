import { Author } from "../user/author.model";

export interface CommentResponse {

    id: string;
    content: string;
    article: string;
    author: Author;
    createdAt: Date;

}

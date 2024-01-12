import { Media } from "./media.model";
import {Author} from "./author.model";
import {Comment} from "./comment.model";

export interface Article {

    id?: string;
    title: string;
    content: string;
    createdAt?: Date;
    tags: string[];
    authorId?: string;
    author?: Author;
    comments?: Comment[];
    medias: Media[];

}

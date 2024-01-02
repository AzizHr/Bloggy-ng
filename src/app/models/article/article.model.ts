import { Media } from "../media/media.model";

export interface Article {

    id?: string;
    title: string;
    content: string;
    tags: string[];
    author: string;
    medias: Media[];

}
